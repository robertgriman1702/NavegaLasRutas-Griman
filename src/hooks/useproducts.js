import { useEffect, useState } from "react";
import { collection, getDocs, query, where} from "firebase/firestore";
import db from "../db/Db.js"; 

const UseProducts = (category) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const dataDb = await getDocs(collection(db, "products"));
            
            const data = dataDb.docs.map((productDb) => {
                return {
                    id: productDb.id, ...productDb.data(),
                };
            });
            setProducts(data);
            setLoading(false);
            
        } catch (error) {   
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    }

    const getProductsByCategory = async () => {
        try {
            const q = query(collection(db, "products"), where("category", "==", category));
            const dataDb = await getDocs(q);

            const data = dataDb.docs.map((productDb) => {
                return {
                    id: productDb.id, ...productDb.data(),
                };
            })

            setProducts(data);
            setLoading(false);


        } catch (error) {
            console.error("Error fetching products by category:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(category){
            getProductsByCategory(category);
        }else {
            getProducts();
        }
        
    }, [category]);

    return {products, loading};
}

export default UseProducts;