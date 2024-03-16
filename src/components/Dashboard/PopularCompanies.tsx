import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface Product {
  id: string;
  image: string;
  name: string;
}

export interface LatestProductsProps {
  products?: Product[];
  sx?: SxProps;
}

export function PopularCompanies({
  products = [],
  sx,
}: LatestProductsProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Popular Companies" />
      <Divider />
      <List>
        {products.map((product, index) => (
          <ListItem divider={index < products.length - 1} key={product.id}>
            <ListItemAvatar>
              {product.image ? (
                <Box
                  component="img"
                  src={product.image}
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
              primary={product.name}
              primaryTypographyProps={{ variant: 'subtitle1' }}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
              explore
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button color="inherit" size="large" variant="text">
          View all
        </Button>
      </CardActions>
    </Card>
  );
}
