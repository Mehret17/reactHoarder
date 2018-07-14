import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/allStuff.json`)
      .then(res => {
        const items = [];
        if (res.data !==null)
      })
  })
}