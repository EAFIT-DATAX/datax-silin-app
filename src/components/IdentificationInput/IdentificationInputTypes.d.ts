export interface IdentificationInputProps {
    label: string;
    disabled?: boolean;
    placeholder?: string;
    mainValue: string;
    verificationValue: string;
    onMainChange: (newValue: string) => void;
    onVerificationChange: (newValue: string) => void;
}
