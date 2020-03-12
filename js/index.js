
//Mapping inputs and outputs
var inputBox            = document.getElementById("inputvalue");
var operationHistoryBox = document.getElementById("logInformation");
var resultBox           = document.getElementById("resultValue");
var resetButton         = document.getElementsByClassName("resetButton");
var cleanvalue          = "History was cleared"; //Change this value to "" to not show anything when clearing the console
//Variable declaration
var result = 0;
var operation = "";
var ans = 0;
var dataStored = "";

function AddOperator(inputdata){
  if(dataStored == inputdata){
    console.log("repeated operator");
  }else{
  let  inputValue = inputBox.value;
  if(inputValue == 'ans'){ //Allows to save the past result
    inputValue = ans;
  }
  if(dataStored == ""){ //If it is the first operator that it receives
    result = inputValue;
    resultBox.value = result;
    dataStored = inputdata;
    operation = operation + result;
  }else{ //if the it already has past operations
    operation = operation + dataStored + inputValue;
    //console.log(operation); //Uncomment to see how the operation is generated
    result = eval(result + dataStored + inputValue);
    resultBox.value = result;
    dataStored = inputdata;
    clear(false);
  }
  clear(false);
  }
};

/* This function calculates the result and verifies that the operation is not empty */
function calculate(){
  if(operation == "" && inputBox.value == ""){
    console.log("No Operations were provided");
  }else{
  operation = operation + dataStored + inputBox.value;
  result = eval(operation);
  console.log(operationHistoryBox.value + "\n" + operation + '=' + result);
  resultBox.value = result;
  operationHistoryBox.value = operationHistoryBox.value + "\n" + operation + ' = ' + result;
  dataStored = "";
  ans = result; //To store the past value
  clear(true);
  }
};


 /* This function receives as a parameter a boolean that indicates
 if the user wants to clear talso the buffers and partial results */
function clear(cleanDataBuffer){
    inputBox.value = "";
    if(cleanDataBuffer == true){
      dataStored = "";
      result = "";
      operation = "";
    }
};

function clean(){
    ans = 0;
    resultBox.value = "";
    clear(true);
    operationHistoryBox.value = cleanvalue;
}
