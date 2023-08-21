import endereco from '../assets/icones/endereco.png';
import telefone from '../assets/icones/telefone.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.rodape}>
      <div className={`${styles.tamanhoMaximoContainer} ${styles.rodapecontainer}`}>
        <div className={styles.rodapeInfo}>
          <h4>Entre em contato conosco:</h4>
        </div>
        <img className={styles.rodapeIconeEnd} src={endereco} alt="Endereço" title="Endereço" />
        <p className={styles.pRodape}>Endereço:  Av. 123, 222 - Rio de Janeiro RJ</p>
        <div className={styles.rodapeInfo}>
          <img className={styles.rodapeIcone} src={telefone} alt="Telefone" title="Telefone" />
          <p> Cel: +55(21)00000-0000</p>
        </div>
        <div className={styles.rodapeCopyright}> © Copyright - PousadaDev
        </div>
      </div>
    </div>
  )
}

export default Footer;