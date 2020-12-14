var answers = {"Lust":0,"Gluttony":0,"Greed":0,"Sloth":0,"Wrath":0,"Envy":0,"Pride":0}
for (key in answers){
    var button=document.createElement("button");
    button.innerText=key;
    button.setAttribute("onclick",`doFunction("${key}")`);
    var topDiv = document.getElementById("key");
    topDiv.appendChild(button);


};

function doFunction() {};