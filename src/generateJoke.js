import axios from 'axios'

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    console.log(res.data.joke);
    if(res.data.joke) {
      document.getElementById('joke').innerHTML = res.data.joke;
    }else{
      document.getElementById('joke').innerHTML = "No joke for you!"
    }
  })
}

export default generateJoke