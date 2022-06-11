export const api_config = {
  //For basic auth using .env file
  USERNAME: process.env.REACT_APP_USERNAME,
  PASSWORD: process.env.REACT_APP_PASSWORD,

  //Important!
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_VERSION: process.env.REACT_APP_API_VERSION,
}

//For basic auth using .env file
export const headers_auth = {
  Authorization: `Basic ${btoa(
    `${api_config.USERNAME}:${api_config.PASSWORD}`
  )}`,
}
