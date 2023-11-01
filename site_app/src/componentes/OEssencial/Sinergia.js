import Styles from './Sinergia.module.css'
import Props from "../Props/Props";
import Ban from '../../img/Sinergias.png'
import img0 from '../../img/sinergias/Citrinos.jpg'
import img1 from '../../img/sinergias/defense.jpg'
import img2 from '../../img/sinergias/equilibrium.jpg'
import img3 from '../../img/sinergias/focalize.jpg'
import img4 from '../../img/sinergias/harmonize.jpg'
import img5 from '../../img/sinergias/Inspire-enfance.jpg'
import img6 from '../../img/sinergias/inspire.jpg'
import img7 from '../../img/sinergias/kapha.jpg'
import img8 from '../../img/sinergias/mouvement.jpg'
import img9 from '../../img/sinergias/pitta.jpg'
import img10 from '../../img/sinergias/relax.jpg'
import img11 from '../../img/sinergias/vata.jpg'





function Sinergia({img, titulo, preco}) {
    return (
      <main>

            <img src={Ban} className={Styles.banerr} alt="baner" />
            
            

            <section className={Styles.caixa}>
               <Props img={img0}
               titulo='Citrinos'
               preco='50,00'>
               </Props>

               <Props img={img1}
               titulo='Defense'
               preco='50,00'>
               </Props>

               <Props img={img2}
               titulo='Equilibrium'
               preco='50,00'>
               </Props>

               <Props img={img3}
               titulo='Focalize'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img4}
               titulo='Harmonize'
               preco='50,00'>
               </Props>

               <Props img={img5}
               titulo='Inpire Enfase'
               preco='50,00'>
               </Props>

               <Props img={img6}
               titulo='Alivio'
               preco='50,00'>
               </Props>

               <Props img={img7}
               titulo='Kapha'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img8}
               titulo='Leveza e fluidez'
               preco='50,00'>
               </Props>

               <Props img={img9}
               titulo='Pitta'
               preco='50,00'>
               </Props>

               <Props img={img10}
               titulo='Relax'
               preco='50,00'>
               </Props>

               <Props img={img11}
               titulo='Vata'
               preco='50,00'>
               </Props>
               
            </section>
            

            
      </main>
    );
  }
  
  export default Sinergia;