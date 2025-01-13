const VITE_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Inelegant way to let user know of errors with create, update and remove operations
// using browser alert (should be replaced with system of snackbars or toasts)
const handleErrors = (error: unknown) => {
  console.error(error);
  if (error instanceof Error) {
    alert("Error: " + error.message);
  } else {
    alert("An unknown error occurred");
  }
};

export const getPatients = async () => {
  try {
    const response = await fetch(`${VITE_API_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getPatientById = async (id: string) => {
  try {
    const response = await fetch(`${VITE_API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const createPatient = async (patient: {
  name: string;
  dateOfBirth: string;
  medicalCondition: string;
  dateOfNextAppointment: string;
}) => {
  try {
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
  } catch (error) {
    handleErrors(error);
  }
};

export const updatePatient = async (
  id: string,
  patient: {
    name: string;
    dateOfBirth: string;
    medicalCondition: string;
    nextAppointment?: string;
  }
) => {
  try {
    const response = await fetch(`${VITE_API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    handleErrors(error);
  }
};

export const removePatient = async (id: string) => {
  try {
    const response = await fetch(`${VITE_API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    handleErrors(error);
  }
};
