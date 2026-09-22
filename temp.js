function checkTemperature(Temperature){
    let message = "";
    if( Temperature<20){
        message = "cold";
 }else if (Temperature<=30){
    message = "normal";
}else {message = "hot";
}
return message;
}
console.log(checkTemperature(35));
console.log(checkTemperature(2));
console.log(checkTemperature(26));