import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";
export const ProductList = ({ productList, cartList, setCartList}) => {
   return (
      <>
      <div className="container">

         <ul className={style.ul}> 
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} cartList={cartList} setCartList={setCartList} />
               ))}
         </ul>
      </div>
      </>
   );
};
