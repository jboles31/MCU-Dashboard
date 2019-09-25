// require('dotenv').config();
// import {} from 'dotenv/config'
import 'bootstrap'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import View from './components/View.jsx';
import Header from './components/Header.jsx';
// import { EventEmitter } from 'events';
// import search from '../server/api.jsx';
import style from './main.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {
        title: '',
        year: '',
        cast: [],
        synopsis: '',
        order: '',
        pic: '',
        released: '',
        runtime: '',
        director: '',
        writers: '',
        awards: '',
        rating: '',
        boxoffice: '',
      }, 
      showView: false,
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/info', 
      success: (data) => {
        this.setState({
          movies: data[0].movies
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search(param)  {
    param = param.movie.replace(' ', '+');
    $.ajax({
      method: 'GET',
      url: `/api/${param}`, 
      success: (data) => {
        this.setState({
          movie: {
            title: data.Title,
            year: data.Year,
            cast: data.Actors,
            synopsis: data.Plot,
            order: `${this.state.movies.indexOf(data.Title) + 1}`,
            pic: data.Poster,
            released: data.Released,
            runtime: data.Runtime,
            director: data.Director,
            writers: data.Writer,
            awards: data.Awards,
            rating: data.imdbRating,
            boxoffice: data.BoxOffice,
          },
          showView: true,
        })
      },
      error: (err) => {
        console.log('error on Client', err);
      }
    });
  }

  render () {
    if (this.state.showView === false) {
      return (
        <div className="app-wrapper">
          <Header search={this.search} movies={this.state.movies}/>
        </div>
      );
    } else {
      return (
        <div className="app-wrapper">
          <Header search={this.search} movies={this.state.movies}/>
          <View info={this.state.movie}/>
        </div>)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));