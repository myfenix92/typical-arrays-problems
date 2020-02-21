
exports.min = function min (array) {
  if (!Array.isArray(array)) {return 0}
  if (array.length <= 0) {return 0}
  return Math.min.apply(null, array)
}

exports.max = function max (array) {
  if (!Array.isArray(array)) {return 0}
  if (array.length <= 0) {return 0}
  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)) {return 0}
  if (array.length <= 0) {return 0}
  let avg = 0
  for (i = 0; i < array.length; i++) {
    avg = avg +array[i]
  }
  return (avg/array.length)
  
}
