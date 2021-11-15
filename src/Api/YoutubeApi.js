// import axios from 'axios'

// const KEY = 'AIzaSyCYRad2cwXgMqJS1rB5-nhwknNir9O5f10'

// export default axios.create({
//   basURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     maxResults: 5,
//     key: KEY,
//   },
// })

import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
