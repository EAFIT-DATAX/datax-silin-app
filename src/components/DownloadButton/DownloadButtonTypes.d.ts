export interface IDownloadOption {
    label: string;
    action: () => void;
}

export interface IDownloadButtonProps {
    label: string;
    options: DownloadOption[];
    disabled?: boolean;
    isLoading?: boolean;
}