import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Card } from "./card/Card";
import { CardProps } from "./card/Card.types";
import { Profile } from "./profile/Profile";
import { PATIENTS } from "./data/data";
import { Layout } from "./layout/Layout";
import { Col, Row } from "antd";

function App() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getSelectedPerson = (selectedId: string): CardProps => {
    return PATIENTS.find((person) => person.id === selectedId) || PATIENTS[0];
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <Layout>
        <Row gutter={[32, 32]}>
          {PATIENTS.map((card) => {
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
      </Layout>
    </AnimateSharedLayout>
  );
}

export default App;
