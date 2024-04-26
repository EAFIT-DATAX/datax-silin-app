import React, { useState } from "react";
import { TableBody, TableHead, Grid, TableSortLabel } from "@mui/material";
import { DynamicTableProps, EnhancedTableHeadProps } from "./DynamicTableTypes";
import { StyledTableCell, StyledTableRow, StyledTableContainer, StyledColumnHeader } from "./DynamicTableStyles";

const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = ({ order, orderBy, onRequestSort, columns }) => {
    // const numericalRows = Array(maxColumns)
    const width = 100/(Object.keys(columns).length + 1)

    return (
        <TableHead>
            <StyledTableRow>
                {Object.entries(columns).map(([num, columnName]) => (
                    <StyledColumnHeader key={num} style={{ width: `${width}%` }}>
                        <TableSortLabel
                            active={orderBy === num}
                            direction={orderBy === num ? order : 'asc'}
                            onClick={() => onRequestSort(num)}
                        >
                            {columnName}
                        </TableSortLabel>
                    </StyledColumnHeader>
                ))}
                <StyledColumnHeader style={{ width: `${width}%`}}>
                    <TableSortLabel
                        active={orderBy === 'power_company'}
                        direction={orderBy === 'power_company' ? order : 'asc'}
                        onClick={() => onRequestSort('power_company')}
                    >
                        Empresa de energía
                    </TableSortLabel>
                </StyledColumnHeader>
                <StyledColumnHeader style={{ width: `${width}%`}}>
                    <TableSortLabel
                        active={orderBy === 'origin'}
                        direction={orderBy === 'origin' ? order : 'asc'}
                        onClick={() => onRequestSort('origin')}
                    >
                        Origen
                    </TableSortLabel>
                </StyledColumnHeader>
            </StyledTableRow>
        </TableHead>
    );
}


const DynamicTable: React.FC<DynamicTableProps> = ({ data, columns }) => {

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
        <>
            <Grid container style={{ marginTop: 30, marginBottom: 30 }}>
                <StyledTableContainer style={{ marginLeft: 50, marginRight: 50 }} >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        columns={columns}
                    />
                    <TableBody>
                        {sortedData.map((row, rowIndex) => (
                            <StyledTableRow key={rowIndex}>
                                {Object.keys(columns).map(num => (
                                    <StyledTableCell key={num}>
                                        {row[num] !== undefined ? row[num] : "-"}
                                    </StyledTableCell>
                                ))}
                                <StyledTableCell>{row.power_company || "-"}</StyledTableCell>
                                <StyledTableCell>{row.origin || "-"}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </StyledTableContainer>
            </Grid>
        </>
    );
};

export default DynamicTable;
