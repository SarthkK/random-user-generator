function fetchinguser(){
    showspinner();
    fetch('https://randomuser.me/api/')
    .then(n => n.json())
    .then(n => {
        hidespinner();
        displayuser(n.results[0])});
}
function showspinner(){
    document.querySelector('.spinner').style.display = 'block';
}
function hidespinner(){
    document.querySelector('.spinner').style.display = 'none';
}
function displayuser(user){
    if(user.gender === 'male'){
        document.body.style.background = 'steelblue';
    } else {
        document.body.style.background = 'rebeccapurple';
    }
    const dispuser = document.querySelector('#user');
    dispuser.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src=${user.picture.large}
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location. city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>`
}

document.querySelector("#generate").addEventListener('click', fetchinguser);