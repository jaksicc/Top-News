import { Link } from "react-router-dom"

const Article = ( props ) => {

    // let { title } = useParams()
    // let article = topheadlines.find(headline => headline.title === title)
    
    const {title, content, image} = props.location.state
    console.log(props)


    return (
        <div>
            <p>{title}</p>
            <img src={image} alt="" style={{ width: "500px" }}
            />
            <p>{content}</p>
            <Link to='/topnews'>Back to list</Link>
        </div>
    )
}

export default Article