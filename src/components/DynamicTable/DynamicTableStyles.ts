import { styled } from '@mui/material/styles';
import { TableContainer, TableCell, TableRow } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)({
    width: '100%',
});

export const StyledTableCell = styled(TableCell)({});

export const StyledColumnHeader = styled(TableCell)({
    backgroundColor: '#e2e5e8',
    textAlign: 'center',
})


export const StyledTableRow = styled(TableRow)({
    '&:nth-child(even)': {
        backgroundColor: '#e2e5e8',
    },
    '&:nth-child(odd)': {
        backgroundColor: '#fff',
    },
});
