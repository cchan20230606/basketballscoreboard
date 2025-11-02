let HomeCount = 0
let AwayCount = 0
let HomeFouls = 0
let AwayFouls = 0
let HomeCountEL = document.getElementById("score-home")
let AwayCountEL = document.getElementById("score-away")
let HomeFoulsEL = document.getElementById("home-foul")
let AwayFoulsEL = document.getElementById("away-foul")
let HomeFoulsLight = document.querySelectorAll("#home-foul .radio-light")
let AwayFoulsLight = document.querySelectorAll("#away-foul .radio-light")

function increment1toHome() {
    HomeCount += 1
    HomeCountEL.textContent = HomeCount
}

function increment2toHome() {
    HomeCount += 2
    HomeCountEL.textContent = HomeCount
}

function increment3toHome() {
    HomeCount += 3
    HomeCountEL.textContent = HomeCount
}

function homefoulbtn() {
      if (HomeFouls < HomeFoulsLight.length) {
      HomeFoulsLight[HomeFouls].classList.add("active");
     HomeFouls++;
     }
}

function awayfoulbtn() {
      if (AwayFouls < AwayFoulsLight.length) {
      AwayFoulsLight[AwayFouls].classList.add("active");
     AwayFouls++;
     }
}

function increment1toAway() {
    AwayCount += 1
    AwayCountEL.textContent = AwayCount
}

function increment2toAway() {
    AwayCount += 2
    AwayCountEL.textContent = AwayCount
}

function increment3toAway() {
    AwayCount += 3
    AwayCountEL.textContent = AwayCount
}

function Reset() {
    HomeCount = 0
    HomeCountEL.textContent = HomeCount
    AwayCount = 0
    AwayCountEL.textContent = AwayCount
    
}

function FoulReset() {
    for (let i = 0; i < HomeFoulsLight.length; i++) {
        HomeFoulsLight[i].classList.remove("active")
    }
    HomeFouls = 0
    for (let i = 0; i < AwayFoulsLight.length; i++) {
        AwayFoulsLight[i].classList.remove("active");
    }
    AwayFouls = 0
}
