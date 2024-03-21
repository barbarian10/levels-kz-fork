import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PopularCompaniesModal from '../PopularCompaniesModal/PopularCompaniesModal.tsx';

export interface Company {
  id: string;
  image: string;
  name: string;
}

export interface LatestProductsProps {
  companies?: Company[];
  sx?: SxProps;
}

export function PopularCompanies({ companies = [], sx }: LatestProductsProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={sx}>
      <CardHeader title="Popular Companies" />

      <Box sx={{ width: '80%' }}>
        <List>
          {companies.slice(0, 5).map((company, index) => (
            <ListItem divider={index < 4} key={company.id}>
              <ListItemAvatar>
                {company.image ? (
                  <Box
                    component="img"
                    src={company.image}
                    sx={{ borderRadius: 1, height: '48px', width: '48px' }}
                  />
                ) : (
                  <Box
                    sx={{
                      borderRadius: 1,
                      backgroundColor: 'var(--mui-palette-neutral-200)',
                      height: '48px',
                      width: '48px',
                    }}
                  />
                )}
              </ListItemAvatar>

              <ListItemText
                primary={company.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondaryTypographyProps={{ variant: 'body2' }}
              />

              <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                explore
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          onClick={() => setOpen(true)}
          color="inherit"
          size="large"
          variant="text"
        >
          View all
        </Button>
      </CardActions>

      <PopularCompaniesModal
        open={open}
        setOpen={setOpen}
        companies={companies}
      />
    </Card>
  );
}