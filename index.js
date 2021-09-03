const record = [
    {year: "2018", result: "L"},
    {year: "1969", result: "W"},
    {year: "2016", result: "N/A"}
  ]

 /* function superbowlWin(array) {
    let win = array.find(array => array.result === "W");
    if (win = "W"){
        return win.year
    }
  }
  record.find(superbowlWin);


  function superbowlWin(array) {
    let win = array.find(array => array.result === "W");
    if (win){
        return record['year'];
    
    }
        
        
} 
*/

function superbowlWin(array) {
    let win = array.find(array => array.result === "W");
    if (win){
        return win.year
    }
}

    record.find(superbowlWin);