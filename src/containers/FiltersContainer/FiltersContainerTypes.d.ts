import { Option } from "../../components/SelectableInput/SelectableInputTypes";


export interface FiltersContainerProps {
    entityValue: string;
    setEntityValue: (newValue: string) => void;
    entityOptions?: Option[] = [];
    identificationValue: string;
    setIdentificationValue: (newValue: string) => void;
    verificationDigitValue: string;
    setVerificationDigitValue: (newValue: string) => void;
    nameValue: string;
    setNameValue: (newValue: string) => void;
    economicDestinationValue: string[];
    economicDestinationOptions?: Option[] = [];
    setEconomicDestinationValue: (newValue: string[]) => void;
    yearValue: string[];
    setYearValue: (newValue: string[]) => void;
    yearOptions?: Option[] = [];
    meterValue: string;
    setMeterValue: (newValue: string) => void;
    energyCompanyValue: string[];
    setEnergyCompanyValue: (newValue: string[]) => void;
    energyCompanyOptions?: Option[] = [];
    stratumValue: string[];
    setStratumValue: (newValue: string[]) => void;
    stratumOptions?: Option[] = [];
}