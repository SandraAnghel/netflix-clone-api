
const API_KEY = "7110474d10ddd2046d6f8727e9e216c8";

const requests = {
    fetchTrending: `/trending/all/week?api_key=7110474d10ddd2046d6f8727e9e216c8&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=7110474d10ddd2046d6f8727e9e216c8&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=7110474d10ddd2046d6f8727e9e216c8&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=7110474d10ddd2046d6f8727e9e216c8&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=7110474d10ddd2046d6f8727e9e216c8&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=7110474d10ddd2046d6f8727e9e216c8&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=7110474d10ddd2046d6f8727e9e216c8&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=7110474d10ddd2046d6f8727e9e216c8&with_genres=99`
};

export default requests;