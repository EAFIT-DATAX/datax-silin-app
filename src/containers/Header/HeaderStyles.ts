import { styled } from '@mui/material/styles';
import {AppBar, Typography, Button} from '@mui/material';

export const StyledAppBar = styled(AppBar)({
    background: '#081b31',
});

export const StyledLogo = styled('img')({
    marginRight: 'auto',
});

export const StyledTitle = styled(Typography)({
    flexGrow: 1,
    marginLeft: 15,
    fontSize: 12,
    textDecoration: 'underline',
});

export const StyledButton = styled(Button)({
    fontSize: 12,
    textTransform: 'capitalize',
    marginRight: 15,
});
