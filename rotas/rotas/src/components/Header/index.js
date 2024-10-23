import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h2>Milena</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/produtos'>Produtos</Link>  {/* Novo link para Produtos */}
            </div>
        </header>
    );
}

export default Header;