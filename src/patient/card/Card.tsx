import { CardProps } from "./Card.types";
import * as Styled from "./Card.styled";

export const Card: React.FC<CardProps> = ({
  pictureUrl,
  firstName,
  lastName,
  onClick,
  id,
}) => {
  return (
    <Styled.CardWrapper onClick={() => onClick && onClick()}>
      <Styled.CardContentContainer>
        <Styled.CardContent layoutId={`card-container-${id}`}>
          <Styled.CardImageContainer layoutId={`card-image-container-${id}`}>
            <img src={pictureUrl} alt={`${firstName} ${lastName}`} />
          </Styled.CardImageContainer>
          <Styled.CardTitleContainer layoutId={`title-container-${id}`}>
            <Styled.CardEmrId>{id}</Styled.CardEmrId>
            <Styled.CardTitle layoutId={`title-${id}`}>
              {firstName} {lastName}
            </Styled.CardTitle>
          </Styled.CardTitleContainer>
        </Styled.CardContent>
      </Styled.CardContentContainer>
    </Styled.CardWrapper>
  );
};
