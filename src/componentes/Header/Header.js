import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-bg"></div>
                <h1 className="header-title">Equipos de Trabajo</h1>
                <img src="/img/header.png" alt='Org' className="header-img" />
            </div>
        </header>
    );
}

export default Header;
