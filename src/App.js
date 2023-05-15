import React, {useRef, useState} from "react";

import People from './assets/pouple.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import {Container, H1, ContainerItens, Image, InputLabel, Input, Button, User} from "./styles";

function App() {
  //const users = []
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

function addNweUser (){
  setUsers([... users,{id:Math.random(),name:inputName.current.value, age:inputAge.current.value}])
}

function deleteUser (userId){
  const newUsers = users.filter (user => user.id !== userId)
  setUsers(newUsers)
}

  
  return (
    <Container>
     <Image alt="logo-image" src={People}/>
      <ContainerItens>
        <H1>Cadastro</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge}placeholder="Idade"/>

        <Button onClick={addNweUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
        
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixo"/>
              </button>
            </User>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App