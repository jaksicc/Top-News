import { Link } from 'react-router-dom'
import './style.scss'

const NewsThumbnail = ({ title, image, description, content }) => {
    const placeholder = 'https://via.placeholder.com/400x260'
        return (
        

        <div className='news-thumbnail'>
            <p className='headline-title'>{title}</p>
            <img className='news-image' src={image || placeholder} alt={`${title}`} />
            <p className='headline-description'>{description}</p>
            <Link to={{
                pathname: '/article',
                state: { title, content, image }
            }}  >More</Link>

        </div>


    )
}

export default NewsThumbnail