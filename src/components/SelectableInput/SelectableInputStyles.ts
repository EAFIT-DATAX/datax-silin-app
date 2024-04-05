import { styled } from '@mui/material/styles';
import { Select, Chip, Checkbox, FormControl, TextField, InputLabel } from '@mui/material';

export const StyledSelect = styled(Select)({
    '& .MuiSelect-root': {
        display: 'flex',
        flexWrap: 'wrap',
    },
    '& .Mui-selected': {
        backgroundColor: 'rgba(41, 196, 152, 0.1)',
        '&:hover': {
            backgroundColor: 'rgba(41, 196, 152, 0.2)',
        },
    },
    '& .Mui-disabled': {
        backgroundColor: '#d4d4d4',
    },
});

export const StyledChip = styled(Chip)({
    margin: 2,
});

export const StyledCheckbox = styled(Checkbox)({
    color: '#29c498',
    '&.Mui-checked': {
        color: '#29c498',
    },
});

export const StyledFormControl = styled(FormControl)({
    width: '92%',
    display: 'flex',
    marginLeft: 'auto',
});

export const StyledTextField = styled(TextField)({
    width: '92%',
    display: 'flex',
    marginLeft: 'auto',
    '& .Mui-disabled': {
        backgroundColor: '#d4d4d4',
    },
});

export const StyledInputLabel = styled(InputLabel)({
    backgroundColor : "#ffffff",
});
