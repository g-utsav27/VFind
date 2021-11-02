import axios from 'axios';

const KEY = 'AIzaSyAPlv6RXtbSrL716idE8sf4rCwtoBVktJA';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: KEY
        }
    }
)