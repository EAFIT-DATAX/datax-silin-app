export interface IOption {
    checked: boolean;
    label: string;
    tooltip?: string;
    setChecked: (checked: boolean) => void;
}