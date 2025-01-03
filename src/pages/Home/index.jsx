
import './style.css'
import Trash from '../../assets/lixo.svg'

function Home() {

  const users = [{
    id: '234sfafsasf',
    name: 'Rodolfo',
    age: 33,
    email: 'felippe@emmail.com',
  }, {
    id: '1231afafg',
    name: 'Eliana',
    age: 38,
    email: 'eliana@emmail.com',
  }, {
    id: '1231afafg',
    name: 'Fulana',
    age: 22,
    email: 'fulana@emmail.com',
  }]


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
