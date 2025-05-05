import {Link} from "react-router-dom"

function Header()
{

    return(
        <div>
            {/* <h2>Header</h2> */}

            <Link to='/home'>Home</Link> &nbsp;
            <Link to='/about'>About</Link> &nbsp;
            <Link to='/contact'>Contact</Link> &nbsp;
            <Link to='/login'>Login</Link> &nbsp;
           
        </div>
    )
}
export default Header;