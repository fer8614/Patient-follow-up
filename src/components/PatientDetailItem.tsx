
type PatientDetailsProps = {
    label: string
    data: string
}

export default function PatientDetailItem( { label, data }: PatientDetailsProps ) {
  return (
    <p className="font-bold uppercase text-gray-900 mb-3">
        { label }: {''}
    <span className="font-normal normal-case">{ data }</span>
  </p>
  )
}
