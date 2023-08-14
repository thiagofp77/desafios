import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cabecalho.png'; 
import sorvete from '../assets/images/carro 1.png';

export default function Sorvete() {

    const [nomesorvete, setNome] = useState('');
    const [valor, setValor] =useState('');
    const [lista, setLista] =useState([]);
    const [total, setTotal] = useState(0);



    function adicionar() {
        if (nomesorvete && valor) {

            let p = Number(valor.replace(',', '.'));

            let item = {
                nome: nomesorvete,
                preco: p.toFixed(2),
            }
            
            setNome('');
            setValor('');
            setLista([...lista, item]);
            setTotal(total + p);
        }
    }

    return(
        <div className='pagina-sorvete'>

<header>
    <img src={logo} />

    </header>

            <div className='total'>
                <div className='sorvete'>

                    <div className='foto'>
                        <img src= {sorvete} />
                    </div>

                    <div className='conteudo'>
                        <div className='ni'>
                        <h1>Novo Item</h1>
                        </div>
                           <div className='th'>
                        <input type='text' placeholder='Casquinha' value={nomesorvete} onChange={e => setNome(e.target.value) }  />

                        <label>R$</label>
                        <input type='text' placeholder='2,50' value={valor} onChange={e => setValor(e.target.value) } />

                        <button onClick={adicionar}>Adicionar</button>
                        </div> 
                        <div className='lt'>
                        <h1>Lista de Compras</h1>
                        <h3>Total: R$ {total}</h3>
                        </div>

                        <tbody>
                            {lista.map(item =>
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>R${item.preco}</td>
                                </tr>

                                )}
                        </tbody>

                    </div>

                </div>
            </div>
        </div>
    )
}