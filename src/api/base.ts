import axios from "axios"

interface ApiConfig {
    baseURL: string
    "x-api-key": string
}

interface ApiConfigMap {
    [env: string]: ApiConfig
}

const API_CONFIG: ApiConfigMap = {
    "dev": {
        "baseURL": "https://yvc3vlvzf2.execute-api.us-east-1.amazonaws.com/dev/datax",
        "x-api-key": "7Df3RpZt747d6VIVJNOZm7DBb8zeq2Jk53zlxzuo"
    },
    "prod": {
        "baseURL": "https://c1yniuxvzl.execute-api.us-east-1.amazonaws.com/prod/datax",
        "x-api-key": "SkjfwBTYOL6fELnbrHs5f6zuwOVBnYsc8pJfyHsG"
    }
}


const api = axios.create({
    baseURL: API_CONFIG[process.env.REACT_APP_DATAX_ENV || 'dev'].baseURL,
})

api.interceptors.request.use(
    config => {
        config.headers["x-api-key"] = API_CONFIG[process.env.REACT_APP_DATAX_ENV || 'dev']["x-api-key"]
        if (!config.url?.includes('/auth/')){
            config.headers["Authorization"] = `Bearer ${localStorage.getItem('id_token')}`
        }
        return config
    },
    error => Promise.reject(error)
)


api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config
        console.error(`[ERROR-INTERCEPTOR]`)
        console.error(error)

        let needRefresh = false

        if (!error.response) {
            if (localStorage.getItem('refresh_token')) {
                needRefresh = true
            }
        } else {
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true
                console.error(error)
                needRefresh = true
            }
        }

        if (!needRefresh) {
            return Promise.reject(error)
        }

        try {
            const tokenResponse = await refreshToken(localStorage.getItem('refresh_token') || '')
            localStorage.setItem('id_token', tokenResponse.id_token)
            localStorage.setItem('access_token', tokenResponse.access_token)
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.id_token}`
            return api(originalRequest)
        } catch (refreshError) {
            console.error(`[REFRESH-ERROR] ${refreshError}`)
            localStorage.removeItem('id_token')
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.href = '/login'
            return Promise.reject(refreshError)
        }
    }
)

const refreshToken = async (refreshToken: string) => {
    const response = await api.post(`/auth/refresh`, { 'refresh_token': refreshToken });
    return response.data;
}

export default api