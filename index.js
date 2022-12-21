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
generateRandomUser = () => {};

// display user info
const displayUser = (e) => {
  e.preventDefault();
  p.innerHTML = `user_name: ${generateFirstName()}*** 
  user_last_name: ${generateLastName()}***
  user_id: ${generateUserID()}***
   user_email: ${generateUserEmail()}***
   user_avatar: ${generateAvatar()}`;
};

// generates random avatar for user
const generateAvatar = () => {
  const name = generateFirstName();
  const img = document.createElement('img');
  img.setAttribute('src', 'alt');
  img.classList.add('avatar');
  document.body.appendChild(img)
  const url = `https://avatars.dicebear.com/api/personas/${name}.svg`
  return img.src = url;
}



btn.addEventListener("click", displayUser);
