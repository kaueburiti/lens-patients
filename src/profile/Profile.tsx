import * as Styled from "./Profile.styled";
import { ProfileProps } from "./Profile.types";
import { Inbox } from "./../inbox/Inbox";

export const Profile: React.FC<ProfileProps> = ({
  id,
  firstName,
  lastName,
  pictureUrl,
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
              <Styled.ProfileInfos>
                <Styled.ProfileInfoTitle>Problems:</Styled.ProfileInfoTitle>
                <Styled.ProfileInfoFlags type="problems">
                  Sleep apnea
                </Styled.ProfileInfoFlags>
                <Styled.ProfileInfoFlags type="problems">
                  Acid reflux
                </Styled.ProfileInfoFlags>
              </Styled.ProfileInfos>
              <Styled.ProfileInfos>
                <Styled.ProfileInfoTitle>Allergies:</Styled.ProfileInfoTitle>
                <Styled.ProfileInfoFlags type="allergies">
                  Penacillin
                </Styled.ProfileInfoFlags>
              </Styled.ProfileInfos>
              <Styled.ProfileInfos>
                <Styled.ProfileInfoTitle>Medications:</Styled.ProfileInfoTitle>
                <Styled.ProfileInfoFlags type="medications">
                  Aspirin
                </Styled.ProfileInfoFlags>
              </Styled.ProfileInfos>
              <Styled.ProfileInfos>
                <Styled.ProfileInfoTitle>Flags:</Styled.ProfileInfoTitle>
                <Styled.ProfileInfoFlags type="medications">
                  Follow Up
                </Styled.ProfileInfoFlags>
                <Styled.ProfileInfoFlags type="medications">
                  Heart failure
                </Styled.ProfileInfoFlags>
              </Styled.ProfileInfos>
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
