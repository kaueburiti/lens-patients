import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Col, Row } from "antd";
import { useQuery } from "react-query";

import { getAllPatiants } from "../../api/api";
import { Card } from "../../card/Card";
import { Profile } from "../../profile/Profile";
import { CardPlaceholder } from "../../card/CardPlaceholder";
import { Patient } from "../types/patient.type";

const defaultPatient = {
  firstName: "Willis",
  pictureUrl:
    "https://i.pinimg.com/474x/0c/c8/ee/0cc8ee038a6b5975fbd08ff89fff371a.jpg",
  id: "MT0070",
  lastName: "Conroy",
  problems: ["Anxiety", "Depression"],
  allergies: ["Dipyrone", "Amoxicillin"],
  medications: ["Citalopram"],
  flags: ["Follow Up", "Psychological monitoring"],
};

export const PatientList: React.FC = () => {
  const { isLoading, data } = useQuery<Patient[], Error>(
    "patients",
    getAllPatiants
  );

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getSelectedPerson = (selectedId: string): Patient => {
    if (!data) return defaultPatient;

    return data.find((person) => person.id === selectedId) || defaultPatient;
  };

  if (isLoading)
    return (
      <Row gutter={[32, 32]}>
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return (
            <Col xs={24} sm={12} lg={8} key={card}>
              <CardPlaceholder />
            </Col>
          );
        })}
      </Row>
    );

  return (
    <>
      <Row gutter={[32, 32]}>
        {data &&
          data.map((card) => {
            return (
              <Col xs={24} sm={12} lg={8} key={card.id}>
                <Card {...card} onClick={() => setSelectedCard(card.id)} />
              </Col>
            );
          })}
      </Row>

      <AnimatePresence>
        {selectedCard && (
          <Profile
            {...getSelectedPerson(selectedCard)}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
