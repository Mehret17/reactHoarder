import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/allStuff.json`)
      .then(res => {
        const allStuffs = [];
        if (res.data !==null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            allStuffs.push(res.data[fbKey]);
          });
        }
        resolve(allStuffs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getRequest};