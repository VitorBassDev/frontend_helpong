import React, { useState, useEffect} from 'react';

import PageHeader   from '../../componentes/PageHeaderDoador';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import './styles.css';
import './stylesOrigin.css';

	export default function BuscarNecessidade(e) {
		
		const [necessidade, setNecessidade] = useState([]);

		const ongId   = localStorage.getItem('ongId');
	
		useEffect(() => {
			api.get('necessidade/necessidadeGeral', {
			headers: {
				Authorization: ongId,
			}
			}).then(response =>{
				setNecessidade(response.data);
			})
		}, [ongId]);
		
	return (
			
		<div id="page-teacher-form" className="container">
			<PageHeader 
					title="Seja um Doador"    
					description="Escolha uma necessidade, realize uma boa ação !"
			/>        
			<main>
				<fieldset>
					<legend>Aqui Estão as Listadas todas as necessidades ainda não antendidas</legend>
		
					<h1>Casos Cadastrados</h1>
					<br/>
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
								<br/>
								<br/>
							</li>          
							))
							}
							
						</ul>
				</fieldset>

				<footer>
						<p>
							<img src={warningIcon} alt="Aviso importante"/>
							Importante! <br/>
							Preencha todos os dados antes de enviar 
						</p>
				</footer>
			</main>
		</div>
	)
}
