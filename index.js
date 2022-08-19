// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(option = "go to the office") {
  return `This Monday, I will ${option}.`
}
mondayWork();

function wrapAdjective(action = "*") {
  return function (parameter = "special") {
    return `You are ${action}${parameter}${action}!`

  }
}
wrapAdjective()('a hardworker');