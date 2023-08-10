import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { ProductList } from "../../components/ProductList";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { api } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const savedCartList = JSON.parse(localStorage.getItem('@humburgueriaKenzie'))
   const [cartList, setCartList] = useState([]);
   const [visible, setVisible] = useState(false)
   
   useEffect(()=>{   
      setCartList(savedCartList)
      
      const getProducts = async () =>{
         const {data} = await api.get()
         setProductList(data)
      }
      getProducts()
   },[])


   useEffect(()=>{
      const saveLocalStorageCartList = () =>{
         localStorage.setItem('@humburgueriaKenzie', JSON.stringify(cartList))
      } 
      saveLocalStorageCartList()
   },[cartList])
   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <DefaultTemplate setVisible={setVisible} visible={visible} cartList={cartList}>
            <ProductList productList={productList} cartList={cartList} setCartList={setCartList}/>
            {visible ? <CartModal setVisible={setVisible} cartList={cartList} setCartList={setCartList} /> : null}
      </DefaultTemplate>
   );
};
