import { Link } from "react-router-dom";

export const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <br/>
            <p>The required page cannot be found</p>
            <br/>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}