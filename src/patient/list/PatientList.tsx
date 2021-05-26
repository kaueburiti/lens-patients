import React from "react";
import { AnimatePresence } from "framer-motion";
import { Col, Row } from "antd";
import { Card } from "../card/Card";
import { Profile } from "../profile/Profile";
import { Patients } from "../types/patient.type";

export const PatientList: React.FC<{
  patients: Patients;
  setSelectedCard: any;
  selectedPatient: any;
}> = ({ patients, setSelectedCard, selectedPatient }) => {
  return (
    <>
      <Row gutter={[32, 32]}>
        {patients.map((patient) => {
          return (
            <Col xs={24} sm={12} lg={8} key={patient.id}>
              <Card {...patient} onClick={() => setSelectedCard(patient.id)} />
            </Col>
          );
        })}
      </Row>

      <AnimatePresence>
        {selectedPatient && (
          <Profile {...selectedPatient} onClose={() => setSelectedCard(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
