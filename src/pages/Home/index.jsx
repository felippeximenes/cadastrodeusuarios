
import './style.css'
import Trash from '../../assets/lixo.svg'
import api from '../../services/api'
import { useEffect } from 'react'

function Home() {

  let users = []

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    users = usersFromApi.data
    console.log(users)
  }

  useEffect (() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usúarios</h1>
        <input placeholder='Nome' name="nome" type='text' />
        <input placeholder='Idade' name="idade" type='number' />
        <input placeholder='Email' name="email" type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card' >
          <div>
            <p>Nome:<span>{user.name}</span></p>
            <p>Idade:<span>{user.age}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    

      
    </div>

  )
}

export default Home
