import axios from 'axios';
import constants from '../constants';

const postRequest = (myStuff) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/myStuff.json`, myStuff)
      .then((res) => {
        resolve(res);
      })       
      .catch((err) => {
        reject(err);
      });
  });
};


  // const getRequest = (uid) => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(`${constants.firebaseConfig.databaseURL}/allStuff.json?orderBy="uid"&equalTo="${uid}"`)
  //       .then(res => {
  //         const  myStuff = [];
  //         if (res.data !== null) {
  //           Object.keys(res.data).forEach(fbKey => {
  //             res.data[fbKey].id = fbKey;
  //             myStuff.push(res.data[fbKey]);
  //           });
  //         }
  //         resolve(myStuff);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   });
  // };

export default {postRequest};
