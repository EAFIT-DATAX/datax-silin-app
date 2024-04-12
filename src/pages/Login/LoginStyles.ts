import { Grid } from '@mui/material';
import styled from '@mui/material/styles/styled';

import LoginBackground from '../../assets/img/login-background.png';

export const StyledLogin = styled(Grid)({
    minHeight: '100vh',
    backgroundColor: "#031c39",
    backgroundImage: `url(${LoginBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
})
