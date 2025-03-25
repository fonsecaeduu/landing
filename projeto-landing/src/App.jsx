import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Card from './components/Card/Card'

function App() {
  return (
    <div className='app'>
      <Header/>
      <div id="page">
        <div className="cards">
          <Card titulo='Yakisoba' descricao='Prato de yakisoba (serve uma pessoa)' valor='16,00' foto='https://static.itdg.com.br/images/640-440/b77169a959b9d32180b11fd952ec5519/shutterstock-1183796671-1-1-.jpg'/>
          <Card titulo='Lasanha' descricao='Lasanha completa' valor='30,00' foto='https://static.itdg.com.br/images/360-240/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg'/>
          <Card titulo='Parmegiana' descricao='Frango à parmegiana (serve duas pessoas)' valor='28,00' foto='https://receitatodahora.com.br/wp-content/uploads/2024/06/frango-a-parmegiana-1906.jpg'/>
          <Card titulo='Empadão de frango' descricao='Fatia de empadão de frango' valor='8,00' foto='https://i.ytimg.com/vi/nYzVI4IxLI0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDe1BPwmbRLtaIg9Qu_N3i4UqZdUQ'/>
          <Card titulo='Empadão de frango' descricao='Fatia de empadão de frango' valor='8,00' foto='https://i.ytimg.com/vi/nYzVI4IxLI0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDe1BPwmbRLtaIg9Qu_N3i4UqZdUQ'/>
        </div>
        
      </div>
    </div>
  )
}

export default App
