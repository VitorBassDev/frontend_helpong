import React, { useState, useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import { FiTrash2} from 'react-icons/fi';

import PageHeader   from '../../componentes/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import './styles.css';
import './stylesOrigin.css';


	export default function BuscarNecessidade(e) {
		const history = useHistory();
		const [necessidade, setNecessidade] = useState([]);
	
		//const ongCpf  = localStorage.getItem('ongCpf');
		const ongNome = localStorage.getItem('ongNome');
		const ongId   = localStorage.getItem('ongId');
	
		useEffect(() => {
			api.get('necessidade/necessidadeAll', {
			headers: {
				Authorization: ongId,
			}
			}).then(response =>{
				setNecessidade(response.data);
			})
		}, [ongId]);
		
			async function handleDeleteIncident(id){
			try{
					await api.delete(`incidents/ ${id}`, {
						headers:{
							Authorization: ongId,
						}
					});
	
					setNecessidade(necessidade.filter(incident => incident.id !==id ));
			} catch (err){
				alert('Erro ao Deletar o Caso');
			}
		}
	
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

								<button onClick={()=> handleDeleteIncident(incident.id)} type="button">
									<FiTrash2 size={20} color=" #A8a8b3 "> </FiTrash2>
								</button>
							</li>          
							))}
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
