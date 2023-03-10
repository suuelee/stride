import defaultAxios from 'axios';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

const axios = defaultAxios.create({
  //   baseURL: 'http://localhost:3000/',
  baseURL: 'http://ec2-35-89-191-240.us-west-2.compute.amazonaws.com:3000/',
  headers: {'Content-Type': 'application/json'},
});

const locationAxios = defaultAxios.create({
  baseURL: 'https://api.geoapify.com/v1/geocode/autocomplete',
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

export const getCoordinatesApi = async action => {
  try {
    const request = await locationAxios.get(
      `?text=${action}&apiKey=04093c26d8844a39ba4feab0e103e7bb`,
    );
    return request.data.features[0].geometry.coordinates;
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

export const sendLiveLocationApi = async action => {
  try {
    var data = JSON.stringify({
      _id: action.payload._id,
      userID: action.payload.userID,
      striderID: action.payload.striderID,
      timestamp: action.payload.timestamp,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    });
    const request = await axios.post(`location/addLocation`, data);
    return request;
  } catch (err) {
    return console.error(err);
  }
};

export const getLiveLocationApi = async action => {
  try {
    var data = JSON.stringify({
      _id: action.payload._id,
    });
    const request = await axios.get(`location/getLocation`, data);
    return request;
  } catch (err) {
    return console.error(err);
  }
};
