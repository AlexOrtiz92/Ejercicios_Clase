function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "1, 2, or 3";
      break;
    case 4:
      answer = "4 alone";
      break;
  }
  // Only change code below this line

  // Only change code above this line
  return answer;
}

sequentialSizes(1);


//Ej 80 Basic Javascript: Counting Cards

let count = 0;

function cc(card) {
  // Only change code below this line

  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--
  } else if (card === 7 || card === 8 || card === 9) {
    count = count + 0;
  };
  console.log(count);


  if (count > 0) {
    return `${count} Bet`
  } else {
    return `${count} Hold`
  };
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
