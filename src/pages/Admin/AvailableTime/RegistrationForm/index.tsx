import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const RegistrationForm = ({
  onChange,
  fields,
  onConfirm,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={fields['name'] || ''} onChange={e => onChange('name', e.target.value)} />
      </label>
      <br />
      <label>
        Hour:
        <div>

          <DatePicker
            selected={fields['hour'] || ''}
            onChange={(date) => onChange('hour', date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Hour"
            dateFormat="HH:MM"
          />
        </div>
      </label>
      <br />
      <label>
        Work Type:
        <input type="text" value={fields['workType'] || ''} onChange={e => onChange('workType', e.target.value)} />
      </label>

      <label>
        Date:
        <div>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={fields['date'] || ''}
            onChange={(date) => onChange('date', date)}
          />
        </div>
      </label>

      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

