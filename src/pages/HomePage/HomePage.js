import React from 'react';
import MainVideo from '../../components/MainVideo/MainVideo'
import MainVideoDetails from '../../components/MainVideoDetails/MainVideoDetails';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import NextVideo from '../../components/NextVideo/NextVideo';
import NextVideoHeading from '../../components/NextVideoHeading/NextVideoHeading';
import axios from 'axios';
import './HomePage.scss'


class HomePage extends React.Component {
    state = {
        selectedVideo: '',
        videoList: [],
      }

    componentDidMount() {

      const currentVideoId = this.props.match.params.videoId;

      axios.get(`http://localhost:8080/videos`)
        .then ((response) => {

          const videoListResults = response.data;
          const firstVideoId = videoListResults[0].id;

          this.setState({
            videoList: videoListResults
          });

          return (currentVideoId) ? currentVideoId : firstVideoId;
        })
        .then ((firstVideoId) => {
          return axios.get(`http://localhost:8080/videos/${firstVideoId}`)
        })
        .then ((firstVideoData) => {
          this.setState({
            selectedVideo: firstVideoData.data
          })
        })
        .catch((error) => {'Error retrieving data'})
    }

    componentDidUpdate(prevProps) {

      const currentVideoId = this.props.match.params.videoId;
      const prevVideoId = prevProps.match.params.videoId;

      const videoIdToFetch = (currentVideoId) ? currentVideoId : this.state.videoList[0].id

      if (prevVideoId !== currentVideoId) {
        axios.get(`http://localhost:8080/videos/${videoIdToFetch}`)
          .then ((videoData) => {
            this.setState ({
              selectedVideo: videoData.data
            })
          })
          .catch((error) => {'Error retrieving data'})
      }
    }
      
    render() {
      const filteredVideos = this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id)

      const timestamp = this.state.selectedVideo.timestamp;
      const betterDate = new Date(timestamp);
      const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();

      return (
        <>
          <section>
            {
              this.state.selectedVideo ? (<MainVideo video={this.state.selectedVideo}/>) : (<p>Loading...</p>)
            }
          </section>
          <section className='page-components'>
            <section className='page-components__main-video'>
              {
                this.state.selectedVideo ? (<MainVideoDetails video={this.state.selectedVideo} date={bestDate}/>) : ('')
              }
              {
                this.state.selectedVideo ? (<Form video={this.state.selectedVideo}/>) : ('')
              }
              {
                this.state.selectedVideo ? (<Comments comments={this.state.selectedVideo.comments}/>) : ('')
              }
            </section>
            <section className='page-components__next-videos'>
              <NextVideoHeading/>
              <NextVideo videos={filteredVideos}/>
            </section>
          </section>
        </>
      )
    }
}

export default HomePage;