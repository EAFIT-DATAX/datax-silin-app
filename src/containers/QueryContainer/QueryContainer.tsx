import React, { useState } from "react";
import { Grid, Tabs, Tab } from '@mui/material';
import { StyledButton, StyledTablePagination } from "./QueryContainerStyles";
import { IQueryTypeTabs, IQueryContainerProps } from './QueryContainerTypes'

const QueryContainer: React.FC<IQueryContainerProps> = ({
    setSelectedDocType,
    paginationCount,
    setPaginationCount,
    paginationPage,
    setPaginationPage,
    rowsPerPage,
    setRowsPerPage,
    onClickSearch,
    onClickDownload
}) => {

    const [tabValue, setTabValue] = useState<number>(0);

    const tabs: IQueryTypeTabs[] = [
        { docType: "FT01", label: "Consumo" },
        { docType: "FT03", label: "Recaudo" },
        { docType: "FT06", label: "Excluidos" },
        { docType: "FT05", label: "Cartera" },
        { docType: "FT02", label: "Operadores de Red", disable: true },
    ]

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue)
        setSelectedDocType(tabs[newValue].docType)
    }

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPaginationPage(0);
    }

    const handlePaginationChange = (event: any, value: number) => {
        setPaginationPage(value);
    }

    return (
        <>
            <Grid container spacing={1} style={{ paddingLeft: 30, marginTop: 20, paddingRight: 35 }}>
                <Grid item md={5} xs={12}>
                    <Tabs
                        value={tabValue}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={handleTabChange}
                    >
                        {tabs.map((tab, index) => {
                            return (
                                <Tab key={index} label={`${tab.label} (${tab.docType})`} disabled={tab.disable} />
                            )
                        })}
                    </Tabs>
                </Grid>
                <Grid item md={4} xs={12}>
                    <StyledTablePagination
                        count={paginationCount}
                        page={paginationPage}
                        onPageChange={handlePaginationChange}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleRowsPerPageChange}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        labelRowsPerPage="Filas por página"
                        labelDisplayedRows={({ from, to, count }) => `${from} - ${to} de ${count}`}
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        style={{ marginRight: 15 }}
                        onClick={onClickSearch}
                    >
                        Consulta
                    </StyledButton>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        disabled
                        onClick={onClickDownload}
                    >
                        Descargar
                    </StyledButton>
                </Grid>
            </Grid>
        </>
    )
}

export default QueryContainer;
