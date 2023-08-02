import mercury from '../assets/images/planets/mercury.svg'; // Import the image file for Mercury
import venus from '../assets/images/planets/venus.svg'; // Import the image file for Venus
import earth from '../assets/images/planets/earth.svg'; // Import the image file for Earth
import mars from '../assets/images/planets/mars.svg'; // Import the image file for Mars
import jupyter from '../assets/images/planets/jupyter.svg'; // Import the image file for Jupiter
import saturn from '../assets/images/planets/saturn.svg'; // Import the image file for Saturn
import neptune from '../assets/images/planets/neptune.svg'; // Import the image file for Neptune
import uranus from '../assets/images/planets/uranus.svg'; // Import the image file for Uranus
import pluto from '../assets/images/planets/pluto.svg'; // Import the image file for Pluto

/**
 * Application state.
 *
 * @type {Object} AppState
 * @property {boolean} showSidebar - Indicates whether the sidebar is visible or not.
 * @property {string} namePlayer - The player's name.
 * @property {number} difficulty - The difficulty level.
 * @property {boolean} gameStarted - Indicates whether the game has started or not.
 * @property {boolean} namePlayerError - Indicates whether there is an error with the player's name.
 * @property {number} score - The score of the game.
 * @property {number} errors - The number of errors.
 * @property {Array<Object>} wrongQuestions - Array of Objects that contains wrong questions.
 * @property {number} punctuation - The punctuation.
 * @property {boolean} showResult - Indicates whether the result is visible or not.
 * @property {Object} choosenPlanet - The chosen planet object.
 * @property {string} choosenPlanet.name - The name of the chosen planet.
 * @property {number} choosenPlanet.id - The ID of the chosen planet.
 * @property {number} timer - The timer value.
 * @property {number} velocity - The velocity.
 * @property {Object} questionParams - The question parameters.
 * @property {number} questionParams.id - The ID of the question.
 * @property {string} questionParams.question - The question text.
 * @property {number} questionParams.difficulty - The difficulty level of the question.
 * @property {string} url - The URL for fetching questions.
 * @property {Object} requestParams - The request parameters.
 * @property {string} requestParams.namePlayer - The player's name in the request.
 * @property {number} requestParams.difficulty - The difficulty level in the request.
 * @property {Array} planets - Array of planet objects.
 * @property {string} planets.name - The name of the planet.
 * @property {string} planets.img - The image file for the planet.
 * @property {number} planets.id - The ID of the planet.
 */

export const AppState = {
  showSidebar: false,
  namePlayer: '',
  difficulty: 1,
  gameStarted: false,
  namePlayerError: false,
  score: 0,
  errors: 0,
  wrongQuestions: [],
  punctuation: 0,
  showResult: false,
  choosenPlanet: {
    name: '',
    id: 0,
  },
  timer: 0,
  velocity: 1,
  questionParams: {
    id: 0,
    question: '',
    difficulty: 1,
  },
  url: 'http://127.0.0.1:8000/questions',
  requestParams: {
    namePlayer: '',
    difficulty: 1,
  },
  planets: [
    {
      name: 'mercurio',
      img: mercury,
      id: 0,
    },
    {
      name: 'venus',
      img: venus,
      id: 1,
    },
    {
      name: 'terra',
      img: earth,
      id: 2,
    },
    {
      name: 'marte',
      img: mars,
      id: 3,
    },
    {
      name: 'jupiter',
      img: jupyter,
      id: 4,
    },
    {
      name: 'saturno',
      img: saturn,
      id: 5,
    },
    {
      name: 'urano',
      img: uranus,
      id: 6,
    },
    {
      name: 'netuno',
      img: neptune,
      id: 7,
    },
    {
      name: 'plutao',
      img: pluto,
      id: 8,
    },
  ],
};
