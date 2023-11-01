import Styles from './CNaturais.module.css'
import Props from "../Props/Props";
import Ban from '../../img/Cosmeticos.png'
import img0 from '../../img/naturais/alce.jpg'
import img1 from '../../img/naturais/amarela.jpg'
import img2 from '../../img/naturais/branca.jpg'
import img3 from '../../img/naturais/creme.jpg'
import img4 from '../../img/naturais/hil.jpg'
import img5 from '../../img/naturais/lemongras.jpg'
import img6 from '../../img/naturais/melaleuca.jpg'
import img7 from '../../img/naturais/preta.jpg'
import img8 from '../../img/naturais/sangue.jpg'
import img9 from '../../img/naturais/true.jpg'
import img10 from '../../img/naturais/verde.jpg'
import img11 from '../../img/naturais/vermelha.jpg'





function CNaturais({img, titulo, preco}) {
    return (
      <main>

            <img src={Ban} className={Styles.banerr} alt="baner" />
            
            

            <section className={Styles.caixa}>
               <Props img={img0}
               titulo='Estrato de aloe vera'
               preco='50,00'>
               </Props>

               <Props img={img1}
               titulo='Argila amarela'
               preco='50,00'>
               </Props>

               <Props img={img2}
               titulo='Argila branca'
               preco='50,00'>
               </Props>

               <Props img={img3}
               titulo='Creme neutro'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img4}
               titulo='Desodorante vegano'
               preco='50,00'>
               </Props>

               <Props img={img5}
               titulo='Lemoagrass'
               preco='50,00'>
               </Props>

               <Props img={img6}
               titulo='Melaleuca'
               preco='50,00'>
               </Props>

               <Props img={img7}
               titulo='Argila preta'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img8}
               titulo='Sangue de boi'
               preco='50,00'>
               </Props>

               <Props img={img9}
               titulo='Desodorante vegano spray'
               preco='50,00'>
               </Props>

               <Props img={img10}
               titulo='Argila verde'
               preco='50,00'>
               </Props>

               <Props img={img11}
               titulo='Argila vermelha'
               preco='50,00'>
               </Props>
               
            </section>
            

            
      </main>
    );
  }
  
  export default CNaturais;