import { IconType } from 'components/Overview/types/IconTypes';
import { movements } from 'constants/movements';

import { Stack } from '@mui/material';

const Icon = (props: IconType) => {
  const { icon, type } = props;

  let bgColor = 'gray.light';

//   switch (type) {
//     case movements.EXPENSE:
//       bgColor = 'red.light';
//       break;
//     case movements.INCOME:
//       bgColor = 'green.light';
//       break;
//     case movements.TRANSFER:
//       bgColor = 'gray.light';
//       break;
//     default:
//       bgColor = 'gray.light';
//   }

  return (
    <Stack
      justifyContent='center'
      sx={{
        minWidth: '4rem',
        minHeight: '4rem',
        backgroundColor: bgColor,
        fontSize: '1.7rem',
        borderRadius: '1.5rem',
        textAlign: 'center',
      }}
    >
      {icon}
    </Stack>
  );
};

export default Icon;
