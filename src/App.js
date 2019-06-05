import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.busquedaMovie("")
  }

  busquedaMovie(searchTerm) {
    console.log("Sacando las pelis por pantalla")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Datos sacados correctamente")
        const resultados = searchResults.results

        var movieRows = []

        resultados.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Error al sacar los datos")
      }
    })
  }

  alEscribr(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.busquedaMovie(searchTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>TODOPelis</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.alEscribr.bind(this)} placeholder="Busca una pelicula"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
