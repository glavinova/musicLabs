import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import appConstants from '../constants/app-constants';

export default function NavMenu() {
  return (
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: 'auto' }}
      >
        {appConstants.sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, marginRight: '20px' }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
  );
}