const VITE_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const getPatients = async () => {
  const response = await fetch(`${VITE_API_BASE_URL}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const getPatientById = async (id: string) => {
  const response = await fetch(`${VITE_API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const addPatient = async (patient: {
  name: string;
  dateOfBirth: string;
  medicalCondition: string;
  nextAppointment?: string;
}) => {
  const response = await fetch(`${VITE_API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};
