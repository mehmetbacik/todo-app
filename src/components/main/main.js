import { useState } from "react";
import MainHeader from "./main-header/main-header";
import MainItem from "./main-item/main-item";
import MainFooter from "./main-footer/main-footer";
import './main.css';

function Main() {

    const [mainItems, setMainItems] = useState([]);

    return (
        <div className="todoapp">
            <header>
                <MainHeader setMainItem={setMainItems} mainItems={mainItems} />
            </header>
            <section>
                <MainItem setMainItem={setMainItems} mainItems={mainItems} />
            </section>
            <footer>
                <MainFooter setMainItem={setMainItems} mainItems={mainItems} />
            </footer>
        </div>
    );
};

export default Main;