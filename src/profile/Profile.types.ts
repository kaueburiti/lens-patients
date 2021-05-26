import { Patient } from "../patient/types/patient.type";

export type ProfileProps = Patient & {
  onClose: () => void;
};

export type ProfileInfosProps = { label: string; infos: string[] };
