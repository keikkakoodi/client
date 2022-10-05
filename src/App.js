import { useEffect, useState } from "react";

export default function App() {
    
const [search, setSearch] = useState("");

const [keikkaData, setKeikkaData] = useState();

const apiURL = ("https://keikkakoodibackend.herokuapp.com/api/keikat");
const devApiURL = ("https://80-keikkakoodi-server-czwmikg4zge.ws-eu67.gitpod.io/api/keikat");


function koodiPrompt () {
  let promptValue = prompt("Syötä tehtäväkoodi")
  parseInt(promptValue)
  setSearch(promptValue);
}

function searchKeikka(){
  koodiPrompt();
  console.log("Haettu koodia:" + search);
}

useEffect(() => {
  fetch(devApiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => console.log(actualData))
    .then((actualData) => setKeikkaData(actualData))
    .catch((err) => {
      console.log(err.message);
    });
}, []);

console.log(keikkaData);

return(
    <div className="SearchUI">
            Hae tehtäväkoodia: <br/>
            <p id="inputRules"> Mikäli tehtäväkoodi sisältää kiireellisyysluoka (kirjain A,B,C,D) sitä EI tule syöttää</p>
            <button onClick={searchKeikka}>Hae keikkaa</button>
            <p>{keikkaData}</p>

    </div>
);//return
}
