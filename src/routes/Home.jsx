import { Outlet } from "react-router-dom";
import MainMenu  from "./Menu";

const Home = () => {
    return (
     <>
      
        <h1>Home</h1>
        <p>Hola</p>

        <div>
            <Outlet />
        </div>
     </>
    )
};
export default Home;