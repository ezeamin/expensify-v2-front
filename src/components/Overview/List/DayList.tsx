import { useTranslation } from 'react-i18next';

import { Typography, Box } from '@mui/material';

import { getMonthName } from 'helpers/getMonthName';

import ListItem from './Item/ListItem';

const DayList = (props: any) => {
  //TODO

  const { date, month, movements, index } = props;

  const delay = index * 10 + 300;

  const { t } = useTranslation();

  const monthName = t(`MONTHS.${getMonthName(month)}`);

  return (
    <Box className='animate-in-bottom' sx={{ animationDelay: `${delay}ms` }}>
      <Typography
        variant='body1'
        component='p'
        color='gray.main'
        sx={{ mt: 3 }}
      >
        {date !== new Date().getDate() ? `${date} ${monthName}` : t('TODAY')}
      </Typography>
      {movements.map((item: any, index: number) => (
        <ListItem {...item} key={item.id} delay={delay + index * 100} />
      ))}
    </Box>
  );
};

export default DayList;
