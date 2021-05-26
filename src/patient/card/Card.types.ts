import { Patient } from "../types/patient.type";

export type CardProps = Patient & {
  onClick?: () => void;
};
