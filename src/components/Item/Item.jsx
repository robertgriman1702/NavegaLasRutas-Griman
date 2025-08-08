import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div key={product.id} className="item">
            <img src={product.image} alt={product.name} />
            <div className='item-container'>
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
                <Link to={`/detail/${product.id}`} className="item-detail-link">
                    <h2>Detalles</h2>
                </Link>
            </div>
            
        </div>
    )
}

export default Item;