import axios from 'axios'

export const getTopHeadlines = (country) =>{
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=9cc70607254847cf86f55823951f9b29`)
}