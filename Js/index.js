
//import REST class
import  RestAPI from './RestAPI.js';
const restAPI = new RestAPI();

const createDealWithPerson = restAPI.createDealWithPerson.bind(restAPI);

// add click event for the button
const myForm = document.querySelector('#form');
myForm.addEventListener('submit', createDealWithPerson);

  

