import React  from 'react';
import { useHistory } from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';


const PageHeader = (props) => {
    const history = useHistory();
    const ongName = localStorage.getItem('ongNome')

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
            
                <span> Bem Vindo(a) {ongName} </span>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button> 
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;