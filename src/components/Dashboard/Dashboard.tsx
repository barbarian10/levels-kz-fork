import { Grid } from '@mui/material';
import { MyCompanies } from './MyCompanies.tsx';
import { PopularCompanies } from './PopularCompanies.tsx';
import { Salaries } from './Salaries.tsx';
import { Traffic } from './Traffic.tsx';
import { orders, companies } from './data.ts';

export function Dashboard() {
  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <Grid container spacing={3} sx={{ padding: '20px' }}>
        <Grid item lg={6} md={12} xs={12}>
          <Salaries sx={cardStyles} />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Traffic
            chartSeries={[40, 40, 20]}
            labels={['Frontend', 'Backend', 'UI/UX']}
            sx={cardStyles}
          />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <PopularCompanies companies={companies} sx={cardStyles} />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <MyCompanies orders={orders} sx={cardStyles} />
        </Grid>
      </Grid>
    </>
  );
}
