import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'; 
import AppBar from './components/Appbar';
import InputField from './components/InputField'
import UpdateField from './components/UpdateField'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


function App() {
  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');
  const[currentPage, setCurrentPage] = useState();
  const[article, setArticle] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/Article/browse")
    .then(res => res.json())
    .then(result => {
      setArticle(result);
    })
  })
  if (currentPage === 1) {
    return (
      <div className="App">
        <AppBar/>
        <InputField/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <Button variant="contained" onClick={ (e) => setCurrentPage(1)}>
            Add&nbsp;&nbsp;&nbsp;  article  
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(2)}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(3)}>
            browse article
          </Button>
        </div>
      </div>
    );
  } else if (currentPage === 2) {
    return (
      <div className="App">
        <AppBar/>
        <h1>Update</h1>
        <UpdateField/>
        <br/>
        <div>
          <Button variant="contained" onClick={ (e) => setCurrentPage(1)}>
            Add article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(2)}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(3)}>
            browse article
          </Button>
        </div>
      </div>
    );
  } else if (currentPage === 3) {
    return (
      <div className="App">
        <AppBar/>
        <h1>Browse</h1>
        <Paper elevation={3}>
          {article.map(article => (
            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={article.id}>
              Id:{article.id}<br/>
              Title:{article.title}<br/>
              Content:{article.content}
            </Paper>
          ))}
        </Paper>
        <div>
          <Button variant="contained" onClick={ (e) => setCurrentPage(1)}>
            Add article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(2)}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(3)}>
            browse article
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <AppBar/>
        <h1>HomePage</h1>
        <div>
          <Button variant="contained" onClick={ (e) => setCurrentPage(1)}>
            Add article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(2)}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={ (e) => setCurrentPage(3)}>
            browse article
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
