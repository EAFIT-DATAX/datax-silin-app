import React, { useState } from 'react';
import { StyledCheckbox, StyledTextField } from './IdentificationInputStyles';
import { Typography } from '@mui/material';
import { IdentificationInputProps } from './IdentificationInputTypes.d';

const IdentificationInput: React.FC<IdentificationInputProps> = ({ label, disabled, placeholder, mainValue, verificationValue, onMainChange, onVerificationChange }) => {
    const [inputDisabled, setInputDisabled] = useState<boolean>(disabled === undefined ? true : disabled);

    const handleMainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        if (parseInt(newValue) >= 0)
            onMainChange(newValue);
    };

    const handleVerificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        const intValue = parseInt(newValue);

        if (intValue >= 0 && intValue <= 9) {
            onVerificationChange(newValue);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDisabled(!event.target.checked);
    };

    return (
        <div>
            <div>
                <StyledCheckbox
                    checked={!inputDisabled}
                    onChange={handleCheckboxChange}
                    disabled={disabled}
                />
                <Typography variant="caption">
                    {label}
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <StyledTextField
                    value={mainValue}
                    onChange={handleMainChange}
                    size="small"
                    label={placeholder}
                    variant="outlined"
                    type="number"
                    disabled={inputDisabled}
                    inputProps={{ maxLength: 30 }}
                    style={{ marginRight: 5 }}
                />
                <Typography variant="caption">
                    -
                </Typography>
                <StyledTextField
                    value={verificationValue}
                    onChange={handleVerificationChange}
                    size="small"
                    variant="outlined"
                    type="number"
                    disabled={inputDisabled}
                    inputProps={{ maxLength: 1 }}
                    style={{ marginLeft: 5, width: 70 }}
                />
            </div>
        </div>
    );
};

export default IdentificationInput;
