import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import MainVideo from '../../components/MainVideo/MainVideo'
import MainVideoDetails from '../../components/MainVideoDetails/MainVideoDetails';
import Form from '../../components/Form/Form';
import CommentsList from '../../components/CommentsList/CommentsList';
import NextVideo from '../../components/NextVideo/NextVideo';
import NextVideoHeading from '../../components/NextVideoHeading/NextVideoHeading';
import {apiKey, apiUrl} from '../../App';
import axios from 'axios';


class HomePage extends Component {
    state = {
        selectedVideo: '',
        videoList: [],
      }

    componentDidMount() {

      const currentVideoId = this.props.match.params.videoId;

      axios.get(`${apiUrl}/videos?api_key=${apiKey}`)
        .then ((response) => {

          const videoListResults = response.data;
          const firstVideoId = videoListResults[0].id;

          this.setState({
            videoList: videoListResults
          });

          return (currentVideoId) ? currentVideoId : firstVideoId;
        })
        .then ((firstVideoId) => {
          return axios.get(`${apiUrl}/videos/${firstVideoId}?api_key=${apiKey}`)
        })
        .then ((firstVideoData) => {
          this.setState({
            selectedVideo: firstVideoData.data
          })
        })
    }

    componentDidUpdate(prevProps) {

      const currentVideoId = this.props.match.params.videoId;
      const prevVideoId = prevProps.match.params.videoId;

      const videoIdToFetch = (currentVideoId) ? currentVideoId : this.state.videoList[0].id

      if (prevVideoId !== currentVideoId) {
        axios.get(`${apiUrl}/videos/${videoIdToFetch}?api_key=${apiKey}`)
          .then ((videoData) => {
            this.setState({
              selectedVideo: videoData.data
            })
          })
      }
    }
      
    render() {
      const filteredVideos = this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)

      const timestamp = this.state.selectedVideo.timestamp;
      const betterDate = new Date(timestamp);
      const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();
      
      return (
        
        <>
          <header className='header'>
            <Header/>
          </header>
          <section className='page-components'>
            <section className='details-comments'>
              <MainVideoDetails/>
              {/* <Form/>
              <CommentsList/> */}
            </section>
            <section className='next-videos'>
              <NextVideoHeading/>
              <NextVideo videos={filteredVideos}/>
            </section>
          </section>
        </>
      )
    }
}

export default HomePage;