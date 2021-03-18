import { useEffect, useState } from "react"
import { getCategoryNews } from "../../service"
import NewsThumbnail from "../NewsThumbnail/NewsThumbnail"

const NewsContainer = ({ country, category }) => {

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        getCategoryNews(country, category).then(res => {
            setCategoryNews(res.data.articles)
        })
    },[country,category])
    

    return (
        <div className='news-container'>
            <h1>Business</h1>
            {categoryNews?.map(businessheadline => <NewsThumbnail title={businessheadline.title}
                image={businessheadline.urlToImage}
                content={businessheadline.content}
                description={businessheadline.description} />)}
        </div>
    )
}
export default NewsContainer
