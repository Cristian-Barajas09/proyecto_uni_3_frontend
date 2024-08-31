import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import store from '@shared/store/store'
import './index.css'


const app = createRoot(document.getElementById('root')!)


app.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
