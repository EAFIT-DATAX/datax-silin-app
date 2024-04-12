import React, { useState } from 'react'

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

const LoginContainer: React.FC<ILoginContainerProps> = ({ email, password, setEmail, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

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
            <StyledLoginTitle variant="body1">Bienvenido a</StyledLoginTitle>
            <Box display="flex" flexDirection="column" alignItems="center">
                <img src={Logo} width={250} alt="Silin DataX"/>
                <StyledLoginSubtitle variant="body1">
                    Explora tus datos con presición, conecta sin limites, escala hacia el futuro.
                </StyledLoginSubtitle>
                <StyledLoginForm>
                    <AuthInput
                        label="Correo"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <AuthInput
                        label="Contraseña"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: endAdornment
                        }}
                    />
                </StyledLoginForm>
                <StyledLoginButton variant="contained" color="primary">
                    Iniciar sesión
                </StyledLoginButton>
            </Box>
        </StyledLoginContainerWrapper>
    )
}

export default LoginContainer
