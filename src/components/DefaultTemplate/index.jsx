import { Header } from "../Header"

export const DefaultTemplate = ({children, setVisible, visible}) =>{
    return (
        <>
            <Header setVisible={setVisible} visible={visible} />
            <main>
                {children}
            </main>
        </>
    )
}