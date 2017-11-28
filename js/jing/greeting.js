var GREETING_TEXT = {
  MORNING:   '早上好',
  NOON:      '中午好',
  AFTERNOON: '下午好',
  EVENING:   '晚上好'
}
var greetingText = $('#greetingText')
var greetingTarget = $('#greetingTarget')
var intervalTime = $('#intervalTime');


// main
(function () {
  greetingText.text('你在看我吗 (￣▽￣)~*')

  for (var i=0; i<6; i++) {
    setTimeout(iInterval(i), 1000*i)
  }
})()


function iInterval(i) {
  var k = i

  return function () {
    intervalTime.text((5-k) + '...')

    if (k === 5) {
      intervalTime.text('')
      greetingText.text(getGreetingText())
      greetingTarget.show()
    }
  }
}

function getGreetingText() {
  var hour = getHour()

  if (hour < 10 && hour > 4) {
    return GREETING_TEXT.MORNING
  }

  if (hour < 13 && hour > 9) {
    return GREETING_TEXT.NOON
  }

  if (hour < 18 && hour > 12) {
    return GREETING_TEXT.AFTERNOON
  }

  if (hour < 25 && hour > 17) {
    return GREETING_TEXT.EVENING
  }
}

function getHour() {
  var data = new Date()

  return data.getHours()
}
