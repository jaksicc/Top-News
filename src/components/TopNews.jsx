import { useEffect, useState } from "react"
import { getTopHeadlines } from "../service"

const TopNews = ({country}) => {

    const [topheadlines, setTopHeadlines] = useState([])

    useEffect(()=>{
        getTopHeadlines(country).then(res => {
            setTopHeadlines(res.data.articles)
        })
    },[country])
    return (
        <div className='news-container'>
            {topheadlines.map(headline => <div key={headline.title} className='news-thumbnail'>
                <p>{headline.title}</p>
                <img src={`${headline.urlToImage}`} alt="" width={500}/>
                <p>{headline.description}</p>
            </div> )}
        </div>
    )
}

export default TopNews



