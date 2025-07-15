import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div key={product.id} className="item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <Link to={"/detail/" + product.id}>
                <p>Detalle</p>
            </Link>
            
        </div>
    )
}

export default Item;