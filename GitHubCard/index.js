/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// store URL
const URL = 'https://api.github.com/users/hotelmaster';
// GET request using axios library
axios.get(URL)
  .then(res => {debugger})
  .catch(err => {debugger})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// component function with object as param
function cardMaker(event) {
  
  // create the markup elements using the DOM

  // main div holding the card and all data
  const cardDiv = document.createElement('div');
  // add class
  cardDiv.classList.add('card');
  // div holding card info
  const infoDiv= document.createElement('div');
  // add class
  infoDiv.classList.add('card-info');
  // append to card div
  cardDiv.appendChild(infoDiv);
  // user image
  const userImg = document.createElement('img');
  // edit the src attr
  userImg.src = 'https://avatars3.githubusercontent.com/u/70125650?s=460&u=338ca9dcdfdf35284d183e533e33e47f617f9791&v=4';
  // append to card div
  cardDiv.appendChild(userImg);
  // title with name of user
  const h3Name = document.createElement('h3');
  // add class
  h3Name.classList.add('name');
  // append to info div
  infoDiv.appendChild(h3Name);
  // include text
  h3Name.textContent = 'Mathew Briguglio';
  // p1
  const paraUN = document.createElement('p');
  // add class
  paraUN.classList.add('username');
  // append p1 to info div
  infoDiv.appendChild(paraUN);
  // include username as text
  paraUN.textContent = 'hotelmaster';
  // p2
  const paraLoc = document.createElement('p');
  // append p2 to info div
  infoDiv.appendChild(paraLoc);
  // location text
  paraLoc.textContent = 'Riverside';
  // p3
  const paraProfile = document.createElement('p');
  // append p3 to info div
  infoDiv.appendChild(paraProfile);
  // anchor element nested in p3
  const anchorGH = document.createElement('a');
  // use setAttribute method to give href to anchor
  anchorGH.setAttribute('href', 'https://github.com/hotelmaster');
  // add text
  anchorGH.textContent = 'https://github.com/hotelmaster';
  // append to p3
  paraProfile.appendChild(anchorGH);
  // p4
  const paraFollowers = document.createElement('p');
  // append to info div
  infoDiv.appendChild(paraFollowers);
  // text
  paraFollowers.textContent = 'Followers: ';
  // p5
  const paraFollowing = document.createElement('p');
  // append to info div
  infoDiv.appendChild(paraFollowing);
  // text
  paraFollowers.textContent = 'Following: ';
  // p6
  const paraBio = document.createElement('p');
  // append to info div
  infoDiv.appendChild(paraBio);
  // text
  paraFollowers.textContent = 'Bio: ';

  // return parent container for github card
  return cardDiv;
}

// grab the div with 'cards' class
const cards = document.querySelector('div.cards');
// call the cardMaker function and pass in an object from API
cards.appendChild(cardMaker());

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
