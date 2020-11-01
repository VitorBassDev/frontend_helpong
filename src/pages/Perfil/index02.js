import React, { useState, useEffect} from 'react';
import { FiTrash2} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import PageHeaderOng   from '../../componentes/PageHeaderOng';
import warningIcon from '../../assets/images/icons/warning.svg';
import logoImg from '../../assets/images/logo01.svg';
import api from '../../services/api';
import './style01.css';
//import './styles.css';
//import './stylesOrigin.css';

	export default function BuscarNecessidade(e) {
		const ongNome = localStorage.getItem('ongNome');
		const history = useHistory();
		
		const [necessidade, setNecessidade] = useState([]);
	
		//const ongCpf  = localStorage.getItem('ongCpf');
		const ongId  = localStorage.getItem('ongId');
	
		useEffect(() => {
			api.get('necessidade/necessidadeOng', {
			headers: {
				Authorization: ongId,
			}
			}).then(response =>{
				setNecessidade(response.data);
			})
		}, [ongId]);
		
		async function handleDeleteIncident(id_necessidade){
			try{
        await api.delete(`necessidade/deletaNecessidade/${id_necessidade}`, {
          headers:{
            Authorization: ongId,
					}
					
				},
				alert('Caso deletado com sucesso')
				);

        setNecessidade(necessidade.filter(incident => incident.id_necessidade!==id_necessidade ));
    } catch (err){
      alert('Erro ao Deletar o Caso');
    }
	}
	function handleLogout(){
    localStorage.clear();
    history.push('/');
  }
	
return (
			
	<div id="page-teacher-form" className="container">
	<PageHeaderOng 
			title="Implementar gerenciamento de ONG "    
			description="Escolha uma necessidade, realize uma boa ação !"
	/>        
	<div className="profile-container">
		
			<span>Aqui estão todas as suas necessidades ainda não atendidas</span>

			
				<ul>
					{necessidade.map(incident =>(
						<li key={incident.id_necessidade}>
						<strong> Descrição:</strong>
						<p> {incident.descricao}</p>

						<strong>Identificador: </strong>
						<p>{incident.identificador}</p>

						<strong>Quantidade: </strong>
						<p>{incident.quantidade}</p>
						
						<strong>Situação: </strong>
						<p>{incident.situacao}</p>

						<button onClick={()=> handleDeleteIncident(incident.id_necessidade)} type="button">
							<FiTrash2 size={20} color=" #A8a8b3 "> </FiTrash2>
						</button>
					</li>          
					))}
				</ul>



		<footer>
				<p>
						<img src={warningIcon} alt="Aviso importante"/>
						Importante! <br/>
						Preencha todos os dados antes de enviar 
				</p>

		</footer>
		</div>
</div>
)
}
