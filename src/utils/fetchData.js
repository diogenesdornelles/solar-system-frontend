/* eslint-disable no-useless-catch */
import axios from 'axios';

/**
 * Fetches data (a question) from the specified URL API using the provided request parameters.
 *
 * @async
 * @function fetchData
 * @param {string} url - The URL to fetch data from.
 * @param {Object} requestParams - The parameters for the request.
 * @param {string} requestParams.namePlayer - The player's name.
 * @param {number} requestParams.difficulty - The difficulty level.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 * @throws {Error} - If an error occurs during the data fetching process.
 */

const fetchData = async (url, requestParams) => {
  try {
    const result = await axios.get(
      `${url}/${requestParams.namePlayer}/${requestParams.difficulty}`,
    );
    if (result) {
      return result.data;
    } else {
      return {
        id: 0,
        question: '',
        difficulty: 1,
      };
    }
  } catch (e) {
    throw e;
  }
};

export default fetchData;
