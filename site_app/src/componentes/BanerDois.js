import Style from '../componentes/BanerDois.module.css'
import BanerrDois from '../img/banerdois.jpg'


function BanerDois (){
    return (
        <main>
             <img src={BanerrDois} className={Style.ban} alt="Logo" />
        </main>
      );
}
export default BanerDois;