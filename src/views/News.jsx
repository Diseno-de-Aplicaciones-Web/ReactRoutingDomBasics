import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const newsMockup = {
    123: "Mira que cosa",
    543: "Anda, mira tú",
    654: "Fin de la guerra en Rusia"
}

function News () {

    const params = useParams();
    const navigate = useNavigate();

    const [ currentNews, setCurrenNews ] = useState("");

    useEffect(
        ()=>{
            if ( ! params.id ) {
                const newsArray = Object.values(newsMockup);
                const newsHTML = newsArray.map(
                    item => <p>{item}</p>
                );
                setCurrenNews(newsHTML);
            } else if (newsMockup.hasOwnProperty(params.id)) {
                setCurrenNews(newsMockup[params.id]);
            } else {
                navigate("/");
            }
        },
        []
    )



    return (
        <>
            <h1>News</h1>
            <p>Noticia: {currentNews}</p>
        </>

    )
}

export default News