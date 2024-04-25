import React from "react";

import { Grid, Checkbox, Typography, Tooltip } from "@mui/material";
import { IOption } from "./OptionsTypes";
import {
    StyledInfoIcon,
    StyledOptionWrapper,
    StyledTooltipGrid
} from "./OptionStyles"

const Option: React.FC<IOption> = ({ checked, label, tooltip, setChecked }) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return (
        <StyledOptionWrapper spacing={1} container>
            <Grid item>
                <Checkbox value={checked} onChange={handleCheckboxChange} />
                <Typography variant='caption' >
                    {label}
                </Typography>
            </Grid>
            <StyledTooltipGrid item>
                <Tooltip title={tooltip} placement="right-end">
                    <StyledInfoIcon fontSize='small'/>
                </Tooltip>
            </StyledTooltipGrid>
        </StyledOptionWrapper>
    )
}

export default Option;