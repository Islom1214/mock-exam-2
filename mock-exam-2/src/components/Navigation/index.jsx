import "./style.scss"
import { Link, Outlet } from "react-router-dom";

import Footer from "../Footer"

function Navigation() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="logo">
                    <h2>
                        <Link to={"/"}>
                            <h3><b>Logo</b></h3>
                        </Link>
                    </h2>
                </div>

                <div className="menu">
                    <div className="nav-links">
                        <Link to={"/about"}>About</Link>
                        <Link to={"/products"}>Product</Link>
                        <Link to={"/blog"}>Catagory</Link>
                        <Link to={"/teams"}>Teams</Link>
                    </div>

                    <div className="auth">
                        <button>
                            Войти
                        </button>
                        <a href="/#Рус">Рус</a>
                    </div>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Navigation;