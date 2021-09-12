// setInterval(setTime, 1000)

const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')


setInterval(()=>{
  setTime()
}, 1000)

 function setTime(){
  const now = new Date()

  const seconds = now.getSeconds()/60;
  const minutes = (seconds + now.getMinutes())/60
  const hours = (minutes + now.getHours())/12

  // addTime = () => {

  // }

  function addTime(element, value){
    element.style.transform = `translate(-50%) rotate(${value*360}deg)`
  }

  addTime(hourHand, hours)
  addTime(minuteHand, minutes)
  addTime(secondHand, seconds)
 
console.log(now.getHours())
 }
 setTime()

