import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestBackEnd = () => {
  const [potion, setPotion] = useState([]);

  useEffect(() => {
    axios.get('/potions').then((res) => {
      setPotion(res.data);
    });
  }, []);

  return (
    <>
      <ul>
        {potion.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TestBackEnd;
