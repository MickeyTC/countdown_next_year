const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const setElemInnerText = (id, text) => {
  const elem = document.getElementById(id)
  elem.innerText = text
}

const getTimeLeft = () => {
  const thisYear = new Date().getFullYear()
  const now = Date.now()
  const newYear = new Date(0, 11, 31, 23, 59, 59).setFullYear(thisYear)
  const timeLeft = newYear - now
  return {
    nextYear: thisYear + 1,
    days: Math.floor(timeLeft / DAY),
    hours: Math.floor((timeLeft % DAY) / HOUR),
    minutes: Math.floor((timeLeft % HOUR) / MINUTE),
    seconds: Math.floor((timeLeft % MINUTE) / SECOND),
  }
}

const countDown = () => {
  const { nextYear, days, hours, minutes, seconds } = getTimeLeft()

  setElemInnerText('title', `Countdown to Year ${nextYear}`)
  setElemInnerText('days', days)
  setElemInnerText('hours', hours)
  setElemInnerText('minutes', minutes)
  setElemInnerText('seconds', seconds)
}

const run = () => {
  countDown()
  setInterval(countDown, 1000)
}

run()
