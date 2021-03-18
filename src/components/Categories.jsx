import NewsContainer from "./NewsContainer/NewsContainer"


const Categories = ({ country }) => {

    // const placeholder = 'https://via.placeholder.com/400x260'
    // const [businessheadlines, setBusinessHeadlines] = useState([])
    // const [entertainmentheadlines, setEntertainmentHeadlines] = useState([])
    // const [generalheadlines, setGeneralHeadlines] = useState([])
    // const [healthheadlines, setHealthHeadlines] = useState([])
    // const [scienceheadlines, setScienceHeadlines] = useState([])
    // const [sportsheadlines, setSportsHeadlines] = useState([])
    // const [techonlogyheadlines, setTechnologyHeadlines] = useState([])

    // useEffect(() => {
    //     getBusinessHeadlines(country).then(res => {
    //         setBusinessHeadlines(res.data.articles)
    //     })
    //     getEntertainmentHeadlines(country).then(res => {
    //         setEntertainmentHeadlines(res.data.articles)
    //     })
    //     getGeneralHeadlines(country).then(res => {
    //         setGeneralHeadlines(res.data.articles)
    //     })
    //     getHealthHeadlines(country).then(res => {
    //         setHealthHeadlines(res.data.articles)
    //     })
    //     getScienceHeadlines(country).then(res => {
    //         setScienceHeadlines(res.data.articles)
    //     })
    //     getSportsHeadlines(country).then(res => {
    //         setSportsHeadlines(res.data.articles)
    //     })
    //     getTechnologyHeadlines(country).then(res => {
    //         setTechnologyHeadlines(res.data.articles)
    //     })
    // }, [country])

    return (
        <div>
            {/* <div className='news-container'>
                <h1>Business</h1>
                {businessheadlines.map(businessheadline => <NewsThumbnail title={businessheadline.title} 
                                                                            image={businessheadline.urlToImage} 
                                                                            content={businessheadline.content} 
                                                                            description={businessheadline.description} />).slice(0, 5)}
            </div> */}
            <NewsContainer country={country} category='business'/>
                      </div>

       
    )
}

export default Categories