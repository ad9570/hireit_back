import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/Budget';
import { LatestOrders } from '../components/dashboard/LatestOrders';
import { LatestProducts } from '../components/dashboard/LatestProducts';
import { TasksProgress } from '../components/dashboard/TasksProgress';
import { TotalCustomers } from '../components/dashboard/TotalCustomers';
import { TotalProfit } from '../components/dashboard/TotalProfit';
import { DashboardLayout } from '../components/DashboardLayout';
import Chartreal from './Chartreal';

const Dashboard = () => (
  
  <>
    
      <title>
        Dashboard | Material Kit
      </title>
    
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
              <Chartreal/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
