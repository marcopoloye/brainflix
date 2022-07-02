import React from 'react';
import './App.scss'
import Header from '../src/components/Header/Header';
import MainVideo from '../src/components/MainVideo/MainVideo';
import MainVideoDetails from './components/MainVideoDetails/MainVideoDetails';
import Form from '../src/components/Form/Form';
import Comments from '../src/components/Comments/Comments';
import NextVideoList from './components/NextVideoList/NextVideoList';
import nextVideoData from './data/videos.json'
import videoData from './data/video-details.json'


class App extends React.Component {
  state = {
    selectedVideo: videoData[0],
    videoList: nextVideoData,
  }

  handleVideoSelect = id => {
    this.setState({selectedVideo: videoData.find(video=>video.id === id)})
  }

  render() {

    const filteredVideos = this.state.videoList.filter( video => video.id !== this.state.selectedVideo.id )
    return (
      <>
        <header className= 'header'>
          <Header/>
        </header>
        <MainVideo />
        <MainVideoDetails selectedVideo={this.state.selectedVideo}/>
        <Form />
        <Comments />
        <NextVideoList nextVideoData={filteredVideos} handleVideoSelect={this.handleVideoSelect} />
      </>
    )
  }
}

export default App;