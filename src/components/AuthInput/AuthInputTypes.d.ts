
export interface IAuthInputProps {
    label: string;
    type: 'email' | 'password' | 'text';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean = false;
    InputProps?: Record<string, any> = {};
}
