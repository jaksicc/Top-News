import { useEffect, useState } from "react"
import { getTopHeadlines } from "../service"
import OneNews from "./OneNews"


const TopNews = ({ country }) => {


    useEffect(() => {
        getTopHeadlines(country).then(res => {
            setTopHeadlines(res.data.articles)
        })
    }, [country])

    const [topheadlines, setTopHeadlines] = useState([])

    return (
        <div className='news-container'>
            {country === 'gb' ?
                <h1>Top news from Great Britain</h1>
                :
                <h1>Top news from United States</h1>
            }
            {topheadlines.map(headline => 
            <OneNews title={headline.title} image={headline.urlToImage} description={headline.description} content={headline.content} key={headline.title} />)}
        </div>
    )
}
export default TopNews



