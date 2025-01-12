import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Patients from "./components/patients/Patients";
import PatientDetails from "./components/patients/PatientDetails";

const NavBar = styled.nav`
  background-color: #006881;
  color: white;
  padding: 1rem;
  grid-area: nav;
`;

const Content = styled.main`
  grid-area: content;
  padding: 1rem;
`;

const Footer = styled.footer`
  background-color: #006881;
  color: white;
  padding: 1rem;
  text-align: center;
  grid-area: footer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "nav"
    "content"
    "footer";
  grid-template-rows: auto 1fr auto;
`;

const App = () => {
  return (
    <Router>
      <GridContainer>
        <NavBar>
          <h1>Patient Records</h1>
        </NavBar>
        <Content>
          <Routes>
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/" element={<Navigate to="/patients" />} />
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
