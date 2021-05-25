import { useState } from "react";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Card } from "./card/Card";
import { CardProps } from "./card/Card.types";
import "./App.css";
import { Profile } from "./profile/Profile";
import { PATIENTS } from "./data/data";

function App() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getSelectedPerson = (selectedId: string): CardProps => {
    return PATIENTS.find((person) => person.id === selectedId) || PATIENTS[0];
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px" }}>
          <div className="site-layout-content">
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
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </AnimateSharedLayout>
  );
}

export default App;
