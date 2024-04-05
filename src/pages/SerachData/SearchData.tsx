import React, { useState, useEffect } from 'react';
// import { Grid } from '@mui/material';

import FiltersContainer from '../../containers/FiltersContainer';
import QueryContainer from '../../containers/QueryContainer';
import ResultsContainer from '../../containers/ResultsContainer';

import { DocumentTypes } from '../../containers/QueryContainer/QueryContainerTypes'

const SearchData: React.FC = () => {
    // Filter states
    const [entityActive, setEntityActive] = useState<boolean>(true);
    const [identificationActive, setIdentificationActive] = useState<boolean>(true);
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

    // Search Type states
    const [docType, setDocType] = useState<DocumentTypes>("FT01");
    const [paginationCount, setPaginationCount] = useState<number>(500);
    const [paginationPage, setPaginationPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    // Results states
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [freeQuery, setFreeQuery] = useState<boolean>(false);


    // Functions
    const onClickSearch = () => console.log("Search");
    const onClickDownload = () => console.log("Download");

    useEffect(() => {
        setEntityActive(true);
        setIdentificationActive(true);
        switch (docType) {
            case "FT03":
                setNameActive(false);
                setEconomicDestinationActive(false);
                setYearActive(false);
                setMeterActive(false);
                setEnergyCompanyActive(true);
                setStratumActive(false);
                break;
            case "FT05":
                setNameActive(true);
                setEconomicDestinationActive(false);
                setYearActive(true);
                setMeterActive(false);
                setEnergyCompanyActive(true);
                setStratumActive(false);
                break;
            default:
                setNameActive(true);
                setEconomicDestinationActive(true);
                setYearActive(true);
                setMeterActive(true);
                setEnergyCompanyActive(true);
                setStratumActive(true);
                break;
        }
    }, [docType]);


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
            <QueryContainer
                setSelectedDocType={setDocType}
                paginationCount={paginationCount}
                setPaginationCount={setPaginationCount}
                paginationPage={paginationPage}
                setPaginationPage={setPaginationPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                onClickSearch={onClickSearch}
                onClickDownload={onClickDownload}
            />
            <ResultsContainer
                isSearching={isSearching}
                results={results}
                setFreeQueryValue={setFreeQuery}
            />
        </>
    )
}

export default SearchData;