// * Beginner Series #1 School Paperwork #8kyu
//? Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//? Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// n= 5, m=5 --> 25
// n=-5, m=5 -->  0

function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  }
  return 0;
}

function paperwork2(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

//* Find the next perfect square! #7kyu
//? You might know some pretty large perfect squares. But what about the NEXT one?
//? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//? If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2;
  }
  return -1;
}

function findNextSquare2(sq) {
  let a = Math.sqrt(sq);
  if (Number.isInteger(a)) {
    return Math.pow(++a, 2);
  }
  return -1;
}

console.log(findNextSquare2(121));

// TODO el resultado O se interpreta como false en una condicion
function findNextSquare3(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
