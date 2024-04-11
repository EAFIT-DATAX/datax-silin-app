export interface IResultColumns {
    [key: string]: string;
}

export interface IResultsContainerProps {
    results?: any[];
    isSearching: boolean;
    setFreeQueryValue: (value: boolean) => void;
    columns: IResultColumns;
}