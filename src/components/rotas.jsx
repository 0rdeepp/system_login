import {BrowserRouter, Route, Routes} from 'react-router-dom'

import App from '../paginas/Home/App';
import Cadastro from '../paginas/Login/Cadastro'
import Home from '../paginas/Home/Home';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element= {<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas