import style from  "./style.module.scss"

export const ProductCard = ({ product,cartList, setCartList }) => {
    const addCartList = () =>{
        if(!cartList.some((cart)=> cart.id === product.id)){
            let addNewProduct = [...cartList, product]
            setCartList(addNewProduct)
        }else{
        }
    }
    return(
        <>
            <li>
                <div className={style.divLogo}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div className={style.divInfo}>
                    <h3 className="title three black">{product.name}</h3>
                    <span className="title caption grey">{product.category}</span>
                    <span className="title body b-600 sucess">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                    <button className="button" onClick={()=>{addCartList()}}>Adicionar</button>
                </div>
            </li>
        </>
    )
}