export type Patient = {
  id: string;
  pictureUrl: string;
  firstName: string;
  problems: string[];
  allergies: string[];
  medications: string[];
  flags: string[];
  lastName: string;
};

export type Patients = Patient[];
