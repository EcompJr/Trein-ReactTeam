import React, { Component } from 'react';
import { json }  from "../cards_services";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import '../fontello/css/fontello.css';


class Service extends Component {
    constructor (props) {
        super(props);
        this.state = { dados:[] };
    }

    async componentDidMount() {
        const response = await json.dados;
        console.log(response);
        
        this.setState({ //Muda o estado ou valor
            dados: response
        })
    }

    render() {
        return(
            <section id="we-do">
                <div className="container">
                    <div className="service">
                        <ul className="service-container">
                            { this.state.dados.map(servi => (
                                
                                <li key={servi.title} id="site" className="item">
                                    <div className="service-icon">
                                        <span className={servi.icon}></span>
                                    </div>
                                    
                                    <p className="item-title">{servi.title}</p> 
                                    <p className="item-description">{servi.description}</p>       
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

}

export default Service;