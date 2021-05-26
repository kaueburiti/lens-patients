import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Col, Row, Spin } from "antd";
import { useQuery } from "react-query";

import { getAllPatiants } from "../../api/api";
import { CardProps } from "../../card/Card.types";
import { PATIENTS } from "../../data/data";
import { Card } from "../../card/Card";
import { Profile } from "../../profile/Profile";
import { CardPlaceholder } from "../../card/CardPlaceholder";

export const PatientList: React.FC = () => {
  const { isLoading, data } = useQuery<CardProps[], Error>(
    "patients",
    getAllPatiants
  );

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getSelectedPerson = (selectedId: string): CardProps => {
    if (!data) return PATIENTS[0];

    return data.find((person) => person.id === selectedId) || PATIENTS[0];
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
