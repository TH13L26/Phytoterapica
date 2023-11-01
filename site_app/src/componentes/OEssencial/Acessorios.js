import Styles from './Aromatizadores.module.css'
import Props from "../Props/Props";
import Ban from '../../img/acessorios.png'
import img0 from '../../img/acessorios/bolsa.jpg'
import img1 from '../../img/acessorios/caixa-branca.jpg'
import img2 from '../../img/acessorios/caixa-preta-frente.jpg'
import img3 from '../../img/acessorios/caixa-preta.jpg'
import img4 from '../../img/acessorios/caixa.jpg'
import img5 from '../../img/acessorios/creme.jpg'
import img6 from '../../img/acessorios/nescesser.jpg'
import img7 from '../../img/acessorios/refil.jpg'
import img8 from '../../img/acessorios/saco-amarelo.jpg'
import img9 from '../../img/acessorios/sacola-amarela.jpg'
import img10 from '../../img/acessorios/sacola.png'







function Acessorios({img, titulo, preco}) {
    return (
      <main>

            <img src={Ban} className={Styles.banerr} alt="baner" />
            
            

            <section className={Styles.caixa}>
               <Props img={img0}
               titulo='Bolsa Phytoterápica'
               preco='50,00'>
               </Props>

               <Props img={img1}
               titulo='Caixa de Madeira - Sem Alça'
               preco='50,00'>
               </Props>

               <Props img={img2}
               titulo='Caixa de Madeira - Com Alça '
               preco='50,00'>
               </Props>

               <Props img={img3}
               titulo='Caixa de Madeira - Sem Alça 35'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img4}
               titulo='Caixa de Madeira - Sem Alça 12'
               preco='50,00'>
               </Props>

               <Props img={img5}
               titulo='Caixa Presenteável Porta-Óleos Essenciais'
               preco='50,00'>
               </Props>

               <Props img={img6}
               titulo='Nécessaire Costela de Adão'
               preco='50,00'>
               </Props>

               <Props img={img7}
               titulo='Válvula Para Frasco de 500ml'
               preco='50,00'>
               </Props>
               
            </section>

            <section className={Styles.caixa}>
               <Props img={img8}
               titulo='Sacola Alça Vazada'
               preco='50,00'>
               </Props>

               <Props img={img9}
               titulo='Sacola Amarela'
               preco='50,00'>
               </Props>

               <Props img={img10}
               titulo='Sacola Roxa'
               preco='50,00'>
               </Props>               
            </section>

           
            

            
      </main>
    );
  }
  
  export default Acessorios;