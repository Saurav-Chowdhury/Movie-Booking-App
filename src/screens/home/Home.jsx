import React from 'react';
import Header from '../../common/header/header';
import "./Home.css";
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import moviesData from '../../assets/movieData';

class Home extends React.Component {
state={
    data: moviesData
}

    render() { 
        return (
            <div>
                <Header />
                <div className='heading'>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={6} className='gridl'  cellHeight={250}>
                    {this.state.data.map(movie => (
                        <GridListTile key={"upcoming" + movie.id}>
                            <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <div className='flex-container' style={{width: "100%"}}>
                    <div className='movieList' style={{width: "76%"}}>
                        <GridList cols={4} cellHeight={350} spacing={40}>
                            {
                                this.state.data.map((item)=>(
                                        <GridListTile className='gridtile' key={item.id}>
                                            <img src={item.poster_url} alt={item.title} />
                                            <GridListTileBar title={item.title} subtitle={`Release Date:${Date(item.release_date).toString().slice(0,15)}`} />
                                        </GridListTile>
                                ))
                            }
                        </GridList>
                    </div>
                    <div className='filters' style={{width: "24%"}}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;