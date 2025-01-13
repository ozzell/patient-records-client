import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Patients from "./components/patients/Patients";
import PatientDetails from "./components/patients/PatientDetails";
import PatientEdit from "./components/patients/PatientEdit";
import { Content, Footer, GridContainer, NavBar } from "./App.style";
import styled from "styled-components";

const HeaderLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const App = () => {
  return (
    <Router>
      <GridContainer>
        <NavBar>
          <h1>
            <HeaderLink to="/patients">Patient Records</HeaderLink>
          </h1>
        </NavBar>
        <Content>
          <Routes>
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/" element={<Navigate to="/patients" />} />
            <Route path="/patients/create" element={<PatientEdit />} />
            <Route path="/patients/:id/edit" element={<PatientEdit />} />
          </Routes>
        </Content>
        <Footer>
          <p>&copy; 2025 Patient Records</p>
        </Footer>
      </GridContainer>
    </Router>
  );
};

export default App;
