import constants from "./constants/index"
import HTTPAsync from "../utils/HTTPAsync"


const getCurrentUserData = () => {
  return dispatch => {
    return dispatch(HTTPAsync.post('webapi/artist/personal', {
      sessionId: localStorage.getItem("sessionId")
    }, constants.ARTIST_RECEIVED));
  }
}

const saveCardNumber = (cardNumber) => {
  return dispatch => {
    dispatch({type: constants.CARD_SAVING});
    return dispatch(HTTPAsync.post('mapi/artist/card.update', {
      cardNumber,
      sessionId: localStorage.getItem("sessionId")
    }, constants.CARD_SAVED))
      .then(() => {
        getCurrentUserData()(dispatch)
      })
  }
}


const savePhoneNumber = (phoneNumber) => {
  return dispatch => {
    dispatch({type: constants.CARD_SAVING});
    return dispatch(HTTPAsync.post('webapi/artist/editing/phone.change', {
      phone_number: phoneNumber,
      sessionId: localStorage.getItem("sessionId")
    }, constants.CARD_SAVED))
      .then(() => {
        getCurrentUserData()(dispatch)
      })
  }
}


const withdraw = (withdrawAmount) => {
  return dispatch => {
    dispatch({type: constants.WITHDRAW_REQUEST_START});
    return dispatch(HTTPAsync.post('mapi/artist/withdraw', {
      sum: withdrawAmount,
      sessionId: localStorage.getItem("sessionId")
    }, constants.WITHDRAW_SUCCESS))
      .then((data) => {
        if (data.status !== 'ERROR') {
          getCurrentUserData()(dispatch)
        }
      })
  }
}

const saveProfile = (newProfileData) => {
  return dispatch => {
    dispatch({type: constants.PROFILE_SAVE_START});
    const personalData = {
      name: newProfileData.name,
      surname: newProfileData.surname,
      patronymic: newProfileData.patronymic,
      nickname: newProfileData.nickname,
      country: newProfileData.country,
      city: newProfileData.city,
      // todo: привести API к консистентности?
      public_name: newProfileData.name_representation === 'FULLNAME' ? 'name' : 'nickname',
      creativity: newProfileData.creativity,
      instrument: newProfileData.instrument,
      genre: newProfileData.genre,
      aboutMe: newProfileData.aboutMe,
      name_representation: newProfileData.name_representation
    }

    const phoneNumber = newProfileData.phoneNumber;
    const cardNumber = newProfileData.cardNumber;

    return dispatch(HTTPAsync.post('webapi/artist/editing/personal', {
      user: personalData,
      sessionId: localStorage.getItem("sessionId")
    }, constants.PROFILE_SAVE_SUCCESS))
      .then(data => {
        if(phoneNumber) {
          savePhoneNumber(phoneNumber)(dispatch);
        }
        if (cardNumber) {
          saveCardNumber(cardNumber)(dispatch);
        }
        return data
      })
      .then((data) => {
        if (data.status !== 'ERROR') {
          getCurrentUserData()(dispatch)
        }
      })
  }
}

export default {
  getCurrentUserData,
  saveCardNumber,
  withdraw,
  saveProfile
}
