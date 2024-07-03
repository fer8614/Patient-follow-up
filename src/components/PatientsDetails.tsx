import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}
export default function PatientsDetails( { patient }: PatientDetailsProps ) {

  const detelePatient = usePatientStore( state => state.deletePatient );

  return (
    <div className="mx-5 my-10 px-10 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={ patient.id } />
      <PatientDetailItem label="Name" data={ patient.name } />
      <PatientDetailItem label="Caretaker" data={ patient.caretaker } />
      <PatientDetailItem label="Email" data={ patient.email } />
      <PatientDetailItem label="Discharge date" data={ patient.date.toString() } />
      <PatientDetailItem label="Symptoms" data={ patient.symptoms } />

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 text-white bg-indigo-600 hover:bg-indigo-700 font-bold uppercase rounded-lg"
          type="button"
        >
          Edit
        </button>
        <button
          className="py-2 px-10 text-white bg-red-600 hover:bg-red-700 font-bold uppercase rounded-lg"
          type="button"
          onClick={ () => detelePatient( patient.id ) }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
