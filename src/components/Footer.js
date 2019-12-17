import React,{Component} from 'react';

class Footer extends Component{
    render() {
        return(
            <footer className="footer">
                <div className="container ">
                    <h3 className="Copyright">Copyright 2019 Footer here</h3>
                    <div className="png">
                        <a href="#" className="link footer-img"></a>
                        <a href="#" className="link footer-img2"></a>
                        <a href="#" className="link footer-img3"></a>
                    </div>

                </div>
            </footer>
        )
    }
}
export default Footer