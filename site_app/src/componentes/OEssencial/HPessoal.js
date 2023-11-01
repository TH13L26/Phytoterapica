import Styles from './HPessoal.module.css'
import Props from "../Props/Props";
import Ban from '../../img/HigieneP.png'
import img0 from '../../img/pessoal/caixa.jpg'
import img1 from '../../img/pessoal/creme-sangue.jpg'
import img2 from '../../img/pessoal/creme.jpg'
import img3 from '../../img/pessoal/dente.jpg'
import img4 from '../../img/pessoal/gel.jpg'
import img5 from '../../img/pessoal/sabao-abacate.jpg'
import img6 from '../../img/pessoal/sabao-menta.jpg'
import img7 from '../../img/pessoal/sabao-roxo.jpg'
import img8 from '../../img/pessoal/sabao-verd.jpg'
import img9 from '../../img/pessoal/sabao.jpg'
import img10 from '../../img/pessoal/sabonete.jpg'






function HPessoal({img, titulo, preco}) {
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

               <Props img={img7}
               titulo='Sabonete Lavanda'
               preco='50,00'>
               </Props>
            </section>

            <section className={Styles.caixa}>
               <Props img={img8}
               titulo='Melaluca Gergilim'
               preco='50,00'>
               </Props>

               <Props img={img9}
               titulo='Limão Siciliano'
               preco='50,00'>
               </Props>

               <Props img={img10}
               titulo='Ylang Ylang'
               preco='50,00'>
               </Props>
               
            </section>
            

            
      </main>
    );
  }
  
  export default HPessoal;