import api from "./base";

const RESOURCE = `/filters`;


export const getEntities = async () => {
    const response = await api.get(`${RESOURCE}/entities`);
    const entities: Array<string> = response.data.entities;
    return entities.map((entity: string) => ({ value: entity, label: entity }));
};

export const getEnergyCompanies = async () => {
    const response = await api.get(`${RESOURCE}/energy_companies`);
    const energyCompanies: Array<string> = response.data.energy_companies;
    return energyCompanies.map((energyCompany: string) => ({ value: energyCompany, label: energyCompany }));
}

export const getYears = async () => {
    const response = await api.get(`${RESOURCE}/years`);
    const years: Array<string> = response.data.years;
    return years.map((year: string) => ({ value: year, label: year }));
}

export const getStratums = async () => {
    const response = await api.get(`${RESOURCE}/stratums`);
    const stratums: Array<string> = response.data.stratums;
    return stratums.map((stratum: string) => ({ value: stratum, label: stratum }));
}

export const getEconomicDestinations = async () => {
    const response = await api.get(`${RESOURCE}/economic_destinations`);
    const economicDestinations: Array<string> = response.data.economic_destination;
    return economicDestinations.map((economicDestination: string) => ({ value: economicDestination, label: economicDestination }));
}
