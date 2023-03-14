import generateJoke from "./generateJoke";
// import { v4 as uuidv4 } from "uuid";
import "./styles/main.scss"; 
import laughing from "./assets/laughing.svg"

const laughImg =document.getElementById("laughImg");
laughImg.src = laughing;

generateJoke();
// console.log(uuidv4());
document.getElementById("jokeBtn").addEventListener("click", generateJoke);