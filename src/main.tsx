import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserContext/index.tsx'
import { MovieProvider } from './providers/MovieContext/index.tsx'
import Modal from 'react-modal';

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
