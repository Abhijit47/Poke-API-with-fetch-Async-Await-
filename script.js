const apiURI = `https://pokeapi.co/api/v2/pokemon/`;
const api = `https://pokeapi.co/api/v2/pokemon/1/`;
console.log(apiURI);

const pokemon_limit = 100;

const cards = document.querySelector('#cards_container');

cards.innerHTML = "";


const getPokemon = () => {
  for (i = 1; i <= pokemon_limit; i++) {
    // getPokeData(i);
    // console.log(i);

    const getData = async (i) => {
      try {
        const respose = await fetch(api.replace(1, i));
        const data = await respose.json();
        // console.log(data);

        cards.innerHTML += `
        <div class="column  is-one-quarter-desktop is-half-tablet is-full-mobile">
          <div class="card">
            <div class="card-header">
              <h3 class="card-header-title is-capitalized has-text-info-dark">${data.name}</h3>
            </div>

            <div class="is-flex is-justify-content-center p-2">
              <figure class="image is-128x128">
                <img class=" is-rounded has-background-info-light "
                  src="${data.sprites.front_shiny}">
              </figure>
            </div>
            <div class="card-content">

              <div class="media">
                <div class="media-left">
                  <p class="card-header-icon has-background-info-light has-text-grey-dark">${data.id}</p>
                </div>
                <div class="media-content">
                  <p class="is-capitalized ">Moves: ${data.moves[0].move.name}</p>
                  <p class="is-capitalized ">Weight: ${data.weight} <span class="is-lowercase has-text-weight-bold">lbs</span></p>
                </div>
              </div>

            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <button class="button is-link is-capitalized">know more</button>
              </div>
            </div>
          </div>
        </div>
        
        `;


      } catch (error) {
        console.log(error);
      }
    };

    getData(i);
  }
};

getPokemon();


/*
const getPokemonCollection = () => {
  for (let i = 0; i <= pokemon_limit; i++) {

    getPokeData(i);

  }
};

const getPokeData = async (i) => {
  try {
    const respose = await fetch(api.replace(1, i));
    const data = await respose.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};


const displayData = (data) => {
  // console.log(data);
  // console.log(`Id: ${data.id}`);
  // console.log(`Name: ${data.name}`);
  // console.log(`Img Back: ${data.sprites.back_default}`);
  // console.log(`Img front: ${data.sprites.front_shiny}`);
  // console.log(`Weight: ${data.weight}`);

  const card = document.createElement("div");
  const cardClass = ["column", "is-one-quarter"];
  card.classList.add(...cardClass);

  const htmlTemplate = `
  <div class="card has-shadow">
    <div class="card-header">
      <h3 class="card-header-title is-capitalized">${data.name}</h3>
    </div>

    <div class="is-flex is-justify-content-center p-3">
      <figure class="image is-128x128">
        <img class=" is-rounded has-background-info-light "
          src="${data.sprites.front_shiny}">
      </figure>
    </div>

    <div class="card-content p-0 mb-2">
      <div class="media ml-3">
        <div class="media-left">
            <p class="card-header-icon has-background-info-light has-text-grey-dark">${data.id}</p>
         </div>
        <div class="media-content">
            <p class="is-capitalized">Moves: ${data.moves[0].move.name}</p>
            <p>Weight: ${data.weight} <span>lbs</span></p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
         <button class="button is-link">Click to know more</button>
      </div>
    </div>
  </div>
  `;

  card.innerHTML = htmlTemplate;
  cards.appendChild(card);

};

getPokemonCollection();
*/

// Exclude this part this is only for practice
// ES6 Standard
class Person {
  constructor (name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

const newPerson = new Person("john", 23, 45000);
console.log(newPerson);

// ES5 standard
function Student(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}

const newStudent = new Student("Mary", 25, 35000);
console.log(newStudent);
console.log(newStudent);