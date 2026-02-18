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

root.render(
    <>
      <CreateButton text = "Hola" />
    </>
)
