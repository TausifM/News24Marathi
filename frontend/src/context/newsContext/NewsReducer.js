const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_NEWS_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_NEWS_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_NEWS_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_NEWS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_NEWS_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_NEWS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_NEWS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_NEWS_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_NEWS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_NEWS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_NEWS_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_NEWS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MovieReducer;
