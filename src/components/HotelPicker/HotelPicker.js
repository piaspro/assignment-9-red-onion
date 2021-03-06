import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon:  {
    height: 10,
  }
}));

const HotelPicker = ({hotel}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={hotel.imgUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {hotel.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {hotel.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {hotel.bedType}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                 $ {hotel.price} /night
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="complex" src={hotel.avatar} />
              <img className={classes.icon} alt="complex" src={hotel.avatar} />
              <img className={classes.icon} alt="complex" src={hotel.avatar} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default HotelPicker;