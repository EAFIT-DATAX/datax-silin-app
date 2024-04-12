import React from "react";

import { IAuthInputProps } from "./AuthInputTypes";
import { StyledTextField, StyledPharagraph } from "./AuthInputStyles";


const AuthInput: React.FC<IAuthInputProps> = ({
    type,
    label,
    value,
    onChange,
    error,
    InputProps
}) => {
    return (
        <>
            <StyledPharagraph><b>{label}</b></StyledPharagraph>
            <StyledTextField
                type={type}
                value={value}
                onChange={onChange}
                error={error}
                size="small"
                InputProps={InputProps}
            />
        </>
    )
}

export default AuthInput;
