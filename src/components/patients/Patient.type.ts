export interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  medicalCondition: string;
  dateOfNextAppointment: string;
}

export type EditablePatient = Omit<Patient, "id">;
