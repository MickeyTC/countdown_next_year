const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const setElemInnerText = (id, text) => {
  const elem = document.getElementById(id)
  elem.innerText = text
}

const countDown = () => {
  const thisYear = new Date().getFullYear()
  const now = Date.now()
  const newYear = new Date(0, 11, 31, 23, 59, 59).setFullYear(thisYear)
  const timeLeft = newYear - now

  setElemInnerText('title', `Countdown to Year ${thisYear + 1}`)
  setElemInnerText('days', Math.floor(timeLeft / DAY))
  setElemInnerText('hours', Math.floor((timeLeft % DAY) / HOUR))
  setElemInnerText('minutes', Math.floor((timeLeft % HOUR) / MINUTE))
  setElemInnerText('seconds', Math.floor((timeLeft % MINUTE) / SECOND))
}

const run = () => {
  countDown()
  setInterval(countDown, 1000)
}

run()
