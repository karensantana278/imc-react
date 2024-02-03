import './Header.css';


export default function Header(){
    return(
        <header className="navbar shadow">
        <div className="container-fluid">
            <a className="navbar-brand " href="#">
            <img className="logo" src={'/imc.png'} alt="IMC logo" />
                <span>IMC Calculator</span> 
            </a>
        </div>
    </header>
    ) 
}
