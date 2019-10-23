var form = document.querySelector('.activity-form');
var activityCards = document.querySelector('.activity-cards');
var activityBtns = document.querySelector('.activity-btns');
var pushUpBtn = document.getElementById('push-up');
var highKickBtn = document.getElementById('high-kick');
var activityType = "";

form.addEventListener('submit', submitActivity);
activityBtns.addEventListener('click', selectActivity);

function selectActivity(event) {
  activityType = event.target.id;
  clearActivityButtons();
  event.target.classList.toggle(`active-${activityType}-btn`);
}

function clearActivityButtons() {
  highKickBtn.classList.remove('active-high-kick-btn');
  pushUpBtn.classList.remove('active-push-up-btn');
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
  clearActivityButtons();
}
