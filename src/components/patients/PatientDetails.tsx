import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Patient } from "./Patient.type";
import { getPatientById, removePatient } from "../../services/api";
import { ActionsContainer } from "./Patient.style";

const PatientDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      if (!id) {
        return;
      }
      setPatient(await getPatientById(id));
    };
    fetchPatient();
  }, [id]);

  const handleRemove = async () => {
    if (!id) {
      return;
    }

    if (confirm("Are you sure you want to delete this patient?")) {
      const response = await removePatient(id);
      if (response) navigate("/");
    }
  };

  const handleEdit = () => {
    if (!id) {
      return;
    }
    navigate(`/patients/${id}/edit`);
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div data-testid="patient-details-container">
      <ActionsContainer>
        <button data-testid="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button data-testid="delete-btn" onClick={handleRemove}>
          Delete
        </button>
      </ActionsContainer>
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.dateOfBirth}</p>
      <p>Medical Condition: {patient.medicalCondition}</p>
      <p>Date of Next Appointment: {patient.dateOfNextAppointment}</p>
    </div>
  );
};

export default PatientDetails;
