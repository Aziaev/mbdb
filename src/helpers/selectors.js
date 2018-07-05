export const artistRegistrationSelector = (state) => {
  if (state === null) {
    console.log('state is null');
    return false;
  }
  const data = {
    user: {
      name: state.name,
      surname: state.surname,
      patronymic: '',
      birthday: state.date,
      nickname: state.nickname,
      country: state.country,
      city: state.city,
      phoneNumber: `+7${state.phoneNumber}`,
      password: state.password1,
      email: state.email,
      creativity: state.creativity.value,
      instrument: state.instrument,
      genre: state.genre,
      isAgreementOfPersonalData: state.isAgreementOfPersonalData,
      isArtistContract: state.isArtistContract,
    }
  };
  return data;
};


export const listenerRegistrationSelector = (state) => {
  if (state === null) {
    console.log('state is null');
    return false;
  }
  const data = {
    user: {
      phoneNumber: state.phoneNumber,
      password: state.password1
    }
  };
  return data;
};
