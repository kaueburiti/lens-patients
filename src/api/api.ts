export const getAllPatiants = () => {
  return fetch("http://localhost:3004/patients").then((response) =>
    response.json()
  );
};
