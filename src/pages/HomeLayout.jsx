import { Link } from "react-router-dom";

const HomeLayout=()=>{
    return (
        <div>
            <h1>This Homepage is being opened through the file</h1>
            <h2>Sorry, through the external file</h2>
            <Link to='/landing'>Landing Page</Link>
            <Link to='/login'>Login Page</Link>
            <Link to='/register'>Register Page</Link>
            <Link to='/dashboard'>Dashboard Page</Link>
        </div>
    )
}

export default HomeLayout;
