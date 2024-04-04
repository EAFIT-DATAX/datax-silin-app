export type EnhancedTableHeadProps = {
    order?: 'asc' | 'desc',
    orderBy: string,
    onRequestSort: (columnId: string) => void,
    maxColumns: number,
};

export interface DynamicTableProps {
    data: Array<Record<string, string>>;
}