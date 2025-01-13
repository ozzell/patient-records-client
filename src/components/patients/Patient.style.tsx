import styled from "styled-components";

const primaryColor = "#006881";

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

export const UtilitiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex: 3 1 auto;
  gap: 1rem;

  input {
    flex: 3 1 auto;
    padding: 0.5rem 0;
    border-radius: 4px;
    border: 1px solid ${primaryColor};
    font-size: 1rem;
  }

  input[type="text"] {
    padding-left: 0.5rem;
  }

  input[type="submit"] {
    flex: 1 1 auto;
    background: none;
    cursor: pointer;
    padding: 0.5rem;
    color: black;
    font-weight: 500;
    border-color: ${primaryColor};

    &:hover {
      background-color: ${primaryColor};
      color: white;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const VisuallyHiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
