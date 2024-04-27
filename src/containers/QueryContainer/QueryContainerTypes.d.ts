export type DocumentTypes = 'FT01' | 'FT02' | 'FT03' | 'FT05' | 'FT06';

export interface IQueryContainerProps {
    setSelectedDocType: (docType: DocumentTypes) => void;

    paginationCount: number;
    setPaginationCount: (count: number) => void;

    paginationPage: number;
    setPaginationPage: (page: number) => void;

    rowsPerPage: number
    setRowsPerPage: (nRows: number) => void

    onClickSearch: () => void;
    onClickDownload: (download_filetype: string) => void;

    searchButtonDisabled: boolean
    downloadButtonDisabled: boolean
}



export interface IQueryTypeTabs {
    docType: DocumentTypes;
    label: string;
    disable?: boolean;
}