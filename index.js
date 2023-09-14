const buttons = document.getElementById("container").children;
let inputScreen = document.getElementById("screen");

for (const aButton of buttons){
    aButton.addEventListener("click", function(){
        inputScreen.value += aButton.value;
        if (aButton.id === "clear"){
            inputScreen.value = "";
        }
        else if (aButton.id === "equals"){
            inputScreen.value = eval(inputScreen.value);
        }
        
    })
}


