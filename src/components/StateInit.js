import { useEffect, useState } from 'react';

const getInitialCounterValue = () => {
  const savedValue = localStorage.getItem('counterValue');
  return savedValue !== null ? JSON.parse(savedValue) : 0;
};

export const StateInit = () => {
  const [value, setValue] = useState(getInitialCounterValue);

  useEffect(() => {
    localStorage.setItem('counterValue', value);
  }, [value]);

  return (
    <div>
      <button onClick={() => setValue(state => state + 1)}>
        Value: {value}
      </button>
    </div>
  );
};
