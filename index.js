const p = document.querySelector("#para");
const btn = document.querySelector("#generate-btn");

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

// generates a random number for userId
const generateUserID = () => Math.floor(Math.random() * 200);

// generates a ranodm user first name
const generateFirstName = () => {
  return usersNames[Math.floor(Math.random() * usersNames.length)];
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

generateFirstName();
generateLastName();
generateUserID();
//console.log(generateUserID());
//p.innerHTML = generateUserEmail();

// generates a random User and displays it to the screen
generateRandomUser = () => {
  return {
    userFirstName: generateFirstName(),
    userLastName: generateLastName(),
    userId: generateUserID(),
    userEmail: generateUserEmail(),
    userAvatar: generateAvatar(),
  };
};

// display user info
const displayUser = (e) => {
  e.preventDefault();
  let { userFirstName, userLastName, userId, userEmail, userAvatar } =
    generateRandomUser();

  // new array to store values received from function to be saved to the localstorage
  const user = [userFirstName, userLastName, userId, userEmail];

  localStorage.setItem("user", user);
  p.innerHTML = `user_name: ${userFirstName}*** 
  user_last_name: ${userLastName}***
  user_id: ${userId}***
   user_email: ${userEmail}***
   user_avatar: ${userAvatar}`;
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

btn.addEventListener("click", displayUser);
