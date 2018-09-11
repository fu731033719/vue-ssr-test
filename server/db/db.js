const sha1 = require('sha1')
const axios = require('axios')

const className = 'Todo'

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})
const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}
const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

module.exports = (appId, appKey) => {
  const getHeaders = () => {
    const now = Date.now()
    return {
      'x-APICloud-AppId': appId,
      'x-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
    }
  }
  return {
    async getAlltodos () {
      return handleRequest(await request.get(`/${className}`, {
        headers: getHeaders()
      }))
    }
  }
}
