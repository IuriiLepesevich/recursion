function fibs(number) {
  const total = [0, 1];

  for (let i = 2; i < number; i += 1) {
    total.push(total[i - 2] + total[i - 1]);
  }

  return total;
}

function fibsRec(number) {
  let total = [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  const result1 = fibsRec(number - 2);
  const result2 = fibsRec(number - 1);

  total = total.concat(result2);
  total.push(
    Number(result2[result2.length - 1]) + Number(result1[result1.length - 1])
  );

  return total;
}

console.log(fibs(8));
console.log(fibsRec(8));
