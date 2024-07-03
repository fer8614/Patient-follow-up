import { usePatientStore } from "../store"
import PatientsDetails from "./PatientsDetails";

export default function PatientList() {

  const patients = usePatientStore( state => state.patients );

  console.log( patients );

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List of patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">patients and appointments</span>
          </p>

          { patients.map( patient => (
            <PatientsDetails 
            key={ patient.id } 
            patient={ patient } />
          )) }
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients {''}
            <span className="text-indigo-600 font-bold">and they will appear in this place</span>
          </p>
        </>
      )}
    </div>
  )
}
