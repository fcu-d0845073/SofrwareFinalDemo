import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'; 
import AppBar from './components/Appbar';
import InputField from './components/InputField'
import UpdateField from './components/UpdateField'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';

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
  const imageUrl = 'https://images.unsplash.com/photo-1671850768178-33b5c0fed4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80';
  if (currentPage === 1) {
    return (
      <div>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '1300px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        opacity: 0.8,
        zIndex: -1,
      }}>
          
        </div>
        <div className="App">
        <AppBar/>

        <Container fixed style={{marginTop:'30px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)'}}>
          <CardActionArea>
            <CardContent>
            <div style={{margin:"10px", padding:"15px"}}>
          <Button variant="outlined" onClick={ (e) => setCurrentPage(1)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            Add&nbsp;&nbsp;&nbsp;  article  
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(2)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(3)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            browse article
          </Button>
        </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
        
        
      <Container fixed style={{marginTop:'10px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)'}}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2">
                <InputField/>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      </div>
      </div>

    );
  } else if (currentPage === 2) {
    return (
      <div>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '1300px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        opacity: 0.8,
        zIndex: -1,
      }}>
          
        </div>
      <div className="App">
        <AppBar/>
        
        <Container fixed style={{marginTop:'30px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)'}}>
          <CardActionArea>
            <CardContent>
            <div style={{margin:"10px", padding:"15px"}}>
          <Button variant="outlined" onClick={ (e) => setCurrentPage(1)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            Add&nbsp;&nbsp;&nbsp;  article  
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(2)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(3)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            browse article
          </Button>
        </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>

        <Container fixed style={{marginTop:'10px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2">
                <UpdateField/>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
        
        <br/>
      </div>
      </div>
    );
  } else if (currentPage === 3) {
    return (
      <div>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '1300px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        opacity: 0.8,
        zIndex: -1,
      }}>
          
        </div>
      <div className="App">
        <AppBar/>
        <Container fixed style={{marginTop:'30px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)'}}>
          <CardActionArea>
            <CardContent>
            <div style={{margin:"10px", padding:"15px"}}>
          <Button variant="outlined" onClick={ (e) => setCurrentPage(1)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            Add&nbsp;&nbsp;&nbsp;  article  
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(2)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(3)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            browse article
          </Button>
        </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>

        <h1>Browse</h1>

        <Container fixed style={{marginTop:'10px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2">
              <Paper elevation={3}>
              {article.map(article => (
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={article.id}>
                  Id:{article.id}<br/>
                  Title:{article.title}<br/>
                  Content:{article.content}
                </Paper>
              ))}
            </Paper>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      </div>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '1300px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        opacity: 0.8,
        zIndex: -1,
      }}>
          
        </div>
      <div className="App">
        <AppBar/>
        <h1>HomePage</h1>
        <Container fixed style={{marginTop:'30px'}}>
        <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)'}}>
          <CardActionArea>
            <CardContent>
            <div style={{margin:"10px", padding:"15px"}}>
          <Button variant="outlined" onClick={ (e) => setCurrentPage(1)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            Add&nbsp;&nbsp;&nbsp;  article  
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(2)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            update article
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={ (e) => setCurrentPage(3)} color="primary" size="large" style={{ borderRadius: '50px' }}>
            browse article
          </Button>
        </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      </div>
      </div>
    );
  }
}

export default App;
