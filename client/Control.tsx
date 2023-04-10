import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { useSocket } from './hooks/useSocket';

export const Control: React.FC = () => {
  const { plus, minus } = useSocket();
  return (
    <LayoutControl>
      <Button variant="outlined" color="primary" size="small" onClick={minus}>
        -
      </Button>
      <Number>1</Number>
      <Button variant="outlined" color="primary" size="small" onClick={plus}>
        +
      </Button>
    </LayoutControl>
  );
};

const LayoutControl = styled(Box)`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Number = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;
