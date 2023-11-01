import Styles from './Aromatizadores.module.css'
import Props from "../Props/Props";
import Ban from '../../img/Aromatizadores.png'
import img0 from '../../img/aromatizadores/aroma-caixa.jpg'
import img1 from '../../img/aromatizadores/aromatizador.jpg'
import img2 from '../../img/aromatizadores/colar-azul.jpg'
import img3 from '../../img/aromatizadores/colar-bola-azul.jpg'
import img4 from '../../img/aromatizadores/colar-bola.jpg'
import img5 from '../../img/aromatizadores/colar-rosa.jpg'
import img6 from '../../img/aromatizadores/tomada.jpg'






function Aromatizadores({img, titulo, preco}) {
    return (
      <main>

            <img src={Ban} className={Styles.banerr} alt="baner" />
            
            

            <section className={Styles.caixa}>
               <Props img={img0}
               titulo='Kit Miniaturas Sabonetes Vegetais'
               preco='50,00'>
               </Props>

               <Props img={img1}
               titulo='Gel Dental Sangue de Dragão'
               preco='50,00'>
               </Props>

               <Props img={img2}
               titulo='Enxaguante Bucal Herbal - 250ml'
               preco='50,00'>
               </Props>

               <Props img={img3}
               titulo='Creme Dental Herbal Adulto - 80g'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img4}
               titulo='Gel Dental Herbal Infantil'
               preco='50,00'>
               </Props>

               <Props img={img5}
               titulo='Lemoagrass Abacate'
               preco='50,00'>
               </Props>

               <Props img={img6}
               titulo='Sabonete Menta'
               preco='50,00'>
               </Props>
               
            </section>

           
            

            
      </main>
    );
  }
  
  export default Aromatizadores;