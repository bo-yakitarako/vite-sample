import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io();

export const useSocket = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.on('count', (dataText) => {
      const data = JSON.parse(dataText);
      setCount(data.count);
    });
  }, []);

  const plus = useCallback(() => {
    socket.emit('plus');
  }, []);
  const minus = useCallback(() => {
    socket.emit('minus');
  }, []);

  return { count, plus, minus };
};
