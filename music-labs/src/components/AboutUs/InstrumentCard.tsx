import { CardActionArea, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import styles from "./AboutUs.module.scss";

function InstrumentCard(props: any) {
  return (
    <CardActionArea>
      <Card
        className={styles.instrumentCard}
        sx={{ backgroundImage: `url(${props.backgroundImg})` }}
      >
        <CardContent>
          <Typography variant="h4">{props.instrument}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

export default InstrumentCard;
