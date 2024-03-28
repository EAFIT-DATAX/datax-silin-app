import React from 'react';
import { Grid } from '@mui/material';
import { MainLayoutProps } from './MainLayoutTypes';
import Header from '../../containers/Header';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header
                currentPage='Consulta de Data'
                onLogout={() => console.log("Comming soon!")}
            />
            <Grid container>
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout;
