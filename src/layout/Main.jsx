import { Outlet } from "react-router-dom";
import MainMenu from "../routes/Menu";

const MainLayout = () => {




    return (
        <div>

            <header>
                <MainMenu />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>

        </div>
    )
}


export default MainLayout;