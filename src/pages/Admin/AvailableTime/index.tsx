import { useContext, useState } from 'react'
import RegistrationForm from './RegistrationForm';
import { TempStateContext } from '../../../context/TempStateContenxt';
import TableDate from '../../../components/TableDate';

const AvailableTime = () => {
  const [fields, setFields] = useState({});
  const [tempFields, setTempFields] = useState([]);

  const context = useContext(TempStateContext)

  const handleOnChange = (key: string, value: any) => {
    setFields((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleOnConfirm = () => {
    const newFields = [...tempFields, fields]

    setTempFields(newFields)
    context.setFields(newFields)
    console.log(newFields)
  }

  const handleRemove = (id: number) => {
    const newFields = tempFields.filter((_, index: number) => index !== id)
    setTempFields(newFields)

    context.setFields(newFields)
  }

  return (
    <>
      <div>Available Time</div>
      <section className='flex flex-col justify-center items-center my-4 p-8 border border-gray-500'>
        <span className="text-2xl font-bold">Register</span>

        <div className='flex w-full justify-center'>
          <div className='w-[300px]'>
            <RegistrationForm
              fields={fields}
              onChange={handleOnChange}
              onConfirm={handleOnConfirm} />
          </div>
        </div>

      </section>

      {context.fields.length > 0 && (
        <TableDate
          values={context.fields}
          onRemove={handleRemove}
        />)}
    </>
  )
}
export default AvailableTime