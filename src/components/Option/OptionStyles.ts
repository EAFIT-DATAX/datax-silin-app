import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


export const StyledOptionWrapper = styled(Grid)({
    paddingLeft: '25px'
});

export const StyledTooltipGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const StyledInfoIcon = styled(InfoIcon)({
    color: "#031c39"
})