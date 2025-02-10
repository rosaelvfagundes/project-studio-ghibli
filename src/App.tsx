import './App.css';
import Provider from './context/Provider';
import Routing from './routes/Routing';

function App() {

  return (
    <Provider>
      <Routing />
    </Provider>
  )
}

export default App;
