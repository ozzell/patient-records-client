import { useEffect, useState } from "react";
import { getPatients } from "../../services/api";
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
`;

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      setPatients(await getPatients());
    };
    fetchPatients();
  }, []);

  return (
    <div>
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
