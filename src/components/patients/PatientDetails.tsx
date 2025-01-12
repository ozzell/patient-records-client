import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Patient } from "./Patient.type";
import { getPatientById, removePatient } from "../../services/api";
import styled from "styled-components";

const ActionsContainer = styled.div`
  position: absolute;
  right: 0;
  margin: 0 1rem 0 0;
  display: flex;
  gap: 10px;
`;

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
      await removePatient(id);
      navigate("/");
    }
  };

  // @TODO: Implement for real
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
    <div>
      <ActionsContainer>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleRemove}>Delete</button>
      </ActionsContainer>
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.dateOfBirth}</p>
      <p>Medical Condition: {patient.medicalCondition}</p>
      <p>Date of Next Appointment: {patient.dateOfNextAppointment}</p>
    </div>
  );
};

export default PatientDetails;
