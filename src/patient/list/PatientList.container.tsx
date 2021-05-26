import React, { useState } from "react";
import { useQuery } from "react-query";

import { getAllPatiants } from "../api/api";
import { Patients, Patient } from "../types/patient.type";
import { PatientListError } from "./PatientListError";
import { PatientListPlaceholder } from "./PatientListPlaceholder";
import { PatientList as PatientListComponent } from "./PatientList";

export const PatientList: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const { isLoading, data: patients } = useQuery<Patients, Error>(
    "patients",
    getAllPatiants
  );
  const getSelectedPerson = (
    selectedId: string | null
  ): Patient | undefined => {
    return patients && patients.find((patient) => patient.id === selectedId);
  };

  const selectedPatient = getSelectedPerson(selectedCard);

  if (isLoading) return <PatientListPlaceholder />;

  if (!patients) return <PatientListError />;

  return (
    <PatientListComponent
      patients={patients}
      selectedPatient={selectedPatient}
      setSelectedCard={setSelectedCard}
    />
  );
};
