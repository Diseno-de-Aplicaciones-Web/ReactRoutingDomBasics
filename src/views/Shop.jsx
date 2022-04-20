import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Shop () {

    const navigate = useNavigate();

    function goHomeHandler () {
        navigate("/")
    }

    useEffect(
        ()=>{
            setTimeout(goHomeHandler, 3000)
        },
        []
    )

    return (
        <h1>Shop</h1>
    )
}

export default Shop