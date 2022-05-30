import './App.css';
import Row from './Row';
import request from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
