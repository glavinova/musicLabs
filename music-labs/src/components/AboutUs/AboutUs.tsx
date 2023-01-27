import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box, Button, Typography, Link, Input } from "@mui/material";
import CountUp from "react-countup";
import TeamCard from "./TeamCard";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PaidIcon from "@mui/icons-material/Paid";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import InstrumentCard from "./InstrumentCard";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <Box className={styles.mainBox}>
        <Container>
          <Grid container item xs={12} lg={8} className={styles.firstGrid}>
            <Typography
              variant="h1"
              color="black"
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {},
              })}
            >
              When words fail, music speaks
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                mb: 3,
                filter: "drop-shadow(2px 4px 6px black)",
                ml: 1,
              }}
              className={styles.secondMainHeading}
            >
              We provide resources and support to all music lovers who want to
              achieve their musical potential and enrich their communities.
            </Typography>
            <Link href="/register">
              <Button color="secondary" variant="contained">
                create account
              </Button>
            </Link>
          </Grid>
        </Container>
      </Box>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
        }}
        className={styles.mainCard}
      >
        <Grid container className={styles.contentCenter}>
          <Grid item xs={12} md={3}>
            <Box p={2} className={styles.contentCenter} lineHeight={1}>
              <Typography variant="h3" color="secondary">
                <CountUp end={3587} duration={2} separator="," suffix="+" />
              </Typography>
              <Typography variant="h5" mt={2} mb={1}>
                Visitors
              </Typography>
              <Typography variant="body2" color="text">
                On a daily level who are using the FREE resources
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box p={2} className={styles.contentCenter} lineHeight={1}>
              <Typography variant="h3" color="secondary">
                <CountUp end={2534} duration={2} separator="," suffix="+" />
              </Typography>
              <Typography variant="h5" mt={2} mb={1}>
                Downloads
              </Typography>
              <Typography variant="body2" color="text">
                Of music sheets from various artist and genres
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box p={2} className={styles.contentCenter} lineHeight={1}>
              <Typography variant="h3" color="secondary">
                <CountUp end={1468} duration={2} separator="," suffix="+" />
              </Typography>
              <Typography variant="h5" mt={2} mb={1}>
                Subscribers
              </Typography>
              <Typography variant="body2" color="text">
                Who are upgrading professionally using the Music Labs Pro
                services
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          component="section"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
          className={styles.teamSection}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                <Typography variant="h3" color="white">
                  The Team
                </Typography>
                <Typography variant="body2" className={styles.teamTypography}>
                  Great teamwork is the only way we create the breakthroughs
                  that define our careers.
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <Box mb={1}>
                  <TeamCard
                    image="./images/woman-profile.jpg"
                    name="Olivia Taylor"
                    position={{
                      color: "primary",
                      label: "Front-end developer",
                    }}
                    description="What separates design from art is that design is meant to be… functional."
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box mb={1}>
                  <TeamCard
                    image="./images/man-profile.jpg"
                    name="Dylan Hudson"
                    position={{ color: "primary", label: "Technical Lead" }}
                    description="Learning to code is useful no matter what your career ambitions are."
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Grid container justifyContent="center">
          <Typography variant="h4" className={styles.iconsTypography}>
            Why Music Labs?
          </Typography>
          <Grid xs={12} sm={12} className={styles.iconsContainer}>
            <Grid item xs={6} sm={4}>
              <LibraryMusicIcon className={styles.fontSize60} /> <br /> Over 200
              000 music sheets
            </Grid>
            <Grid item xs={6} sm={4}>
              <LockOpenIcon className={styles.fontSize60} /> <br /> Open source
              web application
            </Grid>
            <Grid item xs={6} sm={4}>
              <PaidIcon className={styles.fontSize60} /> <br /> Over 1000 free
              music sheets
            </Grid>
          </Grid>
          <Grid xs={12} sm={12} className={styles.iconsContainer}>
            <Grid item xs={6} sm={4}>
              <AttachFileIcon className={styles.fontSize60} /> <br /> Get your
              PDF music sheets
            </Grid>
            <Grid item xs={6} sm={4}>
              <ShareIcon className={styles.fontSize60} /> <br /> Share links to
              your friends
            </Grid>
            <Grid item xs={6} sm={4}>
              <ThumbUpAltIcon className={styles.fontSize60} /> <br /> Easy and
              pleasant to use
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={styles.instrumentsContainer}>
          <Typography variant="h4" className={styles.instrumentTypography}>
            Available music sheets for
          </Typography>
          <Grid xs={12} sm={12} className={styles.instrumentsGrid}>
            <Grid item xs={6} sm={4} className={styles.translatePiano}>
              <InstrumentCard
                instrument="Piano"
                backgroundImg="./images/piano.png"
              />
            </Grid>
            <Grid item xs={6} sm={4} className={styles.translateGuitar}>
              <InstrumentCard
                instrument="Guitar"
                backgroundImg="./images/guitar.png"
              />
            </Grid>
            <Grid item xs={6} sm={4} className={styles.translateDrums}>
              <InstrumentCard
                instrument="Drums"
                backgroundImg="./images/drums.png"
              />
            </Grid>
            <Grid item xs={6} sm={4} className={styles.translateVoice}>
              <InstrumentCard
                instrument="Voice"
                backgroundImg="./images/mic.png"
              />
            </Grid>
          </Grid>
        </Grid>
        <Box component="section" pt={6} my={6}>
          <Container>
            <Grid container alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}
              >
                <Typography variant="h4">
                  Get daily inspiration for FREE !
                </Typography>
                <Typography variant="body2" color="text" mb={3}>
                  Subscribe and get Exclusive Tips for playing different
                  instruments, right in your Inbox for free.
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <Input type="email" placeholder="Email Here..." fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={styles.height100}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5} className={styles.marginLeftAuto}>
                <Box position="relative">
                  <Box
                    component="img"
                    src="./images/ad.png"
                    alt="ads"
                    width="100%"
                    className={styles.adImage}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Card>
    </>
  );
};

export default AboutUs;
