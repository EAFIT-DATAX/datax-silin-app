import React from 'react';
import { MenuItem, InputLabel, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledSelect, StyledChip, StyledCheckbox, StyledFormControl, StyledTextField } from './SelectableInputStyles';
import { SelectableInputProps, Option } from './SelectableInputTypes.d';

const SelectableInput: React.FC<SelectableInputProps> = ({ type, options = [], label, disabled, placeholder, value, onChange, onDisabledClick }) => {

    const handleInputChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        onChange(event.target.value as string | number | string[]);
    }

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value;
        if (type === 'number'){
            newValue = newValue.replace(/[^0-9]/g, '');
        }
        onChange(newValue as string | number | string[]);
    }


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
            {type === 'text' && <StyledTextField value={value} onChange={handleTextChange} size="small" label={placeholder} variant="outlined" fullWidth disabled={disabled} inputProps={{maxLength: 50}}/>}
            {type === 'number' && <StyledTextField value={value} onChange={handleTextChange} size="small" label={placeholder} variant="outlined" fullWidth type="number" disabled={disabled} inputProps={{maxLength: 30}} />}
            {type === 'select' && (
                <StyledFormControl variant="outlined" fullWidth disabled={disabled}>
                    <InputLabel size="small">{placeholder}</InputLabel>
                    <StyledSelect size="small" value={value} onChange={handleInputChange}>
                        {options.map((option: Option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>
            )}
            {type === 'multi-select' && (
                <StyledFormControl variant="outlined" fullWidth disabled={disabled}>
                    <InputLabel size="small">{placeholder}</InputLabel>
                    <StyledSelect size="small" multiple value={value as string[]} onChange={handleInputChange} renderValue={(selected) => (
                        <div>
                            {(selected as string[]).map((value) => (
                                <StyledChip key={value} label={options.find(o => o.value === value)?.label} />
                            ))}
                        </div>
                    )}>
                        {options.map((option: Option) => (
                            <MenuItem  key={option.value} value={option.value}>
                                <StyledCheckbox checked={(value as string[]).includes(option.value.toString())} />
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>
            )}
        </div>
    );
};

export default SelectableInput;
