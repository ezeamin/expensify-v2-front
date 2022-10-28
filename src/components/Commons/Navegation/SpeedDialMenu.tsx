import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import { SpeedDial, SpeedDialAction } from '@mui/material';

import { speedDialList } from './data/speedDialList';

const SpeedDialMenu = () => {
  const [opened, setOpened] = useState(false);

  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setOpened(false);
    navigate(path);
  };

  return (
    <SpeedDial
      ariaLabel='menu'
      sx={{
        position: 'fixed',
        bottom: '5rem',
        right: '1rem',
      }}
      open={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      icon={<SpeedDialIcon />}
      FabProps={{
        sx: {
          backgroundColor: 'secondary.main',
          color: 'secondary.contrastText',
          transition: 'all 0.15s !important',
        },
      }}
    >
      {speedDialList.map((item) => (
        <SpeedDialAction
          tooltipOpen
          tooltipTitle={item.name}
          icon={item.icon}
          key={item.name}
          onClick={() => handleClick(item.path)}
          FabProps={{
            sx: {
              backgroundColor: item.color + '.main',
              color: item.color + '.contrastText',
              transition: 'all 0.15s',
              '&:hover': {
                backgroundColor: item.color + '.dark',
              },
            },
          }}
          sx={{
            '& span': {
              fontWeight: 'bold',
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialMenu;
