import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageNotFound.module.css'
import img404 from './erro404.png'

function PageNotFound(){
    return(
        <>
         <Header />
        <section className={styles.container}>
            <h2>Ops! Conteudo não localizado!</h2>
            <img src={img404} alt="Logo de pagina não localizada"/>
        </section>
        <Footer />
        </>
       
    )
}

export default PageNotFound;