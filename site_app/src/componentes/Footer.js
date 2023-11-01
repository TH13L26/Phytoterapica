import Style from '../componentes/Footer.module.css'
import Logo from '../img/logo.jpeg'

function Footer(){
    return (
        <main>
             {/* <img src={Logo} className={Style.logo} alt="Logo" /> */}
                <footer>
                    <div className={Style.news}>
                        <section className={Style.tnew}>
                            <h2>Iscreva-se
                                <br />
                                E RECEBA NOVIDADES E PROMOÇÕS
                            </h2>
                            <h></h>
                        </section>
                        <form className={Style.neews}>
                            <input type='email' placeholder='Informe seu E-mail' className={Style.email}></input>
                            <input type='submit' value='ASSINAR NEWSLETTER' className={Style.enviar}/>
                        </form>
                    </div>
                    <section className={Style.textf}>
                    <div className={Style.trod}>
                        <li>ÓLEO ESSENCIAIS</li>
                        <li>ÓLEOS VEGETAIS</li>
                        <li>SINERGIAS</li>
                        <li>COSMÉTICOS NATURAIS</li>
                        <li>HIGIENE PESSOAL</li>
                        y
                    </div>

                    <div className={Style.trod}>
                        <li>Política de Entrega</li>
                        <li>Política de troca de devolução</li>
                        <li>Ingestão de óleos essenciais</li>
                        <li>Cramatografia</li>
                        <li>Encarregado de dados - JKD ME</li>
                    </div>

                    <div className={Style.trod}>
                        <li>Login</li>
                        <li>Carrinho</li>
                        <li>Minha Conta</li>
                        <li>COSMÉTICOS NATURAIS</li>
                        <li>Meus Pedidos</li>
                    </div>

                    <div className={Style.trod}>
                    <img src={Logo} className={Style.logo} alt="Logo" />
                    </div>
                </section>

                </footer>
                
        </main>
      );
}
export default Footer;