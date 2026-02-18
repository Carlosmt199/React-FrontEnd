import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Twitter } from "@boxicons/react"

// function App() {
//   return <button>Hola</button>
// }

const root = createRoot(document.getElementById('root'));

const CreateButton = ({text}) => {
  return (
    <button>
        <Twitter />{text}
    </button>
  )
}

const CreateImage = () => {
  return (
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA4TB0oBCOL3CW1jWNdfDmshskZ_8HK8tAw&s'>
    </img>
  )
}

root.render(
    <>
      <CreateButton text = "Hola" />
      <CreateImage />
    </>
)
