import './App.css'
import invitationGif from './assets/invitation.gif'
import nervous from './assets/nervous.gif'
import rejectedGif from './assets/rejected.gif'
import rejected2Gif from './assets/rejected-2.gif'
import rejected3Gif from './assets/rejected-3.gif'
import rejected4Gif from './assets/rejected-4.gif'
import acceptedGif from './assets/accept.gif'

import { useState } from 'react';

const noResponses = [
  '¡No, gracias!',
  '¿Estás segura?',
  '¿De verdad estás segura?',
  'Piénsalo de nuevo',
  'Última oportunidad',
  '¿Estás segura?',
  'Podrías arrepentirte',
  'Dale otra oportunidad',
  '¿Estás absolutamente segura?',
  '¡Podría ser un error!',
  '¡Ten un corazón!',
  '¡No seas tan fría!',
  'Quieres aceptar, ¿verdad?',
]

const gifs = [
  nervous,
  rejectedGif,
  rejected2Gif,
  rejected3Gif,
  rejected4Gif
]

function App() {
  const [noCount, setNoCount] = useState(0)
  const [hasAccepted, setHasAccepted] = useState(false)
  const yesButtonSize = noCount * 0.1 + 1;
  const noButtonSize = Math.max(1 - noCount * 0.08, 0);


  const currentGif = gifs[noCount % gifs.length]

  const currentNoResponse = noResponses[noCount % noResponses.length]

  function decline() {
    setNoCount(noCount + 1)
  }

  if (hasAccepted) {
    return (
      <div className={'container'}>
        <img width={300} src={acceptedGif} alt="Gif de nostros jugando"/>
        <h1>¡Yay! ¡Vamos a divertirnos!</h1>
        <p>¡Me avisas para vernos!</p>
      </div>
    )
  }

  return (
    <div className={'container'}>
      {noCount == 0 || noCount == 13 ?
        <img width={300} src={invitationGif} alt="Gif de mi representacion gatuna lanzando flores"/> :
        <img width={300} src={currentGif} alt="Gif de tristeza"/>
      }
      <h1>¡Hola Stephanie!</h1>
      <p>¿Te gustaría salir conmigo?</p>
      <div className={`actions`}>
        <button className={`accept`}
                onClick={() => {
                  setHasAccepted(true)
                }}
                style={{
                  fontSize: `${yesButtonSize}em`
                }}>¡Claro!
        </button>
        <button className={`decline`} onClick={decline} style={{
          fontSize: `${noButtonSize}em`
        }}>{currentNoResponse}</button>
      </div>
    </div>
  )
}

export default App
