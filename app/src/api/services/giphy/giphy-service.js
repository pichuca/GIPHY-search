/**
 * GIPHY service.
 * Get data from GIPHY API.
 */
import GIPHYAPIClient from 'giphy-js-sdk-core';

const API_KEY = 'onnDyCJfWZD6YscmKY1c8148cJjbJ8DN';
const client = GIPHYAPIClient(API_KEY);

class GiphyService {
  static getTrending() {
    return client.trending('gifs', { limit: 10 })
      .then(((response) => {
        return response.data;
      }))
      .catch((error) => {
        console.log(error);
      });
  }

  static searchQuery(query) {
    return client.search('gifs', { 'q': query, limit: 20 })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default GiphyService;