import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.tamanhoMaxContainer} >
      <div className={styles.tituloSite}>
        <div className={styles.tituloSiteDes}>
          <h1>A Pousada Secreta</h1>
          <p>A pousada reservada em Angra dos Reis</p>
        </div>
      </div>
    </div>
  )
}

export default Home;