/**
 * Actions for the application.
 *
 * @constant {Object} AppActions
 * @property {string} SHOW_SIDEBAR - Action type for changing the visibility of the sidebar.
 * @property {string} NAME_PLAYER - Action type for changing the player's name.
 * @property {string} DIFFICULTY - Action type for changing the difficulty level.
 * @property {string} GAME_STARTED - Action type for changing the game started status.
 * @property {string} NAME_PLAYER_ERROR - Action type for changing the player's name error.
 * @property {string} SCORE - Action type for changing the score.
 * @property {string} ERRORS - Action type for changing the errors count.
 * @property {string} WRONG_QUESTIONS - Action type for changing the count of wrong questions.
 * @property {string} PUNCTUATION - Action type for changing the punctuation.
 * @property {string} CHOOSEN_PLANET - Action type for changing the chosen planet.
 * @property {string} TIMER - Action type for changing the timer.
 * @property {string} GAME_ENDED - Action type for changing the game ended status.
 * @property {string} SHOW_RESULT - Action type for changing the visibility of the result.
 * @property {string} QUESTION_PARAMS - Action type for changing the question parameters.
 * @property {string} URL - Action type for changing the URL.
 * @property {string} REQUEST_PARAMS - Action type for changing the request parameters.
 * @property {string} VELOCITY - Action type for changing the velocity.
 * @property {string} Reset - Action type for return initial state.
 */
const AppActions = {
  SHOW_SIDEBAR: 'CHANGE_SHOW_SIDEBAR',
  NAME_PLAYER: 'CHANGE_NAME_PLAYER',
  DIFFICULTY: 'CHANGE_DIFFICULTY',
  GAME_STARTED: 'CHANGE_GAME_STARTED',
  NAME_PLAYER_ERROR: 'CHANGE_NAME_PLAYER_ERROR',
  SCORE: 'CHANGE_SCORE',
  ERRORS: 'CHANGE_ERRORS',
  WRONG_QUESTIONS: 'CHANGE_WRONG_QUESTIONS',
  PUNCTUATION: 'CHANGE_PUNCTUATION',
  CHOOSEN_PLANET: 'CHANGE_CHOOSEN_PLANET',
  TIMER: 'CHANGE_TIMER',
  GAME_ENDED: 'CHANGE_GAME_ENDED',
  SHOW_RESULT: 'CHANGE_SHOW_RESULT',
  QUESTION_PARAMS: 'CHANGE_QUESTION_PARAMS',
  URL: 'CHANGE_URL',
  REQUEST_PARAMS: 'CHANGE_REQUEST_PARAMS',
  VELOCITY: 'CHANGE_VELOCITY',
  RESET: 'CHANGE_RESET',
};

export default AppActions;
