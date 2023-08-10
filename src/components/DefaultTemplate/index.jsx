import { Header } from "../Header"

export const DefaultTemplate = ({children, setVisible, visible, cartList, search, setSearch}) =>{
    return (
        <>
            <Header setVisible={setVisible} visible={visible} cartList={cartList} search={search} setSearch={setSearch} />
            <main>
                {children}
            </main>
        </>
    )
}