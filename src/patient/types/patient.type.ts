export type Patient = {
  id: string;
  pictureUrl: string;
  firstName: string;
  lastName: string;
  problems: string[];
  allergies: string[];
  medications: string[];
  flags: string[];
};
