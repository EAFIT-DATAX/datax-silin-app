import { styled } from '@mui/material/styles';
import { Checkbox, TextField } from '@mui/material';


export const StyledCheckbox = styled(Checkbox)({
    color: '#29c498',
    '&.Mui-checked': {
        color: '#29c498',
    },
});

export const StyledTextField = styled(TextField)({
    width: '90%',
    display: 'flex',
    marginLeft: 35,
});
