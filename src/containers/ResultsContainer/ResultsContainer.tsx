import React, { useState } from "react";
import { Grid, Tabs, Tab } from '@mui/material';

import DynamicTable from "../../components/DynamicTable";
import LoadingLayout from "../../layouts/LoadingLayout";
import { IResultsContainerProps } from "./ResultsContainerTypes";

const ResultsContainer: React.FC<IResultsContainerProps> = ({ results, isSearching, setFreeQueryValue }) => {
    const [tabValue, setTabValue] = useState<number>(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue)
        setFreeQueryValue(tabs[newValue].freeQuery)
    }

    const tabs = [
        { freeQuery: false, label: "Coincidencia exacta" },
        { freeQuery: true, label: "Otras coincidencias" },
    ]

    return (
        <>
            <Grid container spacing={1} style={{ marginTop: 5 }}>
                <Grid item xs={12} style={{ paddingLeft: '4%' }}>
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
                                <Tab key={index} label={`${tab.label}`} />
                            )
                        })}
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <LoadingLayout isLoading={isSearching} >
                        {results && results.length
                            ? <DynamicTable data={results}/>
                            : <p style={{ textAlign: "center" }}>
                                No se encontraron resultados 😢
                            </p>
                        }
                    </LoadingLayout>
                </Grid>
            </Grid>
        </>
    )
};

export default ResultsContainer;