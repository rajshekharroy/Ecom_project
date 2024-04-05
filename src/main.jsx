import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreContextProvider>
    <Auth0Provider 
  domain="dev-36kolixbqpoq7qw7.us.auth0.com"
    clientId="I4BWXXu8i6lPpqqvyzwLt3UDzFeLe0Qk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <App />
     </Auth0Provider>
     </StoreContextProvider>
    </BrowserRouter>
   
)
