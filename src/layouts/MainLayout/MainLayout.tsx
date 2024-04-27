import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { MainLayoutProps } from './MainLayoutTypes';
import Header from '../../containers/Header';

import { IdleTimerProvider } from 'react-idle-timer'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('id_token');
        navigate('/login');
    }

    if (!localStorage.getItem('access_token') || !localStorage.getItem('id_token')) {
        window.location.href = '/login';
    }

    return (
        <IdleTimerProvider
            timeout={1000 * 60 * 60 * 24}
            onIdle={handleLogout}
        >
            <Header
                currentPage='Consulta de Data'
                onLogout={handleLogout}
            />
            <Grid container>
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </IdleTimerProvider>
    )
}

export default MainLayout;
