const p = document.querySelector("#para");
const btn = document.querySelector("#generate-btn");
const refreshBtn = document.querySelector("#refresh-btn");

const userFullName = document.querySelector(".user-full-name");
const userProfession = document.querySelector(".user-occupation");
const userImg = document.querySelector("#user-avatar");
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
  return `${fName.toLowerCase()}.${lName.toLowerCase()}@mail.com`;
};

// generates a random User and displays it to the screen
generateRandomUser = () => {
  const firstName = generateFirstName();
  const lastName = generateLastName();
  return {
    userFirstName: firstName,
    userLastName: lastName,
    userId: generateUserID(),
    userEmail: generateUserEmail(firstName, lastName),
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
  const fullName = `${userFirstName} ${userLastName}`;
  userFullName.textContent = fullName;
  userProfession.textContent = userOccupation;
};

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
const modalContent = document.createElement("p");
modalContent.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eos ullam voluptates, ducimus necessitatibus possimus impedit aperiam doloribus earum adipisci iure? Similique incidunt vitae harum molestiae accusamus provident sint sit.";

// modal user's id
const modalUserId = document.createElement("p");

// modal close btn
const modalCloseBtn = document.createElement("p");
modalCloseBtn.classList.add("modal-close-btn");
modalCloseBtn.innerText = "X";

modalDiv.appendChild(modalTitle);
modalDiv.appendChild(modalContent);
modalDiv.appendChild(modalCloseBtn);
modalDiv.appendChild(modalUserId);
modalContainer.appendChild(modalDiv);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});

// events
btn.addEventListener("click", displayUser);
refreshBtn.addEventListener("click", refreshScreen);
card.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", hideModal);
