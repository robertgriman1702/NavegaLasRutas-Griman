import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useproduct";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const { productId } = useParams(); 
    const { product, loading } = useProduct((productId)); 

    return (
        <div>
            {
            loading ? <Loading/> : <ItemDetail product = { product } /> 
            }
        </div>
    )
}

export default ItemDetailContainer