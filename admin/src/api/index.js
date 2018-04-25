const ErrCode = {}
ErrCode.OK = 0
ErrCode.UNAUTHORIZED = 10001

const HOST = ''
const URI = {}
URI.LOGIN = HOST + '/api/v1/auth/login'
URI.LOGOUT = HOST + '/api/v1/auth/logout'
URI.HOME = HOST + '/api/v1/home'

export default {
  ErrCode,
  URI
}
