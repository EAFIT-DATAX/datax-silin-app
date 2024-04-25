import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Alert, Snackbar } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment } from '@mui/material';

import { ILoginContainerProps } from './LoginContainerTypes';
import Logo from '../../assets/img/colored-logo.png';
import AuthInput from "../../components/AuthInput/AuthInput";
import {
    StyledLoginContainerWrapper,
    StyledLoginTitle,
    StyledLoginSubtitle,
    StyledLoginForm,
    StyledLoginButton
} from './LoginContainerStyles';

import { login } from '../../api/auth';
import { AxiosError } from 'axios';

const LoginContainer: React.FC<ILoginContainerProps> = ({ email, password, setEmail, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [openSnackbar, setOpenSnackBar] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>("");
    const [snackBarType, setSnackBarType] = useState<"success" | "error" | "warning" | "info" | undefined>("info");


    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    if (localStorage.getItem('access_token') && localStorage.getItem('id_token')) {
        console.log("Already logged in");
        window.location.href = '/';
    }

    const handleLogin = async () => {
        if (!email.endsWith('@jikkosoft.com')) {
            setEmailError(true);
            return
        }

        try {
            const response = await login(email, password);
            const tokens = response.data;
            localStorage.setItem('access_token', tokens.access_token);
            localStorage.setItem('refresh_token', tokens.refresh_token);
            localStorage.setItem('id_token', tokens.id_token);
            navigate('/');
        } catch (error: unknown) {
            setSnackBarType("error");
            if (error instanceof AxiosError) {
                const error_type = error.response?.data?.detail?.error_type;
                setPasswordError(true);
                if (error_type === 'INVALID_LOGIN') {
                    setSnackBarMessage("Usuario o contraseña incorrectos");
                } else if (error_type === 'USER_NOT_FOUND') {
                    setSnackBarMessage("Usuario no encontrado");
                } else {
                    console.error(error);
                    setSnackBarMessage("Error con el servidor. Intente de nuevo más tarde");
                }
            }
            else {
                console.error(error);
                setSnackBarMessage("Error desconocido. Intente de nuevo más tarde");
            }
            setOpenSnackBar(true);
        }
    }

    useEffect(() => {
        setEmailError(false);
    }, [email])

    useEffect(() => {
        setPasswordError(false);
    }, [password])

    const endAdornment = (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    )

    return (
        <StyledLoginContainerWrapper item xs={10} sm={6} md={4} lg={3}>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={() => setOpenSnackBar(false)}
            >
                <Alert onClose={() => setOpenSnackBar(false)} severity={snackBarType} sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <StyledLoginTitle variant="body1">Bienvenido a</StyledLoginTitle>
            <Box display="flex" flexDirection="column" alignItems="center">
                <img src={Logo} width={250} alt="Silin DataX" />
                <StyledLoginSubtitle variant="body1">
                    Explora tus datos con presición, conecta sin limites, escala hacia el futuro.
                </StyledLoginSubtitle>
                <StyledLoginForm>
                    <AuthInput
                        label="Correo"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                    />
                    <AuthInput
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: endAdornment
                        }}
                        error={passwordError}
                    />
                </StyledLoginForm>
                <StyledLoginButton
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    disabled={!email || !password}
                >
                    Ingresar
                </StyledLoginButton>
            </Box>
        </StyledLoginContainerWrapper>
    )
}

export default LoginContainer
