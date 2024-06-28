import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/fotografoguillermotopp/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/Guillermotopp/'>
                <img src="/img/github.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/guillermotopp/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>&copy; Guillermo Topp</strong>
    </footer>
}

export default Footer