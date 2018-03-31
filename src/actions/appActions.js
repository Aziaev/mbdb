import constants from './constants'

export default {
  activateMenuItem: (item) => {
    return {
      type: constants.ACTIVATE_MENU_ITEM,
      data: item
    }
  }
}
