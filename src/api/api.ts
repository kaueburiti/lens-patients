import { Patient } from "../patient/types/patient.type";

export const getAllPatiants = (): Promise<Patient[]> => {
  return fetch("http://localhost:3004/patients").then((response) =>
    response.json()
  );
};

export const getDocumentsFromPatient = (patientId: string) => {
  return fetch(`http://localhost:3004/documents?patientId=${patientId}`).then(
    (response) => response.json()
  );
};
