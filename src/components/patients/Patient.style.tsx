import styled from "styled-components";

export const ActionsContainer = styled.div`
  position: absolute;
  right: 0;
  margin: 0 1rem 0 0;
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    position: relative;
    flex-direction: column;
  }
`;

export const PatientForm = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin-top: 1rem;

  label {
    display: block;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

export const PatientsTable = styled.table`
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
