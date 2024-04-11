export interface IResultColumns {
    [key: string]: string;
}

export type EnhancedTableHeadProps = {
    order?: 'asc' | 'desc',
    orderBy: string,
    onRequestSort: (columnId: string) => void,
    // maxColumns: number,
    columns: IResultColumns,
};

export interface DynamicTableProps {
    data: Array<Record<string, string>>;
    columns: IResultColumns;
}