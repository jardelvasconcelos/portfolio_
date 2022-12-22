import './footer.css';

export default function Footer() {
    return (
        <footer id="contatos">
            <div className="footer-container">
                <div className="footer-container-item">
                    <a href="https://wa.me/5541984360158" target="_blank">
                        <img src="assets/img/footer/whats_logo.png" alt=""
                            className="logo_footer" /></a>
                    <a href="mailto:tecjardelv@gmail.com" target="_blank">
                        <img src="assets/img/footer/gmail_logo.png" alt=""
                            className="logo_footer" /></a>
                    <a href="https://www.linkedin.com/in/newjardel-vasconcelos" target="_blank">
                        <img
                            src="assets/img/footer/linkedin_logo.png" alt="" className="logo_footer" /></a>
                    <a href="https://github.com/jardelvasconcelos" target="_blank">
                        <img src="assets/img/footer/github_logo.png" alt=""
                            className="logo_footer" /></a>
                </div>
                <div className="footer-container-item">
                    <p className="footer-credit">Jardel Vasconcelos</p>
                </div>
            </div>
        </footer>
    )
}