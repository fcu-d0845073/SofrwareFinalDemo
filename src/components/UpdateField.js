import * as React from 'react';
import { useEffect, useState } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function InputField() {
  const[id, setId] = useState('');
  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');
  const handleClick = (e) =>{
    e.preventDefault();
    var backEndContent = content.replaceAll("\n", ",");
    const article = [id, title, backEndContent];
    console.log(article);
    var url = "http://localhost:8080/Article/update?" + "id=" + id + "&" + "title=" + title + "&" + "content=" + backEndContent;
    fetch(url, {
        method:"POST",
        headers:{"Content-Type":"application.json"},
        body:JSON.stringify(article)
    }).then(() =>{
        console.log("Update Article");
    })
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Add Article</h1>
      <div>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue="Hello World"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </div>
    </Box>
  );
}