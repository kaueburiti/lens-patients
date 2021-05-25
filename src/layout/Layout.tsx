import React from "react";
import * as Styled from "./Layout.styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <Styled.Layout>
      <Styled.Content>{children}</Styled.Content>
      <Styled.Footer>Lens Contacts © 2021 Created by Kauê Buriti</Styled.Footer>
    </Styled.Layout>
  );
};
