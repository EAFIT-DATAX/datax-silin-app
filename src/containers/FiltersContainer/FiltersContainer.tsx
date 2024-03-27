import React from 'react';

import { Grid } from '@mui/material';

import SelectableInput from '../../components/SelectableInput';
import IdentificationInput from '../../components/IdentificationInput';
import { FiltersContainerProps } from './FiltersContainerTypes';

const FiltersContainer: React.FC<FiltersContainerProps> = ({
    entityValue,
    setEntityValue,
    entityOptions,
    identificationValue,
    setIdentificationValue,
    verificationDigitValue,
    setVerificationDigitValue,
    nameValue,
    setNameValue,
    economicDestinationValue,
    economicDestinationOptions,
    setEconomicDestinationValue,
    yearValue,
    setYearValue,
    yearOptions,
    meterValue,
    setMeterValue,
    energyCompanyValue,
    setEnergyCompanyValue,
    energyCompanyOptions,
    stratumValue,
    setStratumValue,
    stratumOptions,
}) => {

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
                        options={entityOptions}
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
                        options={economicDestinationOptions}
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
                        options={yearOptions}
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='text'
                        label='Medidor'
                        value={meterValue}
                        onChange={(value) => setMeterValue(value as string)}
                        placeholder='Digite el medidor'
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='multi-select'
                        label='Empresa de Energía'
                        value={energyCompanyValue}
                        onChange={(value) => setEnergyCompanyValue(value as string[])}
                        placeholder='Seleccione la empresa'
                        options={energyCompanyOptions}
                    />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <SelectableInput
                        type='multi-select'
                        label='Estrato'
                        value={stratumValue}
                        onChange={(value) => setStratumValue(value as string[])}
                        placeholder='Seleccione el estrato'
                        options={stratumOptions}
                    />
                </Grid>

            </Grid>
        </>
    );
};

export default FiltersContainer;