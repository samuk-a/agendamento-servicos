import React, { useEffect, useState } from 'react';
import supabase from '../../supabase';
import './Admin.css';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data: appointmentsData, error } = await supabase
          .from('appointments')
          .select('*')

        if (error) {
          throw new Error(error.message);
        }

        setAppointments(appointmentsData);
      } catch (error) {
        console.error(error);
      }
    };

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
              {day.appointments.map((appointment) => (
                <li key={appointment.id}>
                  <span>{appointment.time}</span>
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