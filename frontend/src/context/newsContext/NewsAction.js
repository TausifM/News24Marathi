export const getMoviesStart = () => ({
  type: "GET_NEWS_START",
});

export const getMoviesSuccess = (movies) => ({
  type: "GET_NEWS_SUCCESS",
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: "GET_NEWS_FAILURE",
});

export const createMovieStart = () => ({
  type: "CREATE_NEWS_START",
});

export const createMovieSuccess = (movie) => ({
  type: "CREATE_NEWS_SUCCESS",
  payload: movie,
});

export const createMovieFailure = () => ({
  type: "CREATE_NEWS_FAILURE",
});

export const updateMovieStart = () => ({
  type: "UPDATE_NEWS_START",
});

export const updateMovieSuccess = (movie) => ({
  type: "UPDATE_NEWS_SUCCESS",
  payload: movie,
});

export const updateMovieFailure = () => ({
  type: "UPDATE_NEWS_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_NEWS_START",
});

export const deleteMovieSuccess = (id) => ({
  type: "DELETE_NEWS_SUCCESS",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_NEWS_FAILURE",
});
