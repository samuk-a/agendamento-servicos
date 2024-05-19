import { useState } from 'react'
import RegistrationForm from './RegistrationForm';

const AvailableTime = () => {
  const [fields, setFields] = useState({});
  const [tempFields, setTempFields] = useState([]);

  const handleOnChange = (key: string, value: any) => {
    setFields((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleOnConfirm = () => {
    setTempFields((prev: any) => ([...prev, fields]))
    console.log(fields)
  }

  const formatDate = (date) => {
    const originalDate = new Date(date);
    const day = String(originalDate.getDate()).padStart(2, '0');
    const month = String(originalDate.getMonth() + 1).padStart(2, '0');
    const year = originalDate.getFullYear();

    return `${day}/${month}/${year}`
  }

  const formatHour = (datetime) => {
    const date = new Date(datetime);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);

    return hours + ":" + minutes;
  }

  const handleRemove = (id: number) => {
    setTempFields((prev: any) => prev.filter((_, index: number) => index !== id))
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

      </section><section className='flex flex-col justify-center items-center my-4 p-8 border border-gray-500'>
        <span className="text-2xl font-bold">Available Time</span>

        <table>
          <thead className='border border-gray-400'>
            <tr>
              <th className='border border-gray-400 p-4'>Name</th>
              <th className='border border-gray-400 p-4'>Hour</th>
              <th className='border border-gray-400 p-4'>Work Type</th>
              <th className='border border-gray-400 p-4'>Date</th>
            </tr>

          </thead>

          <tbody>
            {tempFields.length > 0 && tempFields.map((element, index) => (
              <tr key={`${index}-${element.name}`}>
                <td className='border border-gray-400 p-4'>
                  {element?.name}
                </td>
                <td className='border border-gray-400 p-4'>
                  {formatHour(element?.hour.toISOString())}
                </td>
                <td className='border border-gray-400 p-4'>
                  {element?.workType}
                </td>
                <td className='border border-gray-400 p-4'>
                  {formatDate(element?.date?.toISOString())}
                </td>
                <td className='border border-gray-400 p-4'>
                  <button onClick={() => handleRemove(index)} className='bg-red-500 text-white p-2 rounded-md hover:bg-red-700'>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
export default AvailableTime