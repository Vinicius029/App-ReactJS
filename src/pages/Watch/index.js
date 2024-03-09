import styles from './Watch.module.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import videos from '../../json/videos.json';
import PageNotFound from '../PageNotFound';

function Watch(){
    const params = useParams()
    const video = videos.find((video) => {return video.id === params.id})
    //CASO O ID SEJA INVALIDO
    if(!video) {return <PageNotFound />}
    return(
        <>
            <Header />
            <Container>
                <div className={styles.watch}>
                    <h1>ASSISTIR FILME</h1>
                    <iframe 
                        width="854" 
                        height="420" 
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Watch;