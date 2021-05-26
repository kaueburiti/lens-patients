import { Documents } from "../types/Documents.type";

export const getDocumentsFromPatient = (
  patientId: string
): Promise<Documents[]> => {
  return fetch(`http://localhost:3004/documents?patientId=${patientId}`).then(
    (response) => response.json()
  );
};
