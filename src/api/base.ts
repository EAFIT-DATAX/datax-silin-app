import axios from "axios"


const api = axios.create({
    baseURL: "https://yvc3vlvzf2.execute-api.us-east-1.amazonaws.com/dev/datax"
})

api.interceptors.request.use(
    config => {
        config.headers["x-api-key"] = "7Df3RpZt747d6VIVJNOZm7DBb8zeq2Jk53zlxzuo"
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
        console.error(error)
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            console.error(error)

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
        return Promise.reject(error)
    }
)

const refreshToken = async (refreshToken: string) => {
    const response = await api.post(`/auth/refresh`, { 'refresh_token': refreshToken });
    return response.data;
}

export default api