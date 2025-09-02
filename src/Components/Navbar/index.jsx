let style = {
    cursor : "pointer"
}


const NavBar = (props) => {

    const {setCategory} = props;

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark p-2">NewsBuzz</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
                <li className="nav-item">
                    <div className="nav-link" style={style} onClick={() => setCategory("Technology")}>Technology</div>
                </li>

                <li className="nav-item">
                    <div className="nav-link" style={style} onClick={() => setCategory("Business")}>Business</div>
                </li>

                <li className="nav-item">
                    <div className="nav-link" style={style} onClick={() => setCategory("Health")}>Health</div>
                </li>

                <li className="nav-item">
                    <div className="nav-link" style={style} onClick={() => setCategory("Sports")}>Sports</div>
                </li>

                <li className="nav-item">
                    <div className="nav-link" style={style} onClick={() => setCategory("Entertainment")}>Entertainment</div>
                </li>
            
            </ul>
        </div>
        </nav>

    )

}

export default NavBar;