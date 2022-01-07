async function showTrailer(id,language)
{
  let apikey="3d3de7aded7ab2c4468ae90610b67954"
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=${language}`)
  .then((response) => {
      console.log(response.data.results[0].key)
      if (response.data.results.length)
      {
          let url = `https://www.youtube.com/embed/${response.data.results[0].key}`;
          document.querySelector(".moviegrid").innerHTML="";
    let iframe=document.createElement("iframe");
    iframe.setAttribute("src", url)
      document.querySelector(".moviegrid").appendChild(iframe);
      }

                  
  })

  .catch(err => {
     console.log(err)
  })


}
function showMovies(movies,lan)
{
  document.querySelector(".moviegrid").innerHTML="";
  for(let i=0;i<movies.length;i++)
  {
    //console.log(movies[i]);
    let div=document.createElement('div');
    div.setAttribute('class','griditem');
    div.innerHTML=`<p class='title'>${movies[i].original_title}</p><p class='date'>Released:${movies[i].release_date}</p><center><img onclick='showTrailer("${movies[i].id}","${lan}")' class='poster' src="https://image.tmdb.org/t/p/original/${movies[i].poster_path}"height="300px"width="300px"></center>  
    <div class='icons'><i class="fa fa-heart" style="color:black;font-size:20px;"></i> ${movies[i].popularity}
    <i class="fa fa-eye" style="font-size:20px"></i> ${movies[i].vote_count}</div>`;
    document.querySelector(".moviegrid").appendChild(div);
  }
  if(movies.length===0)
  {
    let div=document.createElement('div');
    div.setAttribute('class','item');
    div.innerHTML=`<center><p class='title' style='grid-column-start: 1;grid-column-end: 3;'><i class="fa fa-exclamation-triangle" style="font-size:50px"></i>No Movies found</p></center>`;
    document.querySelector(".moviegrid").appendChild(div);
  }
}
function popular() {
  let lan=document.getElementById('dd1').value;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9a3664b3babef37b99db8cd30be9cc82&with_original_language=${lan}&page=1`
      )
      .then((res) => { 
      
        var movies = res.data.results;
        showMovies(movies,lan);
        // console.log(movies);
        //  movies.map(movie =>{
        //    console.log(movie.id);
        //  })
  
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

function topRated() {
  let lan=document.getElementById('dd1').value;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=9a3664b3babef37b99db8cd30be9cc82&with_original_language=${lan}&page=1`
      )
      .then((res) => { 
        var movies = res.data.results;
        showMovies(movies,lan);
        // console.log(movies);
        //  movies.map(movie =>{
        //    console.log(movie.id);
        //  })
  
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function upcoming() {
    let lan=document.getElementById('dd1').value;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=9a3664b3babef37b99db8cd30be9cc82&with_original_language=${lan}&page=1`
      )
      .then((res) => { 
        var movies = res.data.results;
        showMovies(movies,lan);
        // console.log(movies);
        //  movies.map(movie =>{
        //    console.log(movie.id);
        //  })
  
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  