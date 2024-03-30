export interface Option {
    value: string | number;
    label: string;
}

export interface SelectableInputProps {
    type: 'text' | 'number' | 'select' | 'multi-select';
    options?: Option[];
    label: string;
    disabled?: boolean;
    onDisabledClick: (newValue: boolean) => void;
    placeholder?: string;
    value: string | number | string[];
    onChange: (newValues: string | number | string[]) => void;
}
