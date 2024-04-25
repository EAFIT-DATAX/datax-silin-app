import { Option } from "../../components/SelectableInput/SelectableInputTypes";


export interface FiltersContainerProps {
    entityActive: boolean;
    identificationActive: boolean;
    nameActive: boolean;
    economicDestinationActive: boolean;
    yearActive: boolean;
    meterActive: boolean;
    energyCompanyActive: boolean;
    stratumActive: boolean;

    entityOnDisabledClick: (newValue: boolean) => void;
    identificationOnDisabledClick: (newValue: boolean) => void;
    nameOnDisabledClick: (newValue: boolean) => void;
    economicDestinationOnDisabledClick: (newValue: boolean) => void;
    yearOnDisabledClick: (newValue: boolean) => void;
    meterOnDisabledClick: (newValue: boolean) => void;
    energyCompanyOnDisabledClick: (newValue: boolean) => void;
    stratumOnDisabledClick: (newValue: boolean) => void;

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

    removeStopWordsChecked: boolean;
    setRemoveStopWordsChecked: (newValue: boolean) => void;

}