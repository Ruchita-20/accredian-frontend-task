import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CenteredTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '40%',
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#EEF5FF',
        color: 'black',
        borderRadius: '50px',
        margin: '0 auto', // Center the box horizontally
        [theme.breakpoints.down('sm')]: {
          maxWidth: '90%', // Adjust for smaller screens
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: { display: '2' } // Hides the indicator line
        }}
      >
        <Tab label="Refer" sx={{ textTransform: 'capitalize', fontSize:'18px'}}/>
        <Tab label="Benefits" sx={{ textTransform: 'capitalize', fontSize:'18px' }}/>
        <Tab label="FAQs" sx={{ textTransform: 'capitalize', fontSize:'18px' }}/>
        <Tab label="Support" sx={{ textTransform: 'capitalize', fontSize:'18px' }}/>
      </Tabs>
    </Box>
  );
}
