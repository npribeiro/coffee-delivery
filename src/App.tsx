import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { OrderingContextProvider } from './modules/ordering/context';

function App() {
  return (
    <BrowserRouter>
      <OrderingContextProvider>
        <Router />
      </OrderingContextProvider>
    </BrowserRouter>
  );
}

export default App;
