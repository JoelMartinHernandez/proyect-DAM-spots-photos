import "./header.css";

function Header() {
    return (
        <div className="TitleLogo">
            <h1>Canary Photos</h1>
            <div className="buttons">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Spots">Spots</a></li>
                    <li><a href="/Credits">Credits</a></li>
                </ul>
            </div>
        </div>

    );
}

export default Header;