import { Patients } from "../types/patient.type";

export const getAllPatiants = (): Promise<Patients> => {
  return fetch("http://localhost:3004/patients").then((response) =>
    response.json()
  );
};
