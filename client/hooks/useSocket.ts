import { useCallback, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io();

export const useSocket = () => {
  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message);
    });
  }, []);

  const plus = useCallback(() => {
    socket.emit('plus');
  }, []);
  const minus = useCallback(() => {
    socket.emit('minus');
  }, []);

  return { plus, minus };
};
