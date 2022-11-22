import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import appConstants from '../constants/app-constants';
import styles from './NavigationStyles.module.css';

export default function NavMenu() {
  return (
      <Toolbar
        component="nav"
        variant="dense"
        className={styles.overflowXauto}
      >
        {appConstants.sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={styles.linkCustomStyle}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
  );
}