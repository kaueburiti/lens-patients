import React from "react";
import * as Styled from "./Profile.styled";
import { ProfileProps } from "./Profile.types";
import { Inbox } from "./../inbox/Inbox";
import { ProfileInfos } from "./ProfileInfo";

export const Profile: React.FC<ProfileProps> = ({
  id,
  firstName,
  lastName,
  pictureUrl,
  problems,
  allergies,
  medications,
  flags,
  onClose,
}) => {
  return (
    <>
      <Styled.ProfileOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        onClick={onClose}
      />
      <Styled.ProfileContainer>
        <Styled.ProfileContent layoutId={`card-container-${id}`}>
          <Styled.ProfileImageContainer layoutId={`card-image-container-${id}`}>
            <Styled.ProfileImage src={pictureUrl} alt="" />
            <Styled.ProfileImageOverlay />
            <Styled.ProfileInfosContainer>
              <ProfileInfos label="Problems" infos={problems} />
              <ProfileInfos label="Allergies" infos={allergies} />
              <ProfileInfos label="Medications" infos={medications} />
              <ProfileInfos label="Flags" infos={flags} />
            </Styled.ProfileInfosContainer>
          </Styled.ProfileImageContainer>
          <Styled.ProfileTitleContainer layoutId={`title-container-${id}`}>
            <Styled.ProfileEmrId>{id}</Styled.ProfileEmrId>
            <Styled.ProfileTitle layoutId={`title-${id}`}>
              {firstName} {lastName}
            </Styled.ProfileTitle>
          </Styled.ProfileTitleContainer>
          <Styled.ProfileContentContainer animate>
            <Inbox patientId={id} />
          </Styled.ProfileContentContainer>
        </Styled.ProfileContent>
      </Styled.ProfileContainer>
    </>
  );
};
