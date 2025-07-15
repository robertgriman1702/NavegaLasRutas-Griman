import Item from '../Item/Item.jsx';
import './itemlist.css';
import HocFilterProducts from '../Hoc/HocFilterProdcuts.jsx';

const  ItemList = ({products}) => {
  return (
    <div className="item-list">
        {  
          products.map((product) => (
          <Item product = {product} key={product.id}/>
        ))        
       }
    </div>
  );
}

const ItemListWithSearch = HocFilterProducts(ItemList);

export { ItemList, ItemListWithSearch };