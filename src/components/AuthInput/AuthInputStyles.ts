import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
    marginBottom: "15px",
    backgroundColor: "#d9d9d9",
    borderRadius: "10px",
    width: "100%",
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: "10px",
        },
    },
});

export const StyledPharagraph = styled("p")({
    marginBottom: "10px",
    color: "#01254d",
    fontSize: "15px",
    textAlign: "left"
})
