import Item from '../Item/Item.jsx';
import  ItemList  from '../Itemlist/ItemList.jsx';
import UseProducts from '../../hooks/useproducts.js';
import Loading from '../Loading/Loading.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();
  const {products, loading} = UseProducts(category);

  return (
    <div className="item-list-container">
       {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;