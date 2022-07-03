import React from 'react';
import './App.scss'
import Header from '../src/components/Header/Header';
import MainVideo from '../src/components/MainVideo/MainVideo';
import MainVideoDetails from './components/MainVideoDetails/MainVideoDetails';
import Form from '../src/components/Form/Form';
import CommentsList from '../src/components/CommentsList/CommentsList';
import NextVideoList from './components/NextVideoList/NextVideoList';
import NextVideoHeading from './components/NextVideoHeading/NextVideoHeading';
import nextVideoData from './data/videos.json'
import videoData from './data/video-details.json'


class App extends React.Component {
  state = {
    selectedVideo: videoData[0],
    videoList: nextVideoData,
  }

  handleVideoSelect = (id) => {
    this.setState({selectedVideo: videoData.find(video => video.id === id)})
  }
  
  render() {
    const filteredVideos = this.state.videoList.filter( video => video.id !== this.state.selectedVideo.id )

    const timestamp = this.state.selectedVideo.timestamp;
    const betterDate = new Date(timestamp);
    const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();
    console.log(bestDate)

    return (
      <>
        <header className='header'>
          <Header/>
        </header>
        <MainVideo selectedVideo={this.state.selectedVideo} />
        <section className='page-components'>
          <section className='details-comments'>
            <MainVideoDetails selectedVideo={this.state.selectedVideo} bestDate={bestDate}/>
            <Form selectedVideo={this.state.selectedVideo}/>
            <CommentsList selectedVideo={this.state.selectedVideo.comments}/>
          </section>
          <section className='next-videos'>
            <NextVideoHeading/>
            <NextVideoList nextVideoData={filteredVideos} handleVideoSelect={this.handleVideoSelect} />
          </section>
        </section>

      </>
    )
  }
}

export default App;