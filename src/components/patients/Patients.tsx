import { useEffect, useState } from "react";
import { getPatients } from "../../services/api";
import { Patient } from "./Patient.type";
import { NavLink, useNavigate } from "react-router-dom";
import { PatientsTable, UtilitiesContainer } from "./Patient.style";
import Search from "./Search";

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      setPatients(await getPatients());
    };
    fetchPatients();
  }, []);

  const handleAddPatient = async () => {
    navigate("/patients/create");
  };

  return (
    <div>
      <UtilitiesContainer>
        <button onClick={handleAddPatient}>Add New Patient</button>
        <Search applySearchResults={setPatients} />
      </UtilitiesContainer>
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
