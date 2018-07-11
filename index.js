var katzDeli = [];
function takeANumber(katzDeliLine, name) { 
  let n = (katzDeliLine.length);
  katzDeliLine.push(name);
  return (`Welcome, ${katzDeliLine[n]}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(deliLine) {
  if (deliLine.length >= 1) {
    return (`Currently serving ${deliLine.shift()}.`)
  }

  return ('There is nobody waiting to be served!')
}
function currentLine(line) {
  if (line.length >= 1) {
    let modifiedArray = []
    for (let i = 0; i < line.length; i++ ) {
      modifiedArray.push(`${i+1}. ${line[i]}`)
    }
    return (`The line is currently: ${modifiedArray.join(", ")}`)
  }
  if (line.length === 0) {
    return ('The line is currently empty.')
  }
}