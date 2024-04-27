import styled from "@mui/material/styles/styled";
import { Grid, Typography, Button } from "@mui/material";

export const StyledLoginContainerWrapper = styled(Grid)(({ theme }) => ({
    backgroundColor: "#ffffff",
    padding: "25px 45px",
    borderRadius: "15px",
    minHeight: "600px",

    [theme.breakpoints.up('sm')]: {
        minWidth: "500px",
    }
}));

const BaseLoginText = styled(Typography)({
    color: "#5c6b7f"
})

export const StyledLoginTitle = styled(BaseLoginText)({
    fontSize: "20px"
})

export const StyledLoginSubtitle = styled(BaseLoginText)({
    fontSize: "18px",
    textAlign: "center",
})

export const StyledLoginForm = styled("div")({
    width: "100%",
    margin: "25px 0px",
    marginBottom: "35px"
})

export const StyledLoginButton = styled(Button)({
    backgroundColor: "#031c39",
    width: "175px",
    height: "40px",
    borderRadius: "5px",
})
