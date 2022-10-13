import { useEffect, useState } from "react";

export default function App() {
    
const [search, setSearch] = useState();

const [keikkaData, setKeikkaData] = useState();

const apiURL = ("https://keikkakoodi.herokuapp.com/keikat");

const handleSearchKeikka = (event) => {
    event.preventDefault();
console.log("Haettu koodia:" + search);
}


useEffect(() => {
  fetch(apiURL)
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
        <form onSubmit={handleSearchKeikka}>
            Hae tehtäväkoodia: <br/>
            <p id="inputRules"> Mikäli tehtäväkoodi sisältää kiireellisyysluoka (kirjain A,B,C,D) sitä EI tule syöttää</p>

            <input 
            type="number"
            value={setSearch}
            /> <br/>

            <input type="submit" />
        </form>
    </div>
);//return
}