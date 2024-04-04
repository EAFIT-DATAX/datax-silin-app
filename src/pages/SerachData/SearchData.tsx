import React, { useState } from 'react';
// import { Grid } from '@mui/material';

import FiltersContainer from '../../containers/FiltersContainer';
import QueryContainer from '../../containers/QueryContainer';

import DynamicTable from '../../components/DynamicTable';


const SearchData: React.FC = () => {
    // Filter states
    const [entityActive, setEntityActive] = useState<boolean>(true);
    const [identificationActive, setIdentificationActive] = useState<boolean>(false);
    const [nameActive, setNameActive] = useState<boolean>(false);
    const [economicDestinationActive, setEconomicDestinationActive] = useState<boolean>(false);
    const [yearActive, setYearActive] = useState<boolean>(false);
    const [meterActive, setMeterActive] = useState<boolean>(false);
    const [energyCompanyActive, setEnergyCompanyActive] = useState<boolean>(false);
    const [stratumActive, setStratumActive] = useState<boolean>(false);

    const [entityValue, setEntityValue] = useState<string>("");
    const [identificationValue, setIdentificationValue] = useState<string>("");
    const [verificationDigitValue, setVerificationDigitValue] = useState<string>("");
    const [nameValue, setNameValue] = useState<string>("");
    const [economicDestinationValue, setEconomicDestinationValue] = useState<string[]>([]);
    const [yearValue, setYearValue] = useState<string[]>([]);
    const [meterValue, setMeterValue] = useState<string>("");
    const [energyCompanyValue, setEnergyCompanyValue] = useState<string[]>([]);
    const [stratumValue, setStratumValue] = useState<string[]>([]);

    return (
        <>
            <FiltersContainer
                entityActive={entityActive}
                identificationActive={identificationActive}
                nameActive={nameActive}
                economicDestinationActive={economicDestinationActive}
                yearActive={yearActive}
                meterActive={meterActive}
                energyCompanyActive={energyCompanyActive}
                stratumActive={stratumActive}

                entityOnDisabledClick={setEntityActive}
                identificationOnDisabledClick={setIdentificationActive}
                nameOnDisabledClick={setNameActive}
                economicDestinationOnDisabledClick={setEconomicDestinationActive}
                yearOnDisabledClick={setYearActive}
                meterOnDisabledClick={setMeterActive}
                energyCompanyOnDisabledClick={setEnergyCompanyActive}
                stratumOnDisabledClick={setStratumActive}

                entityValue={entityValue}
                setEntityValue={setEntityValue}
                entityOptions={[ { label: "G-Valle", value: "G-Valle" }, { label: "A-Palmira", value: "A-Palmira" } ]}
                identificationValue={identificationValue}
                setIdentificationValue={setIdentificationValue}
                verificationDigitValue={verificationDigitValue}
                setVerificationDigitValue={setVerificationDigitValue}
                nameValue={nameValue}
                setNameValue={setNameValue}
                economicDestinationValue={economicDestinationValue}
                setEconomicDestinationValue={setEconomicDestinationValue}
                economicDestinationOptions={[]}
                yearValue={yearValue}
                setYearValue={setYearValue}
                yearOptions={[]}
                meterValue={meterValue}
                setMeterValue={setMeterValue}
                energyCompanyValue={energyCompanyValue}
                setEnergyCompanyValue={setEnergyCompanyValue}
                energyCompanyOptions={[]}
                stratumValue={stratumValue}
                setStratumValue={setStratumValue}
                stratumOptions={[]}
            />
            <QueryContainer />
            <DynamicTable data={[
                    {
                        "0": "Dummy", "1": "Dummy", "2": "Data Dummy", "3": "Dummy", "4": "Dummy", "5": "Data Dummy",
                        "6": "Dummy", "7": "Dummy", "8": "Data Dummy", "9": "Dummy", "10": "Dummy", "11": "Data Dummy",
                        "12": "Dummy", "13": "Dummy", "14": "Data Dummy", "15": "Dummy", "16": "Dummy", "17": "Data Dummy",
                        doc_type: "FT01", entity: "G-Valle", "power_company": "EPM" },
                    {
                        "1": "Dummy"
                    },
                    {
                        "3": "Dummy", "4": "Dummy", "5": "Data Dummy"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                ]}
            />
        </>
    )
}

export default SearchData;