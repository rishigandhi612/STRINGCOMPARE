const button = document.getElementById("compare");
let res=0;

function comparestring(){
    let l1= document.getElementById("text1").value;
    let l2= document.getElementById("text2").value;

    res=l1.toUpperCase() == l2.toUpperCase()
    if(res){
        alert("Strings are equal")
        
    }

    alert("Strings are not equal")
}

button.addEventListener("click", comparestring);