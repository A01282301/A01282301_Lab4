var inputBox            = document.getElementById("inputvalue").value;
var operationHistoryBox = document.getElementById("logInformation").value;
var resultBox           = document.getElementById("resultValue").value;
var resetButton         = document.getElementsByClassName("resetButton").value;

//Variable declaration
var result = 0;
var operation = "";
var dataStored = "";

//Mapping inputs and outputs



function AddOperator(inputdata){
  if(dataStored == inputdata){
    console.log("repeated operator");
  }

  if(dataStored == ""){
    result = inputBox;
    resultBox = result;
    dataStored = inputdata;
    operation = operation + result;
  }else{
    let data = inputBox
    operation = operation + dataStored + inputBox;
    console.log(operation);
    result = eval(result + dataStored + inputBox);
    console.log(result);
    resultBox = result;
    dataStored = inputdata;
    clear(false);

  }
  clear(false);
};


function calculate(){

  result = eval(result + dataStored + inputBox);
  resultBox= result;
  operationHistoryBox = op + '=' + result;
  dataStored = "";
  clear(false);
  resultBox= "";
  result = 0;
  operation = "";

};


function clear(all){
    inputBox = "";
    if(all == true){
      result = "";
      resultBox = "";
      operation = "";
      dataStored = "";
    }
};
