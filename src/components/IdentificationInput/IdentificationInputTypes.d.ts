export interface IdentificationInputProps {
    label: string;
    disabled?: boolean;
    onDisabledClick: (newValue: boolean) => void;
    placeholder?: string;
    mainValue: string;
    verificationValue: string;
    onMainChange: (newValue: string) => void;
    onVerificationChange: (newValue: string) => void;
}
