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
  highKickBtn.classList.remove('active-high-kick-btn');
  event.target.classList.toggle('active-push-up-btn');
}

function selectHighKick() {
  activityType = "high-kick";
  pushUpBtn.classList.remove('active-push-up-btn');
  event.target.classList.toggle('active-high-kick-btn');
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
  highKickBtn.classList.remove('active-high-kick-btn');
  pushUpBtn.classList.remove('active-push-up-btn');
}
