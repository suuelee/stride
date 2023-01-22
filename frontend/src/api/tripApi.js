import defaultAxios from 'axios';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'Content-Type': 'application/json'},
});

export const postTripApi = async action => {
  try {
    console.log(action);
    var data = JSON.stringify({
      id: uuid(),
      userId: 1,
      striderId: 2,
      pickupAddress: action.payload.pickup,
      dropoffAddress: action.payload.destination,
      status: 'pending',
      createdTime: new Date(),
      pickupTime: null,
      dropoffTime: null,
    });

    const trip = await axios.post('usertrip/location/', data);
    return trip;
  } catch (err) {
    return console.error(err);
  }
};

export const getTripApi = async action => {
    try {
      const trip = await axios.get(`usertrip/latest/${action.payload.userId}`);
      return trip;
    } catch (err) {
      return console.error(err);
    }
  };
