function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const half = Math.ceil(array.length / 2);

  const leftHalf = mergeSort(array.slice(0, half));
  const rightHalf = mergeSort(array.slice(half));

  let total = [];

  while (
    typeof leftHalf[0] !== "undefined" &&
    typeof rightHalf[0] !== "undefined"
  ) {
    if (leftHalf[0] < rightHalf[0]) {
      total.push(leftHalf.shift());
    } else {
      total.push(rightHalf.shift());
    }
  }

  total = leftHalf[0] ? total.concat(leftHalf) : total.concat(rightHalf);

  return total;
}

const array = [
  57, 304, 912, 178, 735, 409, 582, 696, 247, 849, 639, 411, 891, 587, 346, 668,
  73, 553, 927, 505, 665, 885, 837, 258, 813, 710, 226, 985, 72, 289, 317, 478,
  996, 956, 56, 19, 678, 63, 246, 232, 103, 846, 969, 408, 718, 201, 859, 752,
  287, 789, 413, 126, 812, 66, 68, 381, 840, 334, 361, 230, 529, 953, 845, 203,
  905, 395, 936, 116, 498, 73, 495, 906, 958, 564, 836, 231, 319, 330, 758, 841,
  12, 407, 262, 131, 452, 255, 169, 687, 235, 449, 1000, 218, 66, 394, 922, 739,
  110, 812, 685, 615, 557, 33, 226, 591, 562, 612, 953, 569, 825, 741, 303,
];

console.log(mergeSort(array));
