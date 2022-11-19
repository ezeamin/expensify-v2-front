import { movementsViews } from 'constants/movements';

import { Button, Stack, Typography, Box } from '@mui/material';

import Icon from './Icon';

const ListItem = (props: any) => {
  const {
    id,
    delay,
    type,
    amount,
    hour,
    name,
    category,
    description,
    account,
  } = props;

  let moneyPrefix = '';
  let color = '';

  switch (type) {
    case movementsViews.EXPENSE:
      moneyPrefix = '- $';
      color = 'red.main';
      break;
    case movementsViews.INCOME:
      moneyPrefix = '+ $';
      color = 'green.dark';
      break;
    case movementsViews.TRANSFER:
      moneyPrefix = '$';
      color = 'yellow.main';
      break;
    case movementsViews.DEBT:
      moneyPrefix = '$';
      color = 'primary.main';
      break;
    default:
      moneyPrefix = '$';
  }

  return (
    <Button
      sx={{
        display: 'block',
        width: '100%',
        padding: 0,
        my: 2,
        animationDelay: `${delay}ms`,
      }}
      className='animate-in-bottom'
    >
      <Stack direction='row' alignItems='flex-start'>
        <Icon icon={category?.icon || account.icon} type={type} />
        <Stack justifyContent="center" sx={{ height: "100%", ml: 2, mr: 1, width: '100%', textAlign: 'start' }}>
          <Typography color='mainText.main' variant='body1' component='p' fontWeight='bold'>
            {name}
          </Typography>
          {category?.name && (
            <Typography
              variant='body1'
              component='p'
              color='gray.main'
              sx={{ fontSize: '1rem' }}
            >
              {category?.name}
            </Typography>
          )}
        </Stack>
        <Stack sx={{ textAlign: 'end' }}>
          <Typography variant='body1' color={color} noWrap component='p' fontWeight='bold'>
            {moneyPrefix + amount}
          </Typography>
          <Typography
            variant='body1'
            component='p'
            color='gray.main'
            sx={{ fontSize: '1rem' }}
          >
            {account?.name}
          </Typography>
        </Stack>
        {/* <Box
          sx={{
            height: '50px',
            backgroundColor: color,
            width: '5px',
            ml: 1,
          }}
        ></Box> */}
      </Stack>
    </Button>
  );
};

export default ListItem;
