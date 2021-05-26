import { Patient } from "../patient/types/patient.type";

export const getAllPatiants = (): Promise<Patient[]> => {
  return fetch("http://localhost:3004/patients").then((response) =>
    response.json()
  );
};
