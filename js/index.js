
//Mapping inputs and outputs
var inputBox            = document.getElementById("inputvalue");
var operationHistoryBox = document.getElementById("logInformation");
var resultBox           = document.getElementById("resultValue");
var resetButton         = document.getElementsByClassName("resetButton");
var cleanvalue          = "History was cleared";
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
  if(operation == ""){
    console.log("No Operations were provided");
  }else{
  operation = operation + dataStored + inputBox.value;
  console.log(operation);
  console.log(eval(operation));
  result = eval(operation);
  resultBox.value = result;
  operationHistoryBox.value = operationHistoryBox.value + "\n" + operation + '=' + result;
  dataStored = "";
  clear(true);
  }
};

function clear(cleanDataBuffer){
    inputBox.value = "";
    if(cleanDataBuffer == true){
      dataStored = "";
      resultBox.value = "";
      result = "";
      operation = "";
    }
};

function clean(){
    clear(true);
    operationHistoryBox.value = cleanvalue;
}
