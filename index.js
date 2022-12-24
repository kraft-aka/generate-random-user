const p = document.querySelector("#para");
const btn = document.querySelector("#generate-btn");
const refreshBtn = document.querySelector("#refresh-btn");

const usersNames = [
  "Amir",
  "Ivan",
  "Jorg",
  "Kevin",
  "John",
  "Mustafa",
  "Adrian",
];
const usersLastNames = [
  "Doe",
  "Boe",
  "Coe",
  "Koe",
  "Joe",
  "Hoe",
  "Loe",
  "Goe",
  "Poe",
];

const usersOccupation = [
  "doctor",
  "driver",
  "lawyer",
  "teacher",
  "houskeeper",
  "architect",
  "backer",
  "sales manager",
  "artist",
  "musician",
  "pilot",
  "constructor",
  "engineer",
  "dentist",
  "pharmasist",
  "programmer",
  "gamer",
  "youtuber",
  "writer",
  "painter",
  "web designer",
];

// generates a random number for userId
const generateUserID = () => {
  let ID = "";
  for (let i = 0; i < 10; i++) {
    ID += Math.floor(Math.random() * 10);
  }
  return ID;
};

// generates a ranodm user first name
const generateFirstName = () => {
  return usersNames[Math.floor(Math.random() * usersNames.length)];
};

// generates a random occupation
const generateUserOccupation = () => {
  return usersOccupation[Math.floor(Math.random() * usersOccupation.length)];
};

// generates a random user last name
const generateLastName = () => {
  return usersLastNames[Math.floor(Math.random() * usersLastNames.length)];
};

// generates a user email
const generateUserEmail = (fName, lName) => {
  fName = generateFirstName();
  lName = generateLastName();
  let email = `${fName.toLowerCase()}.${lName.toLowerCase()}@mail.com`;
  return email;
};

// generates a random User and displays it to the screen
generateRandomUser = () => {
  return {
    userFirstName: generateFirstName(),
    userLastName: generateLastName(),
    userId: generateUserID(),
    userEmail: generateUserEmail(),
    userOccupation: generateUserOccupation(),
    userAvatar: generateAvatar(),
  };
};

// display user info
const displayUser = (e) => {
  e.preventDefault();
  let { userFirstName, userLastName, userId, userEmail, userOccupation } =
    generateRandomUser();

  // new array to store values received from function to be saved to the localstorage
  const user = [userFirstName, userLastName, userId, userEmail, userOccupation];

  localStorage.setItem("user", user);
  p.innerHTML = `user_name: ${userFirstName}*** 
  user_last_name: ${userLastName}***
  user_id: ${userId}***
  user_email: ${userEmail}***
  user_occupation: ${userOccupation}`;
};

// creates img
const createImgTag = () => {
  const img = document.createElement("img");
  img.setAttribute("src", "alt");
  img.classList.add("avatar");
  document.body.appendChild(img);
  return img;
};

// generates random avatar for user
const generateAvatar = () => {
  const name = generateFirstName();
  const img = createImgTag();
  const url = `https://avatars.dicebear.com/api/miniavs/${name}.svg`;
  return (img.src = url);
};

const refreshScreen = (e) => {
  e.preventDefault();
  window.location.reload();
  localStorage.removeItem("user");
};

btn.addEventListener("click", displayUser);
refreshBtn.addEventListener("click", refreshScreen);
