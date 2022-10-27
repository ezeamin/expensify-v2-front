import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { speedDialList } from './data/speedDialList';

const SpeedDialMenu = () => {
  const navigate = useNavigate();

  return (
    <SpeedDial
      ariaLabel='menu'
      sx={{
        position: 'fixed',
        bottom: '5rem',
        right: '1rem',
      }}
      icon={<AddRoundedIcon sx={{ width: '2.25rem', height: '2.25rem' }} />}
      FabProps={{
        sx: {
          backgroundColor: 'secondary.main',
          color: 'secondary.contrastText',
        },
      }}
    >
      {speedDialList.map((item) => (
        <SpeedDialAction
          tooltipOpen
          tooltipTitle={item.name}
          icon={item.icon}
          onClick={() => navigate(item.path)}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialMenu;
