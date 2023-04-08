import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const Control: React.FC = () => {
  return (
    <LayoutControl>
      <Button variant="outlined" color="primary" size="small">
        -
      </Button>
      <Number>1</Number>
      <Button variant="outlined" color="primary" size="small">
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
