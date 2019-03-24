/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let loveTrianglesCount = 0;
  for (let i = 0; i < preferences.length; i++) {
    let firstLoverPosition = i + 1;
    let secondLoverPosition, thirdLoverPosition;
    for (let j = i + 1; j < preferences.length; j++) {
      if (firstLoverPosition == preferences[j]) {
        secondLoverPosition = j + 1;
        for (let k = i + 1; k < preferences.length; k++) {
          if (secondLoverPosition == preferences[k]) {
            thirdLoverPosition = k + 1;
            if (thirdLoverPosition == preferences[i]) {
              loveTrianglesCount ++;
            }
          }
        }
      }
    }
  }
  return loveTrianglesCount;
};
