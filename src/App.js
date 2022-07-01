import React from 'react';
import './App.scss'
import Header from '../src/components/Header/Header';
import MainVideo from '../src/components/MainVideo/MainVideo';
import MainVideoData from '../src/components/MainVideoData/MainVideoData';
import Form from '../src/components/Form/Form';
import Comments from '../src/components/Comments/Comments';
import NextVideos from '../src/components/NextVideos/NextVideos';



class App extends React.Component {
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

export default App;
