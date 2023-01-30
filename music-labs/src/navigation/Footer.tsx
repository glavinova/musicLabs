import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { BottomNavigationAction } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./NavigationStyles.module.scss";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 6 }}
      className={styles.footer}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <BottomNavigationAction
            aria-label="FacebookIcon"
            className={styles.colorBlack}
            icon={<FacebookIcon />}
          />
          <BottomNavigationAction
            aria-label="GoogleIcon"
            className={styles.colorBlack}
            icon={<GoogleIcon />}
          />
          <BottomNavigationAction
            aria-label="InstagramIcon"
            className={styles.colorBlack}
            icon={<InstagramIcon />}
          />
          <BottomNavigationAction
            aria-label="LinkedInIcon"
            className={styles.colorBlack}
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            aria-label="GitHubIcon"
            className={styles.colorBlack}
            icon={<GitHubIcon />}
          />
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          className={styles.footerTypography}
        >
          Music notes for everyone !
        </Typography>
        <Typography
          variant="body2"
          className={styles.footerTypography}
          align="center"
        >
          {"Copyright © "}
          <Link color="inherit" href="#">
            Music Labs
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
