

import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/globalStyles/globalStyles';
import Route from '../../routes';
import { AuthProvider } from '../../contexts/auth'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <Route />
      </AuthProvider>
    </BrowserRouter>



  )
}

export default App
