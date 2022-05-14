

// randomizer for attackers

//if new characters should be added to the json file add another of those
// if (rndName === obj[4]) {
//     var result1 = obj[4].primaryWeapons;
// } else if (rndName === obj[5]){
//     var result1 = obj[5].primaryWeapons ;
// }
// just change the numbers to the next one so if the last ones were 2 and 3 then put 4 and 5

var obj = fetch('dataDumpAttackers.json')
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => console.log(obj))

    function shuffle1() {
      var randomizedNumber= getRndInteger(0, obj.length);
      console.log(randomizedNumber)
      rndName = obj[randomizedNumber];
      console.log(rndName.charName)
      return rndName.charName;
    }

  function shuffle2() {
      if (rndName === obj[0]) {
         var result1 = obj[0].primaryWeapons;
      } else if (rndName === obj[1]){
          var result1 = obj[1].primaryWeapons ;
      }
      if (rndName === obj[2]) {
          var result1 = obj[2].primaryWeapons;
      } else if (rndName === obj[3]){
          var result1 = obj[3].primaryWeapons ;
      }
      if (rndName === obj[4]) {
          var result1 = obj[4].primaryWeapons;
      } else if (rndName === obj[5]){
          var result1 = obj[5].primaryWeapons ;
      }
      var randomizedNumber= getRndInteger(0, result1.length);
      result = result1[randomizedNumber];
      console.log(result.weaponName)
      return result.weaponName;
  }

function shuffle5() {
    if (rndName === obj[0]) {
        var result1 = obj[0].secondaryWeapons;
    } else if (rndName === obj[1]){
        var result1 = obj[1].secondaryWeapons;
    }
    if (rndName === obj[2]) {
        var result1 = obj[2].secondaryWeapons;
    } else if (rndName === obj[3]){
        var result1 = obj[3].secondaryWeapons;
    }
    if (rndName === obj[4]) {
        var result1 = obj[4].secondaryWeapons;
    } else if (rndName === obj[5]){
        var result1 = obj[5].secondaryWeapons;
    }
    var randomizedNumber= getRndInteger(0, result1.length);
    result = result1[randomizedNumber];
    console.log(result.weaponName)
    return result.weaponName;
}

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  function changeName() {
      document.getElementById("stuff").innerHTML = shuffle1();
      document.getElementById("button2").innerHTML = shuffle2();
      document.getElementById("button5").innerHTML = shuffle5();
  }


// end of randomizer for attackers


//Randomizer of defenders

var obj2 = fetch('dataDumpDefenders.json')
    .then(response => response.json())
    .then(data => obj2 = data)
    .then(() => console.log(obj2))

function shuffle3() {
    var randomizedNumber= getRndInteger(0, obj2.length);
    console.log(randomizedNumber)
    rndName = obj2[randomizedNumber];
    console.log(rndName.charName)
    return rndName.charName;
}

function shuffle4() {
    if (rndName === obj2[0]) {
        var result2 = obj2[0].primaryWeapons;
    } else if (rndName === obj2[1]){
        var result2 = obj2[1].primaryWeapons ;
    }
    if (rndName === obj2[2]) {
        var result2 = obj2[2].primaryWeapons;
    } else if (rndName === obj2[3]){
        var result2 = obj2[3].primaryWeapons ;
    }
    var randomizedNumber= getRndInteger(0, result2.length);
    result = result2[randomizedNumber];
    console.log(result.weaponName)
    return result.weaponName;
}

function shuffle6() {
    if (rndName === obj2[0]) {
        var result1 = obj2[0].secondaryWeapons;
    } else if (rndName === obj2[1]){
        var result1 = obj2[1].secondaryWeapons;
    }
    if (rndName === obj2[2]) {
        var result1 = obj2[2].secondaryWeapons;
    } else if (rndName === obj2[3]){
        var result1 = obj2[3].secondaryWeapons;
    }
    var randomizedNumber= getRndInteger(0, result1.length);
    result = result1[randomizedNumber];
    console.log(result.weaponName)
    return result.weaponName;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function changeName2() {
    document.getElementById("button3").innerHTML = shuffle3();
    document.getElementById("button4").innerHTML = shuffle4();
    document.getElementById("button6").innerHTML = shuffle6();
}

