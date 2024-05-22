import { useContext, useEffect, useState } from 'react';
import './Admin.css';
import { TempStateContext } from '../../context/TempStateContenxt';
import TableDate from '../../components/TableDate';

interface Appointment {
  id: number;
  date: string;
  services: {
    id: number;
    time: string;
    service: string;
  }[];
}

const Admin = () => {
  const [, setAppointments] = useState<Appointment[]>([]);

  const context = useContext(TempStateContext)

  useEffect(() => {
    const fetchAppointments = async () => {
      setAppointments([
        {
          id: 1,
          date: '01/10/2021',
          services: [
            { id: 1, time: '08:00', service: 'Corte' },
            { id: 2, time: '09:00', service: 'Barba' },
          ],
        },
        {
          id: 2,
          date: '02/10/2021',
          services: [
            { id: 3, time: '08:00', service: 'Barba' },
            { id: 4, time: '09:00', service: 'Corte' },
          ],
        },
        {
          id: 3,
          date: '03/10/2021',
          services: [
            { id: 5, time: '08:00', service: 'Barba' },
            { id: 6, time: '09:00', service: 'Barba' },
          ],
        },
      ])
    }

    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>

      <TableDate
        values={context.fields}
      />
    </div>
  );
};

export default Admin;