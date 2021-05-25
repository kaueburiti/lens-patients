import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Card } from "./card/Card";
import { CardProps } from "./card/Card.types";
import { Profile } from "./profile/Profile";
import { PATIENTS } from "./data/data";
import { Layout } from "./layout/Layout";
import "./App.css";

function App() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getSelectedPerson = (selectedId: string): CardProps => {
    return PATIENTS.find((person) => person.id === selectedId) || PATIENTS[0];
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <Layout>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {PATIENTS.map((card) => {
            return (
              <Card
                key={card.id}
                {...card}
                onClick={() => setSelectedCard(card.id)}
              />
            );
          })}
          <AnimatePresence>
            {selectedCard && (
              <Profile
                {...getSelectedPerson(selectedCard)}
                onClose={() => setSelectedCard(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </AnimateSharedLayout>
  );
}

export default App;
