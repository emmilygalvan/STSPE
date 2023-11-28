import { Header, InfoCard, NavBarMenu, Ins, TableEmploye, ActionBar } from "."
import { ChakraProvider } from '@chakra-ui/react'
import { AppRouter } from "./router/AppRouter"

export const App = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: '100%',
                overflowY: "hidden",
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Header />
            <NavBarMenu /> 
            <AppRouter />
        </div>
    )
}
