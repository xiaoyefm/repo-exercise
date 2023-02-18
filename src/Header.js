import Nav from "./Nav"


export default function Header(){
    const imageg = "/Assets/HomeLogo.png"
    return (
        <header>
            <img src={imageg} className="lemonLogo" alt="Little lemon logo" />
            <Nav />
        </header>
    )
}