import { Link } from 'react-router-dom';

function Produtos() {
    return (
        <div>
            <h1>Bem-vindo à página de Produtos</h1>
            <p>Aqui você encontra uma lista dos nossos produtos!</p>

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
        </div>
    );
}

export default Produtos;
