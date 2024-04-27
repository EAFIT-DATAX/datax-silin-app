import { Button, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
    backgroundColor: '#081b31',
    color: '#fff',
    width: "45%",
    '&:hover': {
        backgroundColor: '#0e3057',
        color: '#fff',
    },
    '&.Mui-disabled': {
        backgroundColor: '#d4d4d4',
        color: '#fff',
        opacity: 0.5,
    }
});

export const StyledMenu = styled(Menu)({
    marginTop: '5px',
    '& .MuiPaper-root': {
        borderRadius: '15px',
    },
});
