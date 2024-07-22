import '../Styles/Footer.css'

export default function Footer() {
    const year = new Date();
    return (
        <div className="footer">
            <p>Designed by Simon Ehrlich Copyright © {year.getFullYear()}</p>
        </div>
    )
}