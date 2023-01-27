import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import styles from "./AboutUs.module.css";

function TeamCard(props: any) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <Box width="100%" pt={2} pb={1} px={2}>
            <Box
              component="img"
              src={props.image}
              alt={props.name}
              className={styles.boxImg}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8} className={styles.marginTopBottomAuto}>
          <Box
            pt={{ xs: 1, lg: 2.5 }}
            pb={2.5}
            pr={4}
            pl={{ xs: 4, lg: 1 }}
            lineHeight={1}
          >
            <Typography variant="h5" className={styles.fontBold}>
              {props.name}
            </Typography>
            <Typography variant="h6" color={props.position.color} mb={1}>
              {props.position.label}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TeamCard;
