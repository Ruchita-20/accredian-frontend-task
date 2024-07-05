import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Form from './form'; // Assuming 'form.js' exports a Form component

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between',alignItems:'center', background: '#EEF5FF', maxWidth:'60%', height: '40%', borderRadius: 5, marginTop: '20px' }} elevation={10}>
      <Box sx={{ width: '60%' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',  padding: theme.spacing(2, 4) }}>
          <Typography variant="h3" fontWeight="Bold" component="div" gutterBottom sx={{ marginBottom: theme.spacing(4) ,textAlign:'left'}}>
            Let’s Learn & Earn
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{ marginBottom: theme.spacing(4) ,textAlign:'left'}}>
            Get a chance to win up-to <Typography variant="h4" fontWeight="Bold" color='#1A73E8'>Rs. 15,000</Typography> 
          </Typography>
          <Form sx={{ marginBottom: theme.spacing(4) }}/>
        </CardContent>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between',alignItems:'flex-end',}}>
      <CardMedia
        component="img"
        sx={{ objectFit: 'cover' }}
        image="banner.png"
        alt="Banner Image"
      />
      </Box>
    </Card>
      
  );
}
