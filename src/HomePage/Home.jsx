import React from 'react'
import Main from '../component/Main'
import Scrol from '../component/Scrol'
import requests from '../Requests'

function Home() {
  return (
    <>
      <Main />
      <Scrol rowID='1' title="Popular" fetchURL={requests.requestPopular} />
       <Scrol rowID='2' title="Top Rated" fetchURL={requests.requestTopRated} />
        <Scrol rowID='3' title="UpComing" fetchURL={requests.requestUpcoming} />
        <Scrol rowID='4' title="Trending" fetchURL={requests.requestTrending} />
        <Scrol rowID='5' title="Horror" fetchURL={requests.requestHorror} />

   </>
    
  )
}

export default Home