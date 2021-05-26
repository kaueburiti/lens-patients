import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled.div`
  position: relative;
  height: 360px;
  flex: 0 0 auto;
  position: relative;
`;

export const CardContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  pointer-events: none;
`;

export const CardContent = styled(motion.div)`
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  background: transparent;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 30%) 0px 8px 16px -8px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: box-shadow 0.3s, border-color 0.3s;
  }
`;

export const CardImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 420px;
  width: 100vw;
`;

export const CardTitleContainer = styled(motion.div)`
  position: absolute;
  top: 24px;
  left: 24px;
  max-width: calc(100% - 60px);
`;

export const CardTitle = styled(motion.h2)`
  color: #fff;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 800;
`;

export const CardEmrId = styled.span`
  color: #fff;
  font-size: 1rem;
  letter-spacing: 5px;
  font-weight: bold;
`;
