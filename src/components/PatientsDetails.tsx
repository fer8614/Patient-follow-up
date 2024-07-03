import { Patient } from "../types"

type PatientDetailsProps = {
    patient: Patient
}
export default function PatientsDetails( { patient }: PatientDetailsProps ) {
  return (
    <div className="mx-5 my-10 py-10 bg-white shadow-md rounded-xl">
      <p className="font-bold uppercase text-gray-900 mb-3">
        ID: {''}
        <span className="font-normal normal-case">{ patient.id }</span>
      </p>
    </div>
  )
}
