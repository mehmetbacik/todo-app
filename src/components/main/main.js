import { useState } from "react";
import MainHeader from "./main-header/main-header";
import MainItem from "./main-item/main-item";
import MainFooter from "./main-footer/main-footer";
import './main.css';

function Main() {

    const [mainItems, setMainItems] = useState([
        {
            name: 'Lorem Ipsum is simply dummy'
        },{
            name: 'Lorem Ipsum is simply dummy'
        }
    ]);

    return (
        <div id="todo">
            <header className="todoheader">
                <MainHeader setMainItem={setMainItems} mainItems={mainItems} />
            </header>
            <section className="todomain">
                <MainItem setMainItem={setMainItems} mainItems={mainItems} />
            </section>
            <footer className="todofooter">
                <MainFooter setMainItem={setMainItems} mainItems={mainItems} />
            </footer>
        </div>
    );
};

export default Main;