import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Bem-vindo à página Sobre</h1>

            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Home</Link>
        </div>
    );
}

export default Sobre;