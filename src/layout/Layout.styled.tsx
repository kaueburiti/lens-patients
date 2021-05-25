import styled from "styled-components";
import { Layout as AntLayout } from "antd";

export const Layout = styled(AntLayout)`
  height: 100vh;
`;

export const Content = styled(AntLayout.Content)`
  padding: 50px;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;

export const Footer = styled(AntLayout.Footer)`
  text-align: center;
`;
