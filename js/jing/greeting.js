var GREETING_TEXT = {
  MORNING: '早上好',
  NOON:    '中午好',
  EVENING: '晚上好'
}

var greetingText = $('#greetingText')

greetingText.text(getGreetingText())

function getGreetingText() {
  var hour = getHour()

  if (hour < 10 && hour > 4) {
    return GREETING_TEXT.MORNING
  }

  if (hour < 13 && hour > 9) {
    return GREETING_TEXT.NOON
  }

  if (hour < 25 && hour > 12) {
    return GREETING_TEXT.EVENING
  }
}

function getHour() {
  var data = new Date()

  return data.getHours()
}
