import axios from 'axios'

export const getTopHeadlines = (country) =>{
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getBusinessHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getEntertainmentHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getGeneralHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getHealthHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getScienceHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getSportsHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getTechnologyHeadlines = (country) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${process.env.REACT_APP_KEY}`)
}

export const getCategoryNews = (country,category) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&category=${category}&apiKey=${process.env.REACT_APP_KEY}`)
}

