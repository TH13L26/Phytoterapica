import Styles from './OEssenciais.module.css'
import Props from "../Props/Props";
import Ban from '../../img/boe.png'
import img0 from '../../img/essenciais/alecrim.jpg'
import img1 from '../../img/essenciais/bergamota.jpg'
import img2 from '../../img/essenciais/copaiba.jpg'
import img3 from '../../img/essenciais/eucalipto.jpg'
import img4 from '../../img/essenciais/geranio.jpg'
import img5 from '../../img/essenciais/hortela.jpg'
import img6 from '../../img/essenciais/hortelaa.jpg'
import img7 from '../../img/essenciais/lanva-rox.jpg'
import img8 from '../../img/essenciais/lavanda.jpg'
import img9 from '../../img/essenciais/limao.jpg'
import img10 from '../../img/essenciais/melaluca.jpg'
import img11 from '../../img/essenciais/sandalo.jpg'




function OEssenciais({img, titulo, preco}) {
    return (
      <main>

            <img src={Ban} className={Styles.banerr} alt="baner" />
            
            

            <section className={Styles.caixa}>
               <Props img={img0}
               titulo='Alecrim'
               preco='50,00'>
               </Props>

               <Props img={img1}
               titulo='Bergamota'
               preco='50,00'>
               </Props>

               <Props img={img2}
               titulo='Copaiba'
               preco='50,00'>
               </Props>

               <Props img={img3}
               titulo='Eucalipto'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img4}
               titulo='Gerânio'
               preco='50,00'>
               </Props>

               <Props img={img5}
               titulo='Hortelã-Pimenta'
               preco='50,00'>
               </Props>

               <Props img={img6}
               titulo='Patchouli'
               preco='50,00'>
               </Props>

               <Props img={img7}
               titulo='Lavanda-Bulgaria'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img8}
               titulo='Lavanda'
               preco='50,00'>
               </Props>

               <Props img={img9}
               titulo='Limão-Siciliano'
               preco='50,00'>
               </Props>

               <Props img={img10}
               titulo='Melaleuca'
               preco='50,00'>
               </Props>

               <Props img={img11}
               titulo='Sândalo Amyris'
               preco='50,00'>
               </Props>
            </section>
            

            
      </main>
    );
  }
  
  export default OEssenciais;