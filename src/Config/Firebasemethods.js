
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import app from "./Firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app);


let userSignUp = (obj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password, obj.userType)
      .then((res) => {
        let uid = res.user.uid;
        obj.id = uid;
        const userReffernce = ref(db, `users/${obj.id}/`);
        set(userReffernce, obj)
          .then(() => {
            resolve("User Created and data send Successfully ...");
          })
          .catch((err) => {
            reject(err.message);
          });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

let userLogin = (obj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password, obj.userType).then((res)=>{
      const reference = ref(db, `users/${res.user.uid}`);
      onValue(reference, (data)=>{
        if(data.exists()){
          resolve(data.val());
        }else{
          reject("Data not found");
        }
      })
    })
    .catch((err)=>{
      reject(err.message);
    })
  }) 
};

let checkAuth =()=>{
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth,(data) =>{
      if (data) {
        const email = data.email;
        resolve(email);
      } else {
        reject("User Not Login")
      }
    })
  });
}

let SignOut =()=>{
  
    signOut(auth).then(() => {
      console.log("User Sign Out Successfully");
      
    }).catch((err) => {
      console.log("User sign out Error",err);
    });

}

let getFbData = (nodeName,obj, id) => {
 
  let reference = ref(db, `${nodeName}/${id ? id : ""}/`);
  return new Promise((resolve, reject) => {
    onValue(reference, (dt) => {
      if (dt.exists()) {
        if (id) {
          resolve(dt.val());
        } else {
          resolve(Object.values(dt.val()));
        }
      } else {
        reject("no Data Found");
      }
    });
  });

};

let CustomPostFb = (nodeName, obj)=>{
  const reference = ref(db, nodeName);
  set(reference,obj)
  .then(()=>{

  }).catch(()=>{

  })
return

}

let postFbData = (nodeName, obj, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      //post new Data
      let reference = ref(db, `${nodeName}/${id ? id : ""}`);
      set(reference, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      //edit existing data
      let keyRef = ref(db, `${nodeName}`);
      obj.id = push(keyRef).key;
      let postRef = ref(db, `${nodeName}/${obj.id}`);
      set(postRef, obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};



let editFbData = () => {};
let deleteFbData = () => {};

export {
  checkAuth,
  userSignUp,
  userLogin,
  getFbData,
  postFbData,
  editFbData,
  deleteFbData,
  SignOut,
  CustomPostFb,
};
