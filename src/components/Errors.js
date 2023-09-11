import './Errors.css';

function Errors ({ message }) {
    return(
        <div className="errorBox">
            <h2>Something went wrong!</h2>
            {message}
            <ul>
                <li> Try using different browser. </li>
                <li> If the error continues, inform the developer. </li>
            </ul>
        </div>
    );
}

export default Errors;