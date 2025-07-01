var firebase = window.firebase;

const firebaseConfig = {
  apiKey: "AIzaSyBfQLJNG8wbLUBQm4i6Wu_7CZ2eT9QTARk",
  authDomain: "storeforyou-bf81a.firebaseapp.com",
  databaseURL:
    "https://storeforyou-bf81a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "storeforyou-bf81a",
  storageBucket: "storeforyou-bf81a.firebasestorage.app",
  messagingSenderId: "701492961630",
  appId: "1:701492961630:web:ff128f7f1199a38fa22fcf",
  measurementId: "G-WLJXQWPM7W",
};

firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log(db);

// *********** GET FORM DATA **************
const formElem = document.querySelector("#my_form");

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();
  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formElem);
  //
  const leadtype = formData.get("leadtype");
  const leaddate = formData.get("leaddate");
  const followuppdate = formData.get("followupdate");
  const sumdeal = formData.get("sumdeal");
  

  addlead(leadtype, leaddate, followuppdate, sumdeal);
});
function addlead(leadtype, leaddate, followuppdate, sumdeal) {
  console.log("new lead", leadtype);

  // Add a new document in collection "cities"
  db.collection("crm")
    .add({
      leadtype: leadtype,
      leaddate: leaddate,
      followuppdate: followuppdate,
      sumdeal: sumdeal,
      
    })
    .then(() => {
      console.log("Document successfullyup written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
