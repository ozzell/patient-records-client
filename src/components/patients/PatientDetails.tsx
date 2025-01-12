import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Patient } from "./Patient.type";
import { getPatientById } from "../../services/api";

const PatientDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      if (!id) {
        return;
      }
      setPatient(await getPatientById(id));
    };
    fetchPatient();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.dateOfBirth}</p>
      <p>Medical Condition: {patient.medicalCondition}</p>
      <p>Date of Next Appointment: {patient.dateOfNextAppointment}</p>
    </div>
  );
};

export default PatientDetails;
