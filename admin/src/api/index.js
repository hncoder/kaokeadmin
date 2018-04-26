const ErrCode = {}
ErrCode.OK = 0
ErrCode.UNAUTHORIZED = 10001

const URI = {}
URI['HOME'] = '/api/v1/set/home'

URI['AUTH_LOGIN'] = '/api/v1/auth/login'
URI['AUTH_LOGOUT'] = '/api/v1/auth/logout'

URI['SET'] = '/api/v1/set/<int:set_id>'
URI['SET_ALL'] = '/api/v1/set/all'
URI['SET_ADD'] = '/api/v1/set/add'
URI['SET_MOD'] = '/api/v1/set/mod/<int:set_id>'
URI['SET_DEL'] = '/api/v1/set/del/<int:set_id>'
URI['SET_ITEMS'] = '/api/v1/set/items/<int:set_id>'

URI['ITEM'] = '/api/v1/item/<int:item_id>'
URI['ITEM_ADD'] = '/api/v1/item/add/<int:set_id>'
URI['ITEM_DEL'] = '/api/v1/item/del/<int:item_id>'
URI['ITEM_MOD'] = '/api/v1/item/mod/<int:item_id>'

export default {
  ErrCode,
  URI
}
