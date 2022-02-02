import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../common/header/header';
import { useHistory } from 'react-router-dom';
import './Detail.css';
import moviesData from '../../assets/movieData';
import YouTube from 'react-youtube';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';

function Detail(props) {
    const id=useParams();
    const history=useHistory();
    const toBack=()=>{
        history.push('/')
    }
    const [data,setData]=useState(moviesData);
    const movie=data.filter((item)=>item.id===id.id);
    const [title,setTitle]=useState(movie[0].title);
    const [poster,setPoster]=useState(movie[0].poster_url);
    const [genres,setGenres]=useState(movie[0].genres);
    const [duration,setDuration]=useState(movie[0].duration);
    const [releseDate,setRealeaseDate]=useState(movie[0].release_date);
    const [rating,setRating]=useState(movie[0].critics_rating);
    const [plot,setPlot]=useState(movie[0].storyline);
    const [wiki,setWiki]=useState(movie[0].wiki_url);
    const [trailer,setTrailer]=useState(movie[0].trailer_url);
    const [artist,setArtist]=useState(movie[0].artists)
    
    const opts = {
        height: '500',
        width: '900',
        playerVars: {
            autoplay: 1
        }
    }


    return (<>
        <Header props="BOOK SHOW"/>
        <div className='main'>
            <div className='left'>
                <Button onClick={toBack}><Typography variant='caption'>&lt; Back to Home</Typography></Button>
                <div className='img'>
                    <img height={400} width={330} src={poster} />
                </div>
            </div>

            <div className='middle'>
                <Typography variant='h2'>{title}</Typography>
                <Typography><b>Genre: </b>{genres.join(', ')}</Typography>
                <Typography><b>Duration: </b>{duration}</Typography>
                <Typography><b>Release Date: </b>{new Date(releseDate).toDateString()}</Typography>
                <Typography><b>Duration: </b>{duration}</Typography>
                <Typography><b>Rating: </b>{rating}</Typography><br/>
                <Typography className='plot'><b>Plot: </b><a target='_blank' href={wiki}>(Wiki_Link)</a>  {plot}</Typography><br/>
                <Typography><b>Trailer: </b></Typography><br/>
                <YouTube
                    videoId={trailer.split("?v=")[1]}
                    opts={opts}
                    />
            </div>

            <div className='right'>
                <Typography><b>Rate this movie:</b></Typography>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <div className="artist">
                    <Typography><b>Artists :</b></Typography><br/>
                    <GridList className='gridListUpcomingMovies'>
                    {artist.map(item => (
                        <GridListTile key={"Artist" + item.id}>
                        <img src={item.profile_url} />
                        <GridListTileBar title={item.first_name+" "+item.last_name} />
                        </GridListTile>
                    ))}
        </GridList>
                </div>
            </div>
        </div>
    </>);
}

export default Detail;