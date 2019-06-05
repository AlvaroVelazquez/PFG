import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    window.open("https://www.themoviedb.org/movie/" + this.props.movie.id)
    

  }
  trailerMovie(){
    window.open("https://www.youtube.com/results?search_query= " + this.props.movie.title + " trailer")
  
  }

  render() {
    return <table key={this.props.movie.id}>
    
    <tbody>
      
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td width="30"></td>
        <td width="1100">
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <input type="button" className="btn btn-primary" onClick={this.trailerMovie.bind(this)} value="Play"/>

          <input type="button" className="btn btn-primary" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
        <td width="200"></td>
        <td>
          <b>Valoracion media de los usuarios <br></br><br></br>
             {this.props.movie.vote_average}
          </b>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow