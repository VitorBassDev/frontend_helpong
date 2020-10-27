import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import {FiPower} from 'react-icons/fi';

import PageHeader   from '../../componentes/PageHeader';
import Input        from '../../componentes/Input';
import Textarea     from '../../componentes/Textarea';
import Select       from '../../componentes/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
//import './styles.css';
import './stylesOrigin.css';

export default function Necessidade() {

	const[descricao,	setDescricao]   = useState('');
	const[quantidade, setQuantidade]  = useState('');
	const[situacao,		setSituacao]		= useState('');

	const ongId   = localStorage.getItem('ongId');
	const history = useHistory();
	
	async function registrarNecessidade(e) {
		e.preventDefault();
		//console.log(e)

		const data = {
			descricao,
			quantidade,
			situacao,
		};

		try {
			const resposta = await api.post('necessidade/novaNecessidade', data, {
				headers:{
					Authorization: ongId,
				}
			});

				alert(`Necessidade Cadastrada com Sucesso: ${resposta.data.identificador}`);
				history.push('/');

		} catch(err){
			alert('Erro no Cadastro, Tente novamente.');
		}
	}
		function handleLogout(){
			localStorage.clear();
			history.push('/');
		}
	return (
		<div id="page-teacher-form" className="container">
			<PageHeader 
					title="Quer receber ajuda?"    
					description="Informe sua necessidade, e espere uma boa ação"
			/>      
			<button onClick={handleLogout} type="button">
       <FiPower size={18} color="#e02041" />
      </button>  
			<main>
				<form onSubmit={registrarNecessidade}>
					<fieldset>
						<legend>Informe sua necessidade com dados contundêntes e claros</legend>
			
							<Textarea 
									name="descricao" 
									label="Fale um pouco sobre sua Necessidade" 
									value={descricao} 
									onChange={(e) => { setDescricao(e.target.value) }}
							/>

							<Input 
									type="text" placeholder="Quantidade"
									value={quantidade}
									onChange={e => setQuantidade(e.target.value)}
							/>

					</fieldset>

					<fieldset>
						<legend>Situação</legend>
							<Select 
								name="situacao" 
								label="Informar: Não Atendida"
								value={situacao}
								onChange={(e) => setSituacao(e.target.value)}
								options={[
										{ value: 'Atendida', label: 'Atendida' },
										{ value: 'Não Atendida', label: 'Não Atendida' },
									]}
							/>
					</fieldset>

					<footer>
							<p>
									<img src={warningIcon} alt="Aviso importante"/>
									Importante! <br/>
									Preencha todos os dados antes de enviar 
							</p>
							<button >
									Cadastrar Necessidade
							</button>
					</footer>
				</form>
			</main>
		</div>
	)
}
