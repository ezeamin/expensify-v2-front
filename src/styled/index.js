import styled from '@emotion/styled';
import { IconButton,Box } from '@mui/material';

import themes from 'constants/themes';

export const CircleButtonStyled = styled(IconButton)`
  width: 50px;
  height: 50px;
  padding: 0;
  font-size: 1rem;
  border: 1px solid ${props => props.theme === themes.LIGHT ? "#eee" : "#555"};
`;

export const CircleStyled = styled(Box)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
