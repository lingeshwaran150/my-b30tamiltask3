import { useEffect, useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function App() {
 


const[movieList,setMovieList]=useState([]);

useEffect(()=>{
  fetch("https://620c529fb5736325938b91f9.mockapi.io/movies")
  .then((data)=>data.json())
  .then((mvs)=>setMovieList(mvs));
},[])


  const [name,setname]=useState("")
  const [poster,setposter]=useState("")
  const [rating,setrating]=useState("")
  const [summary,setsummary]=useState("")
  return (
   
    <div className="App">
      <div className="adhi">
      <h1>🍿🍿🍿WELCOME TO PVR CINEMAS🍿🍿🍿 </h1>
      <h1>MOVIE BUFF📽️🎬📽️🎦 </h1>
      <h2>DIWALI RELEASED MOVIES THIS WEEK📽️🍿🎬🎦</h2>
      </div>
      <div className="movie-form">
      <TextField id="outlined-basic" label="enter the name" variant="outlined"  onChange={(event)=>setname(event.target.value)}/>
      <TextField id="outlined-basic" label="enter the poster" variant="outlined" onChange={(event)=>setposter(event.target.value)} />
      <TextField id="outlined-basic" label="enter the rating" variant="outlined" onChange={(event)=> setrating(event.target.value)}/>
      <TextField id="outlined-basic" label="enter the summary" variant="outlined" onChange={(event)=>setsummary(event.target.value)}/>
     <Button variant="contained" onClick={()=>{
       const newmovie={name:name,poster:poster,rating:rating,summary:summary
     };
     setMovieList([...movieList,newmovie])
    }
    }>Add Movie </Button>
   </div>
     <div className="movie-list">
   
     {movieList.map((nm)=><Msg name={nm.name} poster={nm.poster} rating={nm.rating} summary={nm.summary}/>)}
     
     </div>
     
    </div>
   
  );
}


function Msg({name,rating,poster,summary}){
  const[show,setshow]=useState(true)
 // const summarystyles={
  //  display:show?"block":"none",
  //}
 return(
   <Card>
    <div className="movie">
         <img   className="movie-poster"  src= {poster}  alt="profile pic"></img>
     <CardContent>
     <h1 className="movie-name">NAME:{name}</h1>
     <h1 className="movie-rating">RATINGS:{rating}<RatingSIze/></h1>
  
     <Button variant="contained" onClick={()=>setshow(!show)}>DESCRIPTION</Button>
      {/* <h1  style= { summarystyles}className="movie-story">SUMMARY:{summary}</h1>*/}
    {show?<p className="movie-story">SUMMARY:{summary}</p>:""}
     <Counter />
     </CardContent>
    </div>
    </Card>
  );
}
function Counter(){
  const[like,setLike]=useState(0);
  const[dislike,setdislike]=useState(0);
  useEffect(()=>{
    console.log('like is updated',like);
  },[like])
  return(
    
    <div className="kii">
      
 <Button  variant="outlined" className="abd" 
  onClick={()=>setLike(like+1)} > <Badge badgeContent={like} color="primary">
      👍
    </Badge></Button>
      <Button variant="outlined"  className="abd"
      onClick={()=>setdislike(dislike+1)}  ><Badge badgeContent={dislike} color="error">
      👎
    </Badge></Button>

    </div>
  
  )
}
function RatingSIze() {
  return (
    <Stack spacing={1}>
      <div>
      <Rating name="size-large" defaultValue={2} size="large" />
      </div>
    </Stack>
  );
}
