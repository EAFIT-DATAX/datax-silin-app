import React, { useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';

import FiltersContainer from '../../containers/FiltersContainer';
import QueryContainer from '../../containers/QueryContainer';
import ResultsContainer from '../../containers/ResultsContainer';
import LoadingLayout from '../../layouts/LoadingLayout';


import { DocumentTypes } from '../../containers/QueryContainer/QueryContainerTypes'
import { Option } from '../../components/SelectableInput/SelectableInputTypes';
import { getEntities, getEconomicDestinations, getYears, getEnergyCompanies, getStratums } from '../../api/filters';
import { searchDataByQuery, downloadDataByQuery, getDownloadProcess } from '../../api/search';
import { IResultColumns } from '../../containers/ResultsContainer/ResultsContainerTypes';

const SearchData: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const [snackBarType, setSnackBarType] = useState<"success" | "error" | "warning" | "info" | undefined>("info");

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
  const [paginationCount, setPaginationCount] = useState<number>(0);
  const [paginationPage, setPaginationPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [searchButtonDisabled, setSearchButtonDisabled] = useState<boolean>(true);
  const [downloadButtonDisabled, setDownloadButtonDisabled] = useState<boolean>(true);

  // Results states
  const [results, setResults] = useState<any[]>([]);
  const [resultsToShow, setResultsToShow] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [freeQuery, setFreeQuery] = useState<boolean>(false);
  const [scrollId, setScrollId] = useState<string>("");
  const [downloadHash, setDownloadHash] = useState<string>("");
  const [columns, setColumns] = useState<IResultColumns>({});

  // Options states
  const [entities, setEntities] = useState<Option[]>([]);
  const [economicDestinations, setEconomicDestinations] = useState<Option[]>([]);
  const [years, setYears] = useState<Option[]>([]);
  const [energyCompanies, setEnergyCompanies] = useState<Option[]>([]);
  const [stratums, setStratums] = useState<Option[]>([]);

  const [removeStopWordsChecked, setRemoveStopWordsChecked] = useState<boolean>(false);

  // Functions

  const getFilters = async () => {
    setIsLoading(true);
    try {
      setEntities(await getEntities());
      setEconomicDestinations(await getEconomicDestinations());
      setYears(await getYears());
      setEnergyCompanies(await getEnergyCompanies());
      setStratums(await getStratums());
    } catch (error) {
      console.log(error);
    } finally { setIsLoading(false); }
  }

  const handleActiveFilter = (docType: string) => {
    setEntityActive(true);
    setIdentificationActive(true);
    setSearchButtonDisabled(false);
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
  }

  const makeQueryRequestBody = () => {
    const body: any = {
      free_query: freeQuery,
      query_data: {
        doc_type: docType,
        entity: entityValue,
      },
      scroll_time: "15m",
      remove_stopwords: removeStopWordsChecked
    }

    if (nameActive && nameValue !== "")
      body.query_data["name"] = nameValue;

    if (identificationActive && identificationValue !== "")
      body.query_data["identification"] = {
        identification: identificationValue,
        verification_number: verificationDigitValue
      }

    if (economicDestinationActive && economicDestinationValue.length !== 0)
      body.query_data["economic_destination"] = economicDestinationValue;

    if (yearActive && yearValue.length !== 0)
      body.query_data["year"] = yearValue;

    if (meterActive && meterValue !== "")
      body.query_data["meter"] = meterValue;

    if (energyCompanyActive && energyCompanyValue.length !== 0)
      body.query_data["power_company"] = energyCompanyValue;

    if (stratumActive && stratumValue.length !== 0)
      body.query_data["stratum"] = stratumValue;

    return body
  }

  const handleSearch = async () => {
    setIsSearching(true);
    setPaginationPage(0)
    setPaginationCount(0)
    const body = makeQueryRequestBody();

    console.log(body);

    try {
      const response = await searchDataByQuery(body);
      console.log(response);
      // validate if response has count key
      if ("count" in response)
        setPaginationCount(response.count);

      if ("scroll_id" in response)
        setScrollId(response.scroll_id);

      setColumns(response.columns);
      setResults(response.result);
      setResultsToShow(response.result.slice(0, rowsPerPage));
    } catch (error) {
      console.log(error);
    }

    setIsSearching(false);
  }

  const handleDownload = async () => {
    const body = makeQueryRequestBody();
    body["filetype"] = "CSV"
    const download_request_response = await downloadDataByQuery(body);
    const { hash } = download_request_response;

    const download_process_response = await getDownloadProcess(hash);
    const { status } = download_process_response;
    if (status === "DONE") {
      setSnackBarMessage("La descarga se ha completado!");
      setSnackBarType("success");
      setOpenSnackBar(true);
      const { url } = download_process_response;
      window.open(url, "_blank");
      return;
    } else if (status === "ERROR") {
      setSnackBarMessage("La descarga ha fallado!");
      setSnackBarType("error");
      setOpenSnackBar(true);
      console.log(download_process_response);
      return;
    }
    setDownloadHash(hash);
    setSnackBarMessage("La descarga se ejecutara en segundo plano!");
    setSnackBarType("info");
    setOpenSnackBar(true);
  }

  const handlePagination = async (page: number, customRowsPerPage: number | undefined = undefined ) => {
    const start = page * (customRowsPerPage || rowsPerPage);
    const end = start + (customRowsPerPage || rowsPerPage);

    if (results.length < end && results.length < paginationCount) {
      if (scrollId) {
        try{
          console.log("Hay que consultar")
          // setPaginationPage(page);
          // setResultsToShow(results.slice(start, end));
          setIsSearching(true);
          const body = {
            scroll_id: scrollId,
            scroll_time: "15m"
          }
          const response = await searchDataByQuery(body);
          const newResults = [...results, ...response.result];
          setScrollId(response.scroll_id);
          setResults(newResults);
          setPaginationPage(page);
          setResultsToShow(newResults.slice(start, end));
          setIsSearching(false);
          return
        } catch (error) {
          console.log(error);
        }
      }
    }

    setPaginationPage(page);
    setResultsToShow(results.slice(start, end));
  }

  const handleRowsPerPageChange = (newValue: number) => {
    setRowsPerPage(newValue);
    handlePagination(0, newValue);
  }

  const onClickSearch = () => handleSearch();
  const onClickDownload = () => handleDownload();

  useEffect(() => {
    if (results.length)
      setDownloadButtonDisabled(false)
    else
      setDownloadButtonDisabled(true)
  }, [results]);

  useEffect(() => {
    let intervalId: any;

    if (downloadHash !== "") {
      intervalId = setInterval(async () => {
        const response = await getDownloadProcess(downloadHash);
        console.log(response);
        if (response.status === "DONE") {
          const { url } = response;
          window.open(url, "_blank");
          clearInterval(intervalId);
          setSnackBarMessage("La descarga se ha completado!");
          setSnackBarType("success");
          setOpenSnackBar(true);
          setDownloadHash("");
        } else if (response.status === "ERROR") {
          clearInterval(intervalId);
          setSnackBarMessage("La descarga ha fallado!");
          setSnackBarType("error");
          setOpenSnackBar(true);
          setDownloadHash("");
        }
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

  }, [downloadHash]);

  useEffect(() => {
    getFilters();
  }, []);


  useEffect(() => {
    if (entityValue === "") {
      setIdentificationActive(false);
      setNameActive(false);
      setEconomicDestinationActive(false);
      setYearActive(false);
      setMeterActive(false);
      setEnergyCompanyActive(false);
      setStratumActive(false);
    } else {
      handleActiveFilter(docType)
    }
  }, [entityValue, docType]);

  return (
    <LoadingLayout isLoading={isLoading} size={20}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert onClose={() => setOpenSnackBar(false)} severity={snackBarType} sx={{ width: '100%' }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
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
          entityOptions={entities}
          identificationValue={identificationValue}
          setIdentificationValue={setIdentificationValue}
          verificationDigitValue={verificationDigitValue}
          setVerificationDigitValue={setVerificationDigitValue}
          nameValue={nameValue}
          setNameValue={setNameValue}
          economicDestinationValue={economicDestinationValue}
          setEconomicDestinationValue={setEconomicDestinationValue}
          economicDestinationOptions={economicDestinations}
          yearValue={yearValue}
          setYearValue={setYearValue}
          yearOptions={years}
          meterValue={meterValue}
          setMeterValue={setMeterValue}
          energyCompanyValue={energyCompanyValue}
          setEnergyCompanyValue={setEnergyCompanyValue}
          energyCompanyOptions={energyCompanies}
          stratumValue={stratumValue}
          setStratumValue={setStratumValue}
          stratumOptions={stratums}
          removeStopWordsChecked={removeStopWordsChecked}
          setRemoveStopWordsChecked={setRemoveStopWordsChecked}
        />
        <QueryContainer
          setSelectedDocType={setDocType}
          paginationCount={paginationCount}
          setPaginationCount={setPaginationCount}
          paginationPage={paginationPage}
          setPaginationPage={handlePagination}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={handleRowsPerPageChange}
          onClickSearch={onClickSearch}
          onClickDownload={onClickDownload}
          searchButtonDisabled={searchButtonDisabled}
          downloadButtonDisabled={downloadButtonDisabled}
        />
        <ResultsContainer
          isSearching={isSearching}
          results={resultsToShow}
          setFreeQueryValue={setFreeQuery}
          columns={columns}
        />
      </>
    </LoadingLayout>
  )
}

export default SearchData;