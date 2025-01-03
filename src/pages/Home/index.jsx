
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
        <input name="nome" type='text' />
        <input name="idade" type='number' />
        <input name="email" type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} >
          <div>
            <p>Nome:{user.name}</p>
            <p>Idade:{user.age}</p>
            <p>Email: {user.email}</p>
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
