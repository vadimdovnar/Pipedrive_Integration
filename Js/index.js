//API Token: 1408ff17c6fdd6e5eb5a28e361027e7dfadc81a9
//Client ID: 6fb7c5caffb35cbf
//Client Secret: a22c5b991057b71be9efe8156498f088423e7294

//import REST class
import  RestAPI from './RestAPI.js';
const restAPI = new RestAPI();

// add click event for the button
const submitButton = document.querySelector('.items-block__submit');
submitButton.addEventListener('click', restAPI.createDealWithPerson);

