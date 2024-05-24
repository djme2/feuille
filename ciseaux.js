let choicesObject = {
    'pierre': {'pierre': 'draw', 'scissor': 'gagné', 'paper': 'perdu'},
    'ciseaux': {'pierre': 'perdu', 'scissor': 'draw', 'paper': 'gagné'},
    'papier': {'pierre': 'gagné', 'scissor': 'perdu', 'paper': 'draw'}
  }
  function checker(input) {
    var choices = ['pierre', 'papier', 'ciseaux'];
    var num = Math.floor(Math.random() * 3);
  
    let computerChoice = choices[num];
    let result
  
    switch (choicesObject[input][computerChoice]) {
      case 'win':
        result = 'tu a gagné';
        break;
      case 'perdu':
        result = 'tu a perdu';
        break;
      default:
        result = 'DRAW';
        break;
    }
    console.log(result);
    document.getElementById('result').textContent = result;
  }
  