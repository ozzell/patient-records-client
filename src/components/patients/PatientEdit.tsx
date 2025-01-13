import { useState, useCallback, useEffect } from "react";
import { ActionsContainer, PatientForm } from "./Patient.style";
import { EditablePatient } from "./Patient.type";
import {
  createPatient,
  getPatientById,
  updatePatient,
} from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const PatientEdit = () => {
  // If `id` is not in path param, we are creating a new patient, else we are editing an existing one
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<EditablePatient>({
    name: "",
    dateOfBirth: "",
    medicalCondition: "",
    dateOfNextAppointment: "",
  });
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

  const handleSubmitPatient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;
    if (id) {
      response = await updatePatient(id, patient);
    } else {
      response = await createPatient(patient);
    }
    if (response) navigate("/patients");
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/patients");
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPatient((prevPatient) => ({
        ...prevPatient,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  return (
    <PatientForm onSubmit={handleSubmitPatient} action="post">
      <ActionsContainer>
        <button onClick={handleCancel} tabIndex={5}>
          Cancel
        </button>
        <button role="submit" type="submit" tabIndex={6}>
          Save
        </button>
      </ActionsContainer>
      <h2>{id ? `Edit Patient` : `Create New Patient`}</h2>
      <p>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          value={patient.name}
          onChange={handleInputChange}
          tabIndex={1}
        />
      </p>
      <p>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <br />
        {/* @TODO date is not correctly formatted */}
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={patient.dateOfBirth}
          onChange={handleInputChange}
          tabIndex={2}
        />
      </p>
      <p>
        <label htmlFor="medicalCondition">Medical Condition</label>
        <br />
        <input
          id="medicalCondition"
          name="medicalCondition"
          type="text"
          value={patient.medicalCondition}
          onChange={handleInputChange}
          tabIndex={3}
        />
      </p>
      <p>
        <label htmlFor="dateOfNextAppointment">Date of Next Appointment</label>
        <br />
        {/* @TODO date is not correctly formatted */}
        <input
          id="dateOfNextAppointment"
          name="dateOfNextAppointment"
          type="datetime-local"
          value={patient.dateOfNextAppointment}
          onChange={handleInputChange}
          tabIndex={4}
        />
      </p>
    </PatientForm>
  );
};

export default PatientEdit;
