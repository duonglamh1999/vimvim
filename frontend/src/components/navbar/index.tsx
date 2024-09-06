import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/learn" passHref>
            <Button color="inherit">Learn</Button>
          </Link>
          <Link href="/create" passHref>
            <Button color="inherit">Create Vim</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
