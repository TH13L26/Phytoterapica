import Style from '../Props/Props.module.css'

function Props({img, img2, titulo, preco}) {
    return (

      <main>
            
            <section className={Style.Lado}>
            <div className={Style.prod}>
                <img src={img} className={Style.oleozin} alt="Logo" />
                <h4>{titulo}</h4>
                <p>R$: {preco} <br />
                (ou em até 3x de R$: 16,66 sem juros)</p>
            </div>
            </section>
      </main>
    );
  }
  
  export default Props;