import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

import './styles.css';

export default function Profile() {
  const [casos, setCasos] = useState([])

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => { 
    api.get('profile', {
      headers: { 
        ong_id: ongId,
      }
    }).then(res => {
      setCasos(res.data)
    })
  },[ongId])

  async function handleDeleteCasos(id) {
    try{
      await api.delete(`casos/${id}`, {
        headers: {
          ong_id: ongId,
        }
      })

      setCasos(casos.filter(caso => caso.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleLogOut() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo"/>
        <span>Bem vinda, {ongName}</span>

        <Link className='button' to='/casos/novo' >Cadastrar novo caso</Link>
        <button onClick={handleLogOut} type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {casos.map(caso => (
          <li key={caso.id}>
            <strong>CASO:</strong>
            <p>{caso.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{caso.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(caso.value)}</p>

            <button onClick={() => handleDeleteCasos(caso.id)} type='button'>
              <FiTrash2 size={20} color='#a8a8b3' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
