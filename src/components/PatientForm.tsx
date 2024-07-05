import { useForm } from 'react-hook-form'
import Error from './Error';
import { DraftPatient } from '../types';
import { usePatientStore } from '../store';
import { useEffect } from 'react';
export default function PatientForm() {

    const addPatient = usePatientStore( state => state.addPatient );
    const activeId = usePatientStore( state => state.activeId );
    const patients = usePatientStore( state => state.patients );
    const updatePatient = usePatientStore( state => state.updatePatient );

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPatient>()

    useEffect( () => {
        if( activeId ) {
            const activePatients = patients.filter( patient => patient.id === activeId )[0];
            setValue( 'name', activePatients.name );
            setValue( 'caretaker', activePatients.caretaker );
            setValue( 'date', activePatients.date );
            setValue( 'email', activePatients.email );
            setValue( 'symptoms', activePatients.symptoms );
        }
    }, [ activeId ])

    const registerPatient = ( data: DraftPatient ) => {
        if( activeId ) {
            updatePatient( data );
        } else {
            addPatient( data );
        }

        reset();
    }

  
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
                Add patients and {''}
              <span className="text-indigo-600 font-bold">Manage them</span>
          </p>
  
          <form 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(registerPatient)}

          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Patient 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Name of patient" 
                        {...register('name', { 
                            required: 'The name of the patient is required',
                        })}
                    />
                    {errors.name && ( <Error>{ errors.name?.message }</Error> )} 
                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                      Caretaker 
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Caretaker name" 
                      {...register('caretaker', {
                          required: 'The caretaker of the patient is required',
                      })}
                  />
                  {errors.caretaker && ( <Error>{errors.caretaker?.message }</Error> ) }
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Registration email" 
                    {...register('email', {
                        required: 'The email of the patient is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'The email is not valid'
                            }
                    })}
                />
                {errors.email && ( <Error>{errors.email?.message }</Error> ) }
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-sm uppercase font-bold">
                    Patient discharge date
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3  border border-gray-100"  
                      type="date" 
                      {...register('date', {
                          required: 'The date of the patient discharge is required',
                      })}
                  />
                  {errors.date && ( <Error>{ errors.date?.message }</Error> ) }
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Symptoms
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-3  border border-gray-100"  
                      placeholder="Patient symptoms" 
                      {...register('symptoms', {
                          required: 'The symptoms of the patient is required',
                      })}
                  >
                  </textarea>
                  {errors.symptoms && ( <Error>{ errors.symptoms?.message }</Error> ) }
              </div>
  
              <input
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                  value='Save patient'
              />
          </form> 
      </div>
    )
  }