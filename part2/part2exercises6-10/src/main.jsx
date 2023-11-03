import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    name: 'Arto Hellas',
    number: '040-1231244'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)