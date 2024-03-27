import React, { useState } from 'react';

import { Grid } from '@mui/material';

import SelectableInput from '../../components/SelectableInput';
import IdentificationInput from '../../components/IdentificationInput';

const FiltersContainer: React.FC = () => {
    const [entityValue, setEntityValue] = useState<string>("");
    const [identificationValue, setIdentificationValue] = useState<string>("");
    const [verificationDigitValue, setVerificationDigitValue] = useState<string>("");
    const [nameValue, setNameValue] = useState<string>("");
    const [economicDestinationValue, setEconomicDestinationValue] = useState<string[]>([]);
    const [yearValue, setYearValue] = useState<string[]>([]);
    const [meterValue, setMeterValue] = useState<string>("");
    const [energyCompanyValue, setEnergyCompanyValue] = useState<string[]>([]);
    const [strarumValue, setStrarumValue] = useState<string[]>([]);


    return (
        <>
            <Grid container spacing={3} style={{ paddingLeft: 50, paddingRight: 50 }}>
                {/* First filter row */}
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='select'
                        label='Entidad'
                        value={entityValue}
                        onChange={(value) => setEntityValue(value as string)}
                        placeholder='Seleccione la entidad'
                        options={[ { label: "G-Valle", value: "G-Valle" }, { label: "A-Palmira", value: "A-Palmira" } ]}
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <IdentificationInput
                        label='Identificación'
                        mainValue={identificationValue}
                        verificationValue={verificationDigitValue}
                        onMainChange={(value) => setIdentificationValue(value)}
                        onVerificationChange={(value) => setVerificationDigitValue(value)}
                        placeholder='Digite la identificación'
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='text'
                        value={nameValue}
                        onChange={(value) => setNameValue(value as string)}
                        label='Nombre / Razón Social'
                        placeholder='Digite el nombre'
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='multi-select'
                        label='Destino Económico'
                        value={economicDestinationValue}
                        onChange={(value) => setEconomicDestinationValue(value as string[])}
                        placeholder='Seleccione el destino económico'
                        options={[ { label: "G-Valle", value: "G-Valle" }, { label: "A-Palmira", value: "A-Palmira" } ]}
                    />
                </Grid>
                {/* Second filter row */}
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='multi-select'
                        label='Año'
                        value={yearValue}
                        onChange={(value) => setYearValue(value as string[])}
                        placeholder='Seleccione el año'
                        options={[
                            { label: "2017", value: "2017" }, { label: "2018", value: "2018" },
                            { label: "2019", value: "2019" }, { label: "2020", value: "2020" },
                            { label: "2021", value: "2021" }, { label: "2022", value: "2022" },
                            { label: "2023", value: "2023" },
                        ]}
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='text'
                        label='Medidor'
                        value={meterValue}
                        onChange={(value) => setMeterValue(value as string)}
                        placeholder='Digite el medidor'
                        options={[ { label: "G-Valle", value: "G-Valle" }, { label: "A-Palmira", value: "A-Palmira" } ]}
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='multi-select'
                        label='Empresa de Energía'
                        value={energyCompanyValue}
                        onChange={(value) => setEnergyCompanyValue(value as string[])}
                        placeholder='Seleccione la empresa'
                        options={[
                            { label: "EPM", value: "EPM" }, { label: "EMCALI", value: "EMCALI" },
                            { label: "DICEL", value: "DICEL" }, { label: "VATIA", value: "VATIA" },
                            { label: "EMCARTAGO", value: "EMCARTAGO" }, { label: "EEP", value: "EEP" },
                            { label: "RENOVATIO", value: "RENOVATIO" },
                        ]}
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='multi-select'
                        label='Estrato'
                        value={strarumValue}
                        onChange={(value) => setStrarumValue(value as string[])}
                        placeholder='Seleccione el estrato'
                        options={[
                            { label: "1", value: "1" }, { label: "2", value: "2" },
                            { label: "3", value: "3" }, { label: "4", value: "4" },
                            { label: "5", value: "5" }, { label: "6", value: "6" },
                        ]}
                    />
                </Grid>

            </Grid>
        </>
    );
};

export default FiltersContainer;