import { render, screen } from "@testing-library/react";
import PatientDetails from "../PatientDetails";
import "@testing-library/jest-dom";
import { removePatient } from "../../../services/api";

const mockNavigate = jest.fn();

jest.mock("../../../services/api", () => ({
  getPatientById: jest.fn(() =>
    Promise.resolve({
      name: "Testy McTestface",
      dateOfBirth: "01/01/2000",
      medicalCondition: "Healthy",
      dateOfNextAppointment: "01/03/2025",
    })
  ),
  removePatient: jest.fn(() => Promise.resolve(true)),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
  useNavigate: () => mockNavigate,
}));

describe("PatientDetails", () => {
  it("should render patient details", async () => {
    render(<PatientDetails />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await Promise.all([
      screen.findByText((t) => t.includes("Testy McTestface")),
      screen.findByText((t) => t.includes("01/01/2000")),
      screen.findByText((t) => t.includes("Healthy")),
      screen.findByText((t) => t.includes("01/03/2025")),
    ]);

    expect(
      await screen.findByTestId("patient-details-container")
    ).toBeInTheDocument();
  });

  it("should call removePatient when delete button is clicked", async () => {
    window.confirm = jest.fn().mockImplementation(() => true);

    render(<PatientDetails />);

    const deleteButton = await screen.findByTestId("delete-btn");
    deleteButton.click();

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete this patient?"
    );
    expect(removePatient).toHaveBeenCalled();
  });

  it("should call navigate when edit button is clicked", async () => {
    render(<PatientDetails />);

    const editButton = await screen.findByTestId("edit-btn");
    editButton.click();

    expect(mockNavigate).toHaveBeenCalledWith("/patients/1/edit");
  });
});
