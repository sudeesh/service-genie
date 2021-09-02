import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './carousel.scss';
import { BannerDesktopItems, BannerMobileItems } from './carouselItems';

function CustomCarousel(props) {
  const render =
    props.device.breakpoint === 'phone'
      ? BannerMobileItems()
      : BannerDesktopItems();
  return (
    <Carousel animation="slide" autoPlay={false} className="carousel">
      {render.map((item, i) => (
        <ImgMediaCard key={i} {...item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    borderRadius: '0px',
  },
});

function ImgMediaCard({ src, alt, href }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a href={href}>
        <CardMedia component="img" alt={alt} image={src} title={alt} />
      </a>
    </Card>
  );
}

export default CustomCarousel;
