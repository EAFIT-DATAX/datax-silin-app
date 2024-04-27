import React, { useState } from "react";
import { MenuItem } from "@mui/material"
import { ArrowDropDown } from "@mui/icons-material"
import { IDownloadButtonProps } from "./DownloadButtonTypes"
import { StyledButton, StyledMenu } from "./DownloadButtonStyles";
import { RiseLoader } from "react-spinners";

const DownloadButton: React.FC<IDownloadButtonProps> = ({ label, options, disabled, isLoading }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledButton
                variant="outlined"
                endIcon={<ArrowDropDown />}
                onClick={handleClick}
                disabled={disabled}
            >
                {isLoading ? <RiseLoader style={{ paddingTop: 1 }} color="#ffffff" size={8} /> : label}
            </StyledButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} onClick={() => {
                        option.action();
                        handleClose();
                    }}>
                        {option.label}
                    </MenuItem>
                ))}
            </StyledMenu>
        </>
    )
}

export default DownloadButton;