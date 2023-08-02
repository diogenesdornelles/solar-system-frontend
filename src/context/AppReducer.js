import AppActions from './AppActions';
import { AppState } from './AppState';

/**
 * Reducer states and actions from Context.
 *
 * @param {Object} state  - The application general state.
 * @param {string} action - The action to be switched.
 * @returns {Object} - The application general state.
 */

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case AppActions.SHOW_SIDEBAR: {
      const { payload } = action;
      return {
        ...state,
        showSidebar: payload,
      };
    }
    case AppActions.NAME_PLAYER: {
      const { payload } = action;
      return {
        ...state,
        namePlayer: payload,
      };
    }
    case AppActions.DIFFICULTY: {
      const { payload } = action;
      return {
        ...state,
        difficulty: payload,
      };
    }
    case AppActions.GAME_STARTED: {
      const { payload } = action;
      return {
        ...state,
        gameStarted: payload,
      };
    }
    case AppActions.NAME_PLAYER_ERROR: {
      const { payload } = action;
      return {
        ...state,
        namePlayerError: payload,
      };
    }
    case AppActions.SCORE: {
      const { payload } = action;
      return {
        ...state,
        score: payload,
      };
    }
    case AppActions.ERRORS: {
      const { payload } = action;
      return {
        ...state,
        errors: payload,
      };
    }
    case AppActions.WRONG_QUESTIONS: {
      const { payload } = action;
      return {
        ...state,
        wrongQuestions: payload,
      };
    }
    case AppActions.PUNCTUATION: {
      const { payload } = action;
      return {
        ...state,
        punctuation: payload,
      };
    }
    case AppActions.CHOOSEN_PLANET: {
      const { payload } = action;
      return {
        ...state,
        choosenPlanet: payload,
      };
    }
    case AppActions.TIMER: {
      const { payload } = action;
      return {
        ...state,
        timer: payload,
      };
    }
    case AppActions.VELOCITY: {
      const { payload } = action;
      return {
        ...state,
        velocity: payload,
      };
    }
    case AppActions.SHOW_RESULT: {
      const { payload } = action;
      return {
        ...state,
        showResult: payload,
      };
    }
    case AppActions.QUESTION_PARAMS: {
      const { payload } = action;
      return {
        ...state,
        questionParams: payload,
      };
    }
    case AppActions.REQUEST_PARAMS: {
      const { payload } = action;
      return {
        ...state,
        requestParams: payload,
      };
    }
    case AppActions.RESET: {
      return AppState;
    }
  }
  return { ...state };
};
