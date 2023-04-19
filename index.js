const p = document.querySelector("#para");
const btn = document.querySelector("#generate-btn");
const refreshBtn = document.querySelector("#refresh-btn");

const userFullName = document.querySelector(".user-full-name");
const userProfession = document.querySelector(".user-occupation");
const userImg = document.querySelector("#user-avatar");
const userEmailEl = document.querySelector(".user-email");
const userIdEl = document.querySelector('.user-id')
const modalContainer = document.querySelector("#modal-container");
const card = document.querySelector(".card");

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
const generateUserID = () => Math.floor(Math.random() * 100000);

// gets random item from array
const getRandomItemFromArray = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

// generates a user email
const generateUserEmail = (firstName, lastName) => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mail.com`;
};

// generates random avatar for user
const generateAvatar = () => {
  const name = getRandomItemFromArray(usersNames);
  const url = `https://avatars.dicebear.com/api/miniavs/${name}.svg`;
  return (userImg.src = url);
};

// generates a random User and displays it to the screen
generateRandomUser = () => {
  const firstName = getRandomItemFromArray(usersNames);
  const lastName = getRandomItemFromArray(usersLastNames);
  return {
    userFirstName: firstName,
    userLastName: lastName,
    userId: generateUserID(),
    userEmail: generateUserEmail(firstName, lastName),
    userOccupation: getRandomItemFromArray(usersOccupation),
    userAvatar: generateAvatar(),
  };
};

// display user info
const displayUser = (e) => {
  e.preventDefault();
  const { userFirstName, userLastName, userId, userEmail, userOccupation } =
    generateRandomUser();
  // new array to store values received from function to be saved to the localstorage
  const user = [userFirstName, userLastName, userId, userEmail, userOccupation];

  localStorage.setItem("user", user);
  const fullName = `${userFirstName} ${userLastName}`;
  userFullName.innerHTML = `<i>user name</i>: <strong>${fullName}</strong>`;
  userProfession.innerHTML = `<i>profession</i>: <strong>${userOccupation}</strong>`;
  userEmailEl.innerHTML = `<i>email</i>: <strong>${userEmail}</strong>`;
  userIdEl.innerHTML = `<i>id</i>: <strong>${userId}</strong>`
};

// refreshes the screen
const refreshScreen = (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  window.location.reload();
};

// show modal
const showModal = () => {
  modalContainer.classList.add("is-visible");
};

// hide modal
const hideModal = () => {
  modalContainer.classList.remove("is-visible");
};

// modal
const modalDiv = document.createElement("div");
modalDiv.classList.add("modal-content");

// modal title
const modalTitle = document.createElement("h2");
modalTitle.innerText = "User Info";

// modal content
const modalContent = document.createElement("div");

// display data in modal //must be reveised
const modalData = () => {
  const { userFirstName, userLastName, userId, userEmail, userOccupation } =
    generateRandomUser();
  const data = `<ul>
  <li>user full name: ${userFirstName} ${userLastName}<li>
  <li>user id: ${userId}<li>
  <li>user email: ${userEmail}<li>
  <li>user profession: ${userOccupation}<li>
  </ul>`;
  modalContent.innerHTML = data;
};

// modal close btn
const modalCloseBtn = document.createElement("p");
modalCloseBtn.classList.add("modal-close-btn");
modalCloseBtn.innerText = "X";

modalDiv.appendChild(modalTitle);
modalDiv.appendChild(modalContent);
modalDiv.appendChild(modalCloseBtn);
modalContainer.appendChild(modalDiv);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});

// events
btn.addEventListener("click", displayUser);
refreshBtn.addEventListener("click", refreshScreen);
card.addEventListener("click", () => {
  showModal();
  modalData();
});
modalCloseBtn.addEventListener("click", hideModal);
