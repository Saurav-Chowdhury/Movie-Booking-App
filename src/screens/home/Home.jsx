import React from 'react';
import Header from '../../common/header/header';
import { useState } from 'react';
import './Home.css';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import moviesData from '../../assets/movieData';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import genres from '../../assets/genre';
import artists from '../../assets/artists';


function Home1() {
    const [data,setData]=useState(moviesData);
    const [filterMovie,setFilter]=useState(moviesData);
    const [moviename,setMovieName]=useState('');
    const [genre,setGenre]=useState([]);
    const [artist,setArtist]=useState([]);

    const history=useHistory();

    const movieClickHandler=(id)=>{
        history.push('/Detail/'+id);
    }

    const movieChangeHandler=(e)=>{
        setMovieName(e.target.value)
    }
    
    const genreHandleChange=(e)=>{
        setGenre(e.target.value)
        console.log(genre)
    }
    
    const artistHandleChange=(e)=>{
        setArtist(e.target.value)
        console.log(artist)
    }
    
    const applyHandler=()=>{
        let arr=[];
        arr=filterMovie.filter((data)=> data.title.toLowerCase()==moviename.toLowerCase());
        console.log(arr)
        setFilter(arr)
    }
    


    return ( <>
        <Header props='Login'/>
        <div className='heading'>
            <span><b>Upcoming Movies</b></span>
        </div>
        <GridList cols={6} className='gridListUpcomingMovies'>
                    {data.map(movie => (
                        <GridListTile key={"upcoming" + movie.id}>
                        <img src={movie.poster_url} alt={movie.title} />
                        <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
        </GridList>
        <div className='flex-container' style={{width: "100%"}}>
                    <div className='movieList' style={{width: "76%"}}>
                        <GridList cols={4} cellHeight={350} spacing={40}>
                            {
                                filterMovie.map((item)=>(
                                    <GridListTile onClick={() => movieClickHandler(item.id)} className='gridtile' key={item.id}>
                                        <img src={item.poster_url} alt={item.title} />
                                        <GridListTileBar title={item.title} subtitle={`Release Date:${new Date(item.release_date).toDateString()}`} />
                                    </GridListTile>
                                    
                                ))
                            }
                        </GridList>
                    </div>
                    <div className='filters' style={{width: "24%"}}>
                        <Card>
                            <CardContent>
                                <FormControl>
                                    <Typography className='root'>
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl><br/><br/>
                                <FormControl >
                                    <InputLabel htmlFor='movie-name'>Movie Name</InputLabel>
                                    <Input value={moviename} onChange={movieChangeHandler} id='movie-name' />
                                </FormControl><br/><br/>
                                <FormControl className='forms'>
                                    <InputLabel id='select-genre'>Genres</InputLabel>
                                    <Select
                                    multiple
                                    id='genre'
                                    value={genre}
                                    label='Select genre'
                                    onChange={genreHandleChange}>
                                        <MenuItem value="None">None</MenuItem>
                                        {
                                            genres.map((data)=>(
                                                <MenuItem key={data.id} value={data.name}>
                                                    <Checkbox/>{data.name}
                                                </MenuItem>
                                            )

                                            )
                                        }
                                    </Select>
                                </FormControl><br/><br/>
                                <FormControl className='forms'>
                                    <InputLabel id='select-artist'>Artists</InputLabel>
                                    <Select
                                    multiple
                                    id='artist'
                                    value={artist}
                                    label='Select Artists'
                                    onChange={artistHandleChange}>
                                        <MenuItem value="None">None</MenuItem>
                                        {
                                            artists.map((data)=>(
                                                <MenuItem key={data.id} value={data.first_name+" "+data.last_name}>
                                                    <Checkbox/>{data.first_name+" "+data.last_name}
                                                </MenuItem>
                                            )

                                            )
                                        }
                                    </Select>
                                </FormControl><br/><br/><br/>
                                <FormControl>
                                <TextField
                                id="start-date"
                                label="Release Date Start"
                                type="date"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                />
                                </FormControl><br/><br/><br/>
                                <FormControl>
                                <TextField
                                id="end-date"
                                label="Release Date End"
                                type="date"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                />
                                </FormControl><br/><br/><br/>
                                <FormControl>
                                <Button onClick={applyHandler} color='primary' variant="contained">APPLY</Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
        </div>
    </> );
}

export default Home1;