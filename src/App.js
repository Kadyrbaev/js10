import React from 'react'
import Forma from './components/Forma'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>REDUX</h1>
        <Forma/>
      </Provider>
    </div>
  )
}

export default App
