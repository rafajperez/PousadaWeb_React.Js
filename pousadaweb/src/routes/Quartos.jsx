import quartocasal1 from '../assets/quarto-casal1.jpg';
import quartofamilia1 from '../assets/quarto-familia1.jpg'
import quartosolteiro1 from '../assets/quarto-solteiro1.jpg'
import styles from './Quartos.module.css'
const Quartos = () => {
  return (
    <div>
      <div className={`${styles.tamanhoMaxContainer} ${styles.secaoContainer}`}>
        <h2>Seja Bem vindo(a)!</h2>
        <p>Relaxe em nossas acomodações e curta o melhor de Angra dos Reis.</p>
        <p>Temos quartos para solteiro, casal ou família.</p>
      </div>
      <div className={`${styles.quartos} ${styles.tamanhoMaxContainer}`}>
        <div className={styles.quarto}>
          <img src={quartosolteiro1} alt="Quarto de Solteiro" title="Quarto de solteiro" />
          <p>Quarto de Solteiro</p>
        </div>
        <div className={styles.quarto}>
          <img src={quartocasal1} alt="Quarto de Casal" title="Quarto de Casal" />
          <p>Quarto de Casal</p>
        </div>
        <div className={styles.quarto}>
          <img src={quartofamilia1} alt="Quarto de Familia" title="Quarto de família" />
          <p>Quartos de Familia</p>
        </div>
      </div>
    </div>
  );
};

export default Quartos;