import { useEffect, useState } from "react";
import { createPatient, getPatients } from "../../services/api";
import { Patient } from "./Patient.type";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PatientsTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    padding-bottom: 0.5rem;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    thead,
    th {
      display: none;
    }

    tr {
      display: flex;
      flex-direction: column;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }
  }
`;

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      setPatients(await getPatients());
    };
    fetchPatients();
  }, []);

  // @TODO: Implement with user input (not dummy data)
  const addPatient = async () => {
    const newPatient = await createPatient({
      name: "Test McTestFace",
      dateOfBirth: "1990-01-01",
      medicalCondition: "Healthy",
      dateOfNextAppointment: "2025-01-01",
    });
    setPatients([...patients, newPatient]);
  };

  return (
    <div>
      <button onClick={addPatient}>Add New Patient</button>
      <PatientsTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Medical Condition</th>
            <th>Date of Next Appointment</th>
          </tr>
        </thead>
        <tbody>
          {patients.length ? (
            patients.map((patient) => (
              <tr key={patient.id}>
                <td>
                  <NavLink to={`/patients/${patient.id}`}>
                    {patient.name}
                  </NavLink>
                </td>
                <td>{patient.dateOfBirth}</td>
                <td>{patient.medicalCondition}</td>
                <td>{patient.dateOfNextAppointment}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No patients found</td>
            </tr>
          )}
        </tbody>
      </PatientsTable>
    </div>
  );
};

export default Patients;
