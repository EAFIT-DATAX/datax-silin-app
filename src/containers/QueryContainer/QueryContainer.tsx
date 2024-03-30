import React, { useState } from "react";

import { Grid, Tabs, Tab } from '@mui/material';
import { StyledButton, StyledTablePagination } from "./QueryContainerStyles";


const QueryContainer = () => {

    const [tabValue, setTabValue] = useState<number>(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => setTabValue(newValue);

    const tabs = [
        { doc_type: "FT01", label: "Consumo" },
        { doc_type: "FT03", label: "Recaudo" },
        { doc_type: "FT06", label: "Excluidos" },
        { doc_type: "FT05", label: "Cartera" },
        { doc_type: "FT02", label: "Operadores de Red", disable: true },
    ]

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
                                <Tab key={index} label={`${tab.label} (${tab.doc_type})`} disabled={tab.disable} />
                            )
                        })}
                    </Tabs>
                </Grid>
                <Grid item md={4} xs={12}>
                    <StyledTablePagination
                        count={100}
                        page={0}
                        onPageChange={() => { }}
                        rowsPerPage={10}
                        onRowsPerPageChange={() => { }}
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
