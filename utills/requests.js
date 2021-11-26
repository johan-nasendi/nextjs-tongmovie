const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRead: {
        title: 'Top Read',
        url: `/movie/top_rated?api_key=${API_KEY}$language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedy: {
        title: 'Comedy',
        url: `#`
    },
    fetchHorror: {
        title: 'Horror',
        url: `#`
    },
    fetchRomance: {
        title: 'Romance',
        url: `#`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `#`
    },
    fetchScifi: {
        title: 'Sci-Fi',
        url: `#`
    },
    fetchWestrery: {
        title: 'Westrery',
        url: `#`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `#`
    },
    fetchtv: {
        title: 'TV Movie',
        url: `#`
    },
}