import Navbar from './Navbar';
import SpeedDialMenu from './SpeedDialMenu';

import {Box} from "@mui/material"

const Navegation = () => {
  return (
    <Box sx={{
      position:"relative",
      zIndex:"99999"
    }}>
      <Navbar />
      <SpeedDialMenu />
    </Box>
  );
};

export default Navegation;
