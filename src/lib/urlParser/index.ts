export const parseLanguageUrl = (githubUrl : string) => {
  const url = githubUrl.split('https://github.com/')
  url.unshift('https://api.github.com/repos/')
  url.push('/languages')
  return url.join('').replace(/(https?:\/\/)|(\/)+/g, '$1$2')
}
export const parseTopicUrl = (githubUrl : string)=>{
  const url = githubUrl.split('https://github.com/')
  url.unshift('https://api.github.com/repos/')
  url.push('/topics')
  return url.join('').replace(/(https?:\/\/)|(\/)+/g, '$1$2')
}