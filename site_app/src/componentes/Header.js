import {Link} from 'react-router-dom'

import Style from '../componentes/Header.module.css'
import Logo from '../img/logo.jpeg'

function Header(){
    return (
        <main>
            <header className={Style.container}>
                <Link to='/'><img src={Logo} className={Style.logo} alt="Logo" /></Link>
                <nav className={Style.menu}>
                    <ul>
                        <li><Link to='/OEssenciais' className={Style.linha}>ÓLEO ESSENCIAIS</Link></li>
                        <li><Link to='/OVegetais' className={Style.linha}>ÓLEOS VEGETAIS</Link></li>
                        <li><Link to='/Sinergia' className={Style.linha}>SINERGIAS</Link></li>
                        <li><Link to='/CNaturais' className={Style.linha}>COSMÉTICOS NATURAIS</Link></li>
                        <li><Link to='/HPessoal' className={Style.linha}>HIGIENE PESSOAL</Link></li>
                        <li><Link to='/Aromatizadores' className={Style.linha}>AROMATIZADORES</Link></li>
                        <li><Link to='/Acessorios' className={Style.linha}>ACESSÓRIOS</Link></li>
                        <li>OFERTAS</li>
                        <li>CONSULTORIA(A)</li>
                    </ul>
                </nav>
            </header>

    
        </main>
      );
}

export default Header;