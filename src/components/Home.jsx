import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography, CircularProgress, Alert, Grid } from '@mui/material';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" height="5vh"><CircularProgress /></Box>;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Box component="main" sx={{ marginTop: '100px', marginLeft: '100px', p: 3, width: '85vw' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        EMPLOYEE LIST
      </Typography>
      <hr />
      <Grid container spacing={3}>
        {data.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card>
              <CardContent>
                <Typography variant="body1" component="div">
                  ID: {employee.id}
                </Typography>
                <Typography variant="h6" component="div">
                  Name: {employee.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {employee.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
