
getProfiKey = localStorage.getItem('101')
console.log(getProfiKey)
if (getProfiKey == "null"){
var test = document.getElementById("search").value;
document.getElementById("profi-embed").src =
"https://locness3.github.io/scratch-profile-embed/#griffpatch";
} else {
    var test = document.getElementById("search").value;
document.getElementById("profi-embed").src =
"https://locness3.github.io/scratch-profile-embed/#"+ getProfiKey;
}

function myFunction() {
var test = document.getElementById("search").value;
document.getElementById("profi-embed").src =
"https://locness3.github.io/scratch-profile-embed/#"+ test;
localStorage.setItem('101', test)
}

