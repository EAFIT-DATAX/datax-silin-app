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
    setRowsPerPage
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
                        onPageChange={() => console.log("Page changed")}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={() => console.log("Rows per page changed")}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        labelRowsPerPage="Filas por página"
                        labelDisplayedRows={({ from, to, count }) => `${from} - ${to} de ${count}`}
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <StyledButton variant="contained" color="primary" style={{ marginRight: 15 }}>Consulta</StyledButton>
                    <StyledButton variant="contained" color="primary" disabled>Descargar</StyledButton>
                </Grid>
            </Grid>
        </>
    )
}

export default QueryContainer;
