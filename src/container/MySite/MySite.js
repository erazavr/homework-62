import React, {Component, Fragment} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Promo from "../../components/Promo";
class MySite extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Promo/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default MySite;