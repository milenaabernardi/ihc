import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h1>Erro 404</h1>
            <p>Desculpe, esta página não existe.</p>
            
            <Link to='/'>Voltar para a Home</Link>
        </div>
    );
}

export default Erro;
