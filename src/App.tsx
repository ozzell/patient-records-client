import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Patients from "./components/patients/Patients";
import PatientDetails from "./components/patients/PatientDetails"; // Create this component

const NavBar = styled.nav`
  background-color: #006881;
  color: white;
  padding: 10px;
  grid-area: nav;
`;

const Content = styled.div`
  grid-area: content;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #006881;
  color: white;
  padding: 10px;
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
