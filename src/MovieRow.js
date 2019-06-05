import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    const url1 = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url1
    

  }
  trailerMovie(){
    const url2 = "https://www.youtube.com/results?search_query= " + this.props.movie.title + " trailer"
    window.location.href = url2
  
  }

  render() {
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <input type="button" onClick={this.trailerMovie.bind(this)} value="Play"/>

          <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow