import Style from '../componentes/Baner.module.css'
import Baneeer from '../img/baner.webp'
import Verde from '../img/baner-verde.png'
import Oleo from '../img/naturais/sangue.jpg'
import img2 from '../img/acessorios/bolsa.jpg'
import img3 from '../img/acessorios/caixa-branca.jpg'
import img4 from '../img/acessorios/refil.jpg'
import BanerrDois from '../img/banerdois.jpg'

function Baner(){
    return (
        <main>
             <img src={Baneeer} className={Style.baneer} alt="Logo" />
             <img src={Verde} className={Style.verdinha} alt="Logo" />
             <h2 className={Style.h2}>Destaques</h2>
            <section className={Style.Lado}>
            <div className={Style.prod}>
                <img src={Oleo} className={Style.oleozin} alt="Logo" />
                <h4>Óleo Essencial d lavanda - 10ml</h4>
                <p>R$: 50,00 <br />
                (ou em até 3x de R$: 16,66 sem juros)</p>
            </div>

            <div className={Style.prod}>
                <img src={img2} className={Style.oleozin} alt="Logo" />
                <h4>Bolsa alça simples</h4>
                <p>R$: 750,00 <br />
                (ou em até 5x de R$: 150,00 sem juros)</p>
            </div>

            <div className={Style.prod}>
                <img src={img3} className={Style.oleozin} alt="Logo" />
                <h4>Caixa Sabonetes Gocumelo</h4>
                <p>R$: 1500,00 <br />
                (ou em até 3x de R$: 500,00 sem juros)</p>
            </div>

            <div className={Style.prod}>
                <img src={img4} className={Style.oleozin} alt="Logo" />
                <h4>Refil saboneteira</h4>
                <p>R$: 30,00 <br />
                (ou em até 2x de R$: 15,00 sem juros)</p>
            </div>
            </section>
            <img src={BanerrDois} className={Style.ban} alt="Logo" />

        </main>
      );
}
export default Baner;