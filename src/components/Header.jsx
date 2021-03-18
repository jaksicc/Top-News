import { Link } from "react-router-dom"


const Header = ({setCountry}) => {
    return (
        <header className='header'>
            <h1>Top News</h1>
            <nav>
                <ul className='list-items'>
                    <li>
                        <Link to='/topnews'>Top News</Link>
                    </li>
                    <li>
                        <Link to='/categories'>Categories</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                </ul>
                <div className='buttons'>
                <button onClick={()=>setCountry('gb')}>GB</button>
                <button onClick={()=>setCountry('us')}>US</button>
                </div>
            </nav>
        </header>
    )
}

export default Header