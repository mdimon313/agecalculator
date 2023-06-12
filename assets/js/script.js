function calculate() {
  setInterval(() => {
    // input Birth Date
    let birthdate = new Date(document.getElementById("birthdate").value);

    // getTime
    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();

    let ageInS = ageInMs / 1000; // to seconds
    let ageInMins = ageInS / 60; // to Minute
    let ageInHrs = ageInMins / 60; // To Hours
    let ageInDays = ageInHrs / 24; // to days
    let ageInMonths = ageInDays / 30.4375; // to Months
    let ageInYears = ageInMonths / 12; // to Years

    document.querySelector("#years").innerHTML = Math.floor(ageInYears);
    document.querySelector("#months").innerHTML = Math.floor(ageInMonths % 12);
    document.querySelector("#days").innerHTML = Math.floor(ageInDays % 30.4375);
    document.querySelector("#hours").innerHTML = Math.floor(ageInHrs % 24);
    document.querySelector("#minutes").innerHTML = Math.floor(ageInMins % 60);
    document.querySelector("#seconds").innerHTML = Math.floor(ageInS % 60);
  }, 1000);
}

function reset() {
  window.location.reload();
}
