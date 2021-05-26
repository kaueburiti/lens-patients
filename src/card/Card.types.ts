import { Patient } from "../patient/types/patient.type";

export type CardProps = Patient & {
  onClick?: () => void;
};
