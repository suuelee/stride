import defaultAxios from 'axios';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'Content-Type': 'application/json'},
});

export const postTripApi = async action => {
  try {
    var data = JSON.stringify({
      id: uuid(),
      userId: '1',
      striderId: null,
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

export const getStrideRequestApi = async () => {
  try {
    const request = await axios.get(`usertrip/walkRequests`);
    return request;
  } catch (err) {
    return console.error(err);
  }
};

export const acceptStrideRequestApi = async action => {
  try {
    var data = JSON.stringify({
      _id: action.payload,
      striderId: '1234', // TODO: get strider id from redux,
    });
    const request = await axios.post(`usertrip/acceptTrip`, data);
    return request;
  } catch (err) {
    return console.error(err);
  }
};

export const startStrideRequestApi = async action => {
  try {
    var data = JSON.stringify({
      _id: action.payload,
    });
    const request = await axios.post(`usertrip/startTrip`, data);
    return request;
  } catch (err) {
    return console.error(err);
  }
};

export const endStrideRequestApi = async action => {
  try {
    var data = JSON.stringify({
      id: action.payload,
    });
    const request = await axios.post(`usertrip/end`, data);
    return request;
  } catch (err) {
    return console.error(err);
  }
};

export const getWalkerApi = async action => {
  try {
    const walker = await axios.get(`profile/getProfile/${action.payload}`);
    return walker;
  } catch (err) {
    return console.error(err);
  }
};
