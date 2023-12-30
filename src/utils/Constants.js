export const NETFLIX_LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";
export const USER_AVATAR = "https://avatars.githubusercontent.com/u/142130700?v=4";
export const LOGIN_PAGE_BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const IMG_CDN  = "https://image.tmdb.org/t/p/w500";
export const OPEN_AI_GPT_KEY = process.env.REACT_APP_OPEN_AI_GPT_KEY;


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,

    }
  };