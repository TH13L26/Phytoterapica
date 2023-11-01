import Styles from './OVegetais.module.css'
import Props from "../Props/Props";
import Ban from '../../img/Vegetais.png'
import img0 from '../../img/vegetais/abacate.jpg'
import img1 from '../../img/vegetais/amendoa-doce.jpg'
import img2 from '../../img/vegetais/camomila.jpg'
import img3 from '../../img/vegetais/copaiba.jpg'
import img4 from '../../img/vegetais/girassol.jpg'
import img5 from '../../img/vegetais/jojoba.jpg'
import img6 from '../../img/vegetais/maracuja.jpg'
import img7 from '../../img/vegetais/rosa-mosqueta.jpg'
import img8 from '../../img/vegetais/rosamosqueta.jpg'
import img9 from '../../img/vegetais/semente-de-uva.jpg'
import img10 from '../../img/vegetais/uva.jpg'





function OVegetais({img, titulo, preco}) {
    return (
      <main>

            <img src={Ban} className={Styles.banerr} alt="baner" />
            
            

            <section className={Styles.caixa}>
               <Props img={img0}
               titulo='Abacate'
               preco='50,00'>
               </Props>

               <Props img={img1}
               titulo='Amendoa Doce'
               preco='50,00'>
               </Props>

               <Props img={img2}
               titulo='Camomila'
               preco='50,00'>
               </Props>

               <Props img={img3}
               titulo='Copaíba'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img4}
               titulo='Girassol'
               preco='50,00'>
               </Props>

               <Props img={img5}
               titulo='Jojoba'
               preco='50,00'>
               </Props>

               <Props img={img6}
               titulo='Maracuja'
               preco='50,00'>
               </Props>

               <Props img={img7}
               titulo='Rosa Mosqueta'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img8}
               titulo='Rosa Mosqueta'
               preco='50,00'>
               </Props>

               <Props img={img9}
               titulo='Semente de Uva'
               preco='50,00'>
               </Props>

               <Props img={img10}
               titulo='Uva'
               preco='50,00'>
               </Props>
               
            </section>
            

            
      </main>
    );
  }
  
  export default OVegetais;