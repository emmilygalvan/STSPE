import { Header, InfoCard, NavBarMenu } from "."



export const App = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflowY: "hidden"
            }}
        >
            <Header />
            <NavBarMenu /> 
            <InfoCard/>
        </div>
    )
}