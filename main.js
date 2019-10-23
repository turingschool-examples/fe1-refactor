var form = document.querySelector('.activity-form');
var activityCards = document.querySelector('.activity-cards');
var pushUpBtn = document.getElementById('push-up');
var highKickBtn = document.getElementById('high-kick');
var activityType = "";

form.addEventListener('submit', submitActivity);
pushUpBtn.addEventListener('click', selectPushUp);
highKickBtn.addEventListener('click', selectHighKick);

function selectPushUp(event) {
  activityType = "push-up";
  highKickBtn.style.color = "black";
  highKickBtn.style.borderColor = "#C1C0C0";
  highKickBtn.style.backgroundColor = "white";
  event.target.style.backgroundColor = "#DBFFE3";
  event.target.style.color = "#00560C";
  event.target.style.borderColor = "#DBFFE3";
}

function selectHighKick() {
  activityType = "high-kick";
  pushUpBtn.style.color = "black";
  pushUpBtn.style.borderColor = "#C1C0C0";
  pushUpBtn.style.backgroundColor = "white";
  event.target.style.backgroundColor = "#EBEBFF";
  event.target.style.color = "#2B006B";
  event.target.style.borderColor = "#EBEBFF";
}

function submitActivity(event) {
  event.preventDefault();
  var date = document.getElementById('date').value;

  if (activityType === "push-up") {
    activityCards.innerHTML += `
      <section class="card push-up-card">
        <h2>Push Ups</h2>
        <time>${date}</time>
      </section>
    `;
  } else if (activityType === "high-kick") {
    activityCards.innerHTML += `
      <section class="card high-kick-card">
        <h2>High Kicks</h2>
        <time>${date}</time>
      </section>
    `;
  }
  form.reset();
  highKickBtn.style.background = "white";
  highKickBtn.style.borderColor = "#C1C0C0";
  highKickBtn.style.backgroundColor = "white";
  
  pushUpBtn.style.background = "white";
  pushUpBtn.style.color = "black";
  pushUpBtn.style.borderColor = "#C1C0C0";
}
