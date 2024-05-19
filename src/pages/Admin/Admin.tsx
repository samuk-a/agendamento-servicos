import { useEffect, useState } from 'react';
import './Admin.css';

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
  const [appointments, setAppointments] = useState<Appointment[]>([]);

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
      <div className="calendar-grid">
        {appointments.map((day) => (
          <div key={day.id} className="calendar-day">
            <h2>{day.date}</h2>
            <ul>
              {day.services?.map((appointment) => (
                <li key={appointment.id}>
                  <span>{appointment.time} </span>
                  <span>{appointment.service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;