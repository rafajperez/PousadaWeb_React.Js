import styles from './About.module.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img5 from '../assets/img5.jpg';

const About = () => {
  return (
    <div className={`${styles.tamanhoMaximoContainer} ${styles.secaoContainer} ${styles.containerDescricao}`}>
      <h1> <span className={styles.spanAbout}>SOBRE A POUSADA</span></h1>
      <h3>Conheça um pouco sobre a nossa pousada!</h3>
      <div className={`${styles.tamanhoMaximoContainer} ${styles.descricoes}`}>
        <div className={styles.descricao}>
          <div className={styles.descricaoConteudo}>
            <h3>A Pousada</h3>
            <p>A Pousada Dev dispõe de estacionamento privativo gratuito, piscina ao ar livre e bar.</p>
          </div>
          <img className={styles.descricaoImg} src={img1} alt="Faixada" title="Faixada" /></div>
        <div className={styles.descricao}>
          <div className={styles.descricaoConteudo}>
            <h3>Nossos Quartos
            </h3>
            <p>Os quartos possuem TV de tela plana a cabo, cozinha compacta e área para refeições. Além disso, as unidades da Pousada Dev contam com ar-condicionado e guarda-roupa.
            </p>
          </div>
          <img className={styles.descricaoImg} src={img2} alt="Quartos" title="Quartos" />
        </div>
        <div className={styles.descricao}>
          <div className={styles.descricaoConteudo}>
            <h3>Alimentação
            </h3>
            <p> A pousada serve café da manhã em estilo continental ou buffet. Nossos restaurantes funcionam 24hrs.
            </p>
          </div>
          <img className={styles.descricaoImg} src={img3} alt="Restaurante" title="Restaurante" />
        </div>
        <div className={styles.descricao}>
          <div className={styles.descricaoConteudo}>
            <h3>Recepção
            </h3>
            <p>Nossa recepção fica aberta 24h</p>
          </div>
          <img className={styles.descricaoImg} src={img5} alt="Recepção" title="Recepção" />
        </div>
      </div>
    </div>
  )
}

export default About;