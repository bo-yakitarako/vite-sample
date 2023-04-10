import { Number } from './Control';
import { useSocket } from './hooks/useSocket';

export const Display: React.FC = () => {
  const { count } = useSocket();
  return <Number>{count}</Number>;
};
