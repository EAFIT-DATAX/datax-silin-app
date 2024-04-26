import React from 'react';
import { StyledCheckbox, StyledTextField } from './IdentificationInputStyles';
import { Typography } from '@mui/material';
import { IdentificationInputProps } from './IdentificationInputTypes.d';

const IdentificationInput: React.FC<IdentificationInputProps> = ({ label, disabled, placeholder, mainValue, verificationValue, onMainChange, onVerificationChange, onDisabledClick }) => {

    const handleMainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value;
        if (event.target.value.includes('-')) {
            const valueParts = event.target.value.split('-');
            const newVerificationDigitValue = valueParts[1];
            newValue = valueParts[0];
            if (newVerificationDigitValue === '' || parseInt(newVerificationDigitValue) >= 0)
                onVerificationChange(newVerificationDigitValue);
        }

        newValue = newValue.replace(/[^0-9]/g, '');
        if (newValue === '' || parseInt(newValue) >= 0)
            onMainChange(newValue);
    };

    const handleVerificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        const intValue = parseInt(newValue);

        if (newValue === '' || (intValue >= 0 && intValue <= 9)) {
            onVerificationChange(newValue);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDisabledClick(event.target.checked);
    };

    return (
        <div>
            <div>
                <StyledCheckbox
                    checked={!disabled}
                    onChange={handleCheckboxChange}
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
                    type="text"
                    disabled={disabled}
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
                    disabled={disabled}
                    inputProps={{ maxLength: 1 }}
                    style={{ marginLeft: 5, width: 70 }}
                />
            </div>
        </div>
    );
};

export default IdentificationInput;
