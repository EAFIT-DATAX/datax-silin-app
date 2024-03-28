import React from 'react';
import { Toolbar } from '@mui/material';
import { HeaderProps } from './HeaderTypes';
import { StyledAppBar, StyledLogo, StyledTitle, StyledButton } from './HeaderStyles';
import logo from '../../assets/img/logo.png';

const Header: React.FC<HeaderProps> = ({ currentPage, onLogout }) => {
    return (
        <>
            <StyledAppBar position="static" style={{ marginBottom: 25 }}>
                <Toolbar>
                    <StyledLogo src={logo} width={100} alt="Silin DataX"/>
                    <StyledTitle variant="caption">
                        {currentPage}
                    </StyledTitle>
                    <StyledButton color="inherit" onClick={onLogout}>Cerrar Sesión</StyledButton>
                </Toolbar>
            </StyledAppBar>
        </>
    );
};

export default Header;
