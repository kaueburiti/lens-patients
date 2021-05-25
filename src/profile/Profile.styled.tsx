import styled from "styled-components";
import { motion } from "framer-motion";
import { CardEmrId, CardTitle } from "../card/Card.styled";

export const ProfileOverlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  pointer-events: auto;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  position: relative;
  display: block;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 10;
  overflow: hidden;
  padding: 40px 0;
`;

export const ProfileContent = styled(motion.div)`
  max-width: 700px;
  overflow: hidden;
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  background: #ffffff;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
`;

export const ProfileImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 360px;
  width: 100%;
`;

export const ProfileFlagsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;

  width: 80%;
`;

export const ProfileFlags = styled.span`
  border-radius: 5px;
  padding: 8px;
  color: #ffffff;
  border: 1px solid #fff;
  margin-right: 8px;
  font-size: 0.8rem;
`;

export const ProfileInfosContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: #fff;
  font-size: 1.2rem;
`;

export const ProfileInfos = styled.p`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProfileInfoTitle = styled.span`
  margin-right: 16px;
`;

export const ProfileInfoFlags = styled<{ type: string } & any>(ProfileFlags)`
  display: inline-block;
  padding: 3px 8px;
  font-weight: 800;
`;

export const ProfileImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const ProfileTitleContainer = styled(motion.div)`
  position: absolute;
  top: 30px;
  left: 30px;
  max-width: calc(100% - 60px);
`;

export const ProfileTitle = styled(CardTitle)`
  font-size: 3rem;
  line-height: 3rem;
`;

export const ProfileEmrId = styled(CardEmrId)`
  font-size: 1rem;
  line-height: 1rem;
`;

export const ProfileContentContainer = styled(motion.div)`
  padding: 35px;
  max-width: 700px;
  width: 100vw;

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #5f5f5f;
  }
`;

export const ProfileImage = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
  display: inline-block;
  height: 100%;
`;
