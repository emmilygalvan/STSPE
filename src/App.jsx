import { Header, NavBarMenu} from "."
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
