const p = document.querySelector("#para");
const btn = document.querySelector("#generate-btn");
const refreshBtn = document.querySelector("#refresh-btn");

const userFullName = document.querySelector('.user-full-name');
const userProfession = document.querySelector('.user-occupation');
const userImg = document.querySelector('#user-avatar');
const modalContainer = document.querySelector('#modal-container')
const card = document.querySelector('.card')

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
  const fullName = `${userFirstName} ${userLastName}`
  userFullName.textContent = fullName;
  userProfession.textContent = userOccupation;
};

// // creates img
// const createImgTag = () => {
//   const img = document.createElement("img");
//   img.setAttribute("src", "alt");
//   img.classList.add("avatar");
//   document.body.appendChild(img);
//   return img;
// };

// generates random avatar for user
const generateAvatar = () => {
  const name = generateFirstName();
  const url = `https://avatars.dicebear.com/api/miniavs/${name}.svg`;
  return (userImg.src = url);
};

// refreshes the screen
const refreshScreen = (e) => {
  e.preventDefault();
  window.location.reload();
  localStorage.removeItem("user");
};

// shows modal
const showModal = () => {
  modalContainer.textContent = ''
  modalContainer.classList.add('is-visible');
}

// hides modal
const hideModal = () => {
  modalContainer.classList.remove('is-visible')
}

// modal container
const modalDiv = document.createElement('div');
modalDiv.classList.add('modal-content');

// modal title
const modalTitle = document.createElement('h2');
modalTitle.textContent =  2 //`${generateFirstName()}'s profile`

// modal user's id
// const modalUserId = document.createElement('p');
// modalUserId.textContent = generateUserID();

// modal user's email
// const modalUserEmail = document.createElement('p');
// modalUserEmail.textContent = generateUserEmail();

// modal close btn
const modalCloseBtn = document.createElement('p');
modalCloseBtn.textContent = 'x';
modalCloseBtn.classList.add('modal-close-btn');

modalDiv.appendChild(modalTitle);
// modalDiv.appendChild(modalUserId);
// modalDiv.appendChild(modalUserEmail);
modalDiv.appendChild(modalCloseBtn);
modalContainer.appendChild(modalDiv);



window.addEventListener('keydown', (e)=> {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
})

// events
btn.addEventListener("click", displayUser);
refreshBtn.addEventListener("click", refreshScreen);
card.addEventListener('click', showModal)
modalCloseBtn.addEventListener('click', hideModal)
