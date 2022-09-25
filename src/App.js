import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';

//https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/01.png

class App extends Component {
  render() {
    const images = [
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/01.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/01.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/02.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/02.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/03.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/03.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/04.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/04.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/05.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/05.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/06.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/06.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/07.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/07.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/08.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/08.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/09.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/09.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/10.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/10.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/11.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/11.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/12.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/12.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/13.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/13.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/14.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/14.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/15.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/15.png',
      },
      {
        original: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/clouds/16.png',
        thumbnail: 'https://s3.amazonaws.com/albumclouds.johncarmack.com/thumbs/16.png',
      },

    ]
    return (
      <ImageGallery items={images} />
    );
  }
}

export default App;
