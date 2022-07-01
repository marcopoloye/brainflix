import React from 'react';
import './App.scss'
import Header from '../src/components/Header/Header';
import MainVideo from '../src/components/MainVideo/MainVideo';
import MainVideoData from '../src/components/MainVideoData/MainVideoData';
import Form from '../src/components/Form/Form';
import Comments from '../src/components/Comments/Comments';
import NextVideos from '../src/components/NextVideos/NextVideos';
import NextVideosList from './data/videos.json'
import videoDetails from './data/video-details.json'




class App extends React.Component {
  state = {
    selectedVideo: videoDetails[0],
    videoList: NextVideosList,
  }

  render () {


    return (
      <body>
        <header className= 'header'>
          <Header/>
        </header>
        <MainVideo />
        <MainVideoData />
        <Form />
        <Comments />
        <NextVideos />
      </body>
    )
  }
}