import { Header } from "../Header"

export const DefaultTemplate = ({children, setVisible, visible, cartList}) =>{
    return (
        <>
            <Header setVisible={setVisible} visible={visible} cartList={cartList} />
            <main>
                {children}
            </main>
        </>
    )
}