
//Mapping inputs and outputs
var inputBox            = document.getElementById("inputvalue");
var operationHistoryBox = document.getElementById("logInformation");
var resultBox           = document.getElementById("resultValue");
var resetButton         = document.getElementsByClassName("resetButton");

//Variable declaration
var result = 0;
var operation = "";
var dataStored = "";




function AddOperator(inputdata){
  if(dataStored == inputdata){
    console.log("repeated operator");
  }else{

  if(dataStored == ""){
    result = inputBox.value;
    resultBox.value = result;
    dataStored = inputdata;
    operation = operation + result;
  }else{
    let data = inputBox.value
    operation = operation + dataStored + inputBox.value;
    console.log(operation);
    result = eval(result + dataStored + inputBox.value);
    console.log(result);
    resultBox.value = result;
    dataStored = inputdata;
    clear(false);
  }
  clear(false);
  }
};


function calculate(){
  let previousResult = result
  result = eval(result + dataStored + inputBox.value);
  resultBox.value = result;
  operationHistoryBox.value = operationHistoryBox.value + "\n" + previousResult + dataStored + inputBox.value + '=' + result;
  dataStored = "";
  clear(false);
  resultBox.value = "";
  result = 0;
  operation = "";
};


function clear(all){
    inputBox.value = "";
    if(all == true){
      result = "";
      resultBox.value = "";
      operation = "";
      dataStored = "";
      operationHistoryBox.value = "History was cleared";
    }
};
