import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Bem-vindo à página Contato</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Home</Link>
        </div>
    );
}

export default Contato;