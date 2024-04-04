import React, { useState } from "react";
import { TableBody, TableHead, Grid, TableSortLabel } from "@mui/material";
import { DynamicTableProps, EnhancedTableHeadProps } from "./DynamicTableTypes";
import { StyledTableCell, StyledTableRow, StyledTableContainer, StyledColumnHeader } from "./DynamicTableStyles";

const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = ({ order, orderBy, onRequestSort, maxColumns }) => {
    return (
        <TableHead>
            <StyledTableRow>
                {[...Array(maxColumns).keys()].map(num => (
                    <StyledColumnHeader key={num}>
                        <TableSortLabel
                            active={orderBy === num.toString()}
                            direction={orderBy === num.toString() ? order : 'asc'}
                            onClick={() => onRequestSort(num.toString())}
                        >
                            {num}
                        </TableSortLabel>
                    </StyledColumnHeader>
                ))}
                <StyledColumnHeader>
                    <TableSortLabel
                        active={orderBy === 'power_company'}
                        direction={orderBy === 'power_company' ? order : 'asc'}
                        onClick={() => onRequestSort('power_company')}
                    >
                        power_company
                    </TableSortLabel>
                </StyledColumnHeader>
            </StyledTableRow>
        </TableHead>
    );
}


const DynamicTable: React.FC<DynamicTableProps> = ({ data }) => {

    let maxColumns = 0;
    data.forEach(item => {
        const numberedKeys = Object.keys(item).filter(key => !isNaN(Number(key)));
        if (numberedKeys.length > maxColumns) {
            maxColumns = numberedKeys.length;
        }
    });

    const [order, setOrder] = useState<'asc' | 'desc' | undefined>(undefined);
    const [orderBy, setOrderBy] = useState<string>('0');

    const handleRequestSort = (columnId: string) => {
        const isAsc = orderBy === columnId && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(columnId);
    };

    const sortedData = order === 'asc'
        ? [...data].sort((a, b) => (a[orderBy] || '').localeCompare(b[orderBy] || ''))
        : [...data].sort((a, b) => (b[orderBy] || '').localeCompare(a[orderBy] || ''));

    return (
        <Grid container style={{ marginTop: 30, marginBottom: 30 }}>
            <StyledTableContainer style={{ width: "100%", marginLeft: 50, marginRight: 50 }} >
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    maxColumns={maxColumns}
                />
                <TableBody>
                    {sortedData.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {[...Array(maxColumns).keys()].map(num => (
                                <StyledTableCell key={num}>
                                    {row[num.toString()] || "-"}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell>{row.power_company}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </StyledTableContainer>
        </Grid>
    );
};

export default DynamicTable;
