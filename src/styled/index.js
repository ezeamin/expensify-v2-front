import styled from '@emotion/styled';
import { IconButton,Box } from '@mui/material';

export const CircleButtonStyled = styled(IconButton)`
  width: 50px;
  height: 50px;
  padding: 0;
  font-size: 1rem;
  border: 1px solid #eee;
`;

export const CircleStyled = styled(Box)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
