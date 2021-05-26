import * as Styled from "./Profile.styled";
import { ProfileInfosProps } from "./Profile.types";

export const ProfileInfos: React.FC<ProfileInfosProps> = ({ label, infos }) => {
  return (
    <Styled.ProfileInfos>
      <Styled.ProfileInfoTitle>{label}:</Styled.ProfileInfoTitle>
      {infos.map((info) => (
        <Styled.ProfileInfoFlags key={info}>{info}</Styled.ProfileInfoFlags>
      ))}
    </Styled.ProfileInfos>
  );
};
