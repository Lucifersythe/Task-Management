const img = document.querySelector(".btn1");
const sidebar=document.querySelector(".sidebar")
const date=document.querySelector(".dateandtime")
const wish=document.querySelector(".wish")
const logo=document.querySelector(".logo")
const moon=document.querySelector(".moon")
img.addEventListener("click", () => {
    sidebar.classList.toggle("close")
});

moon.onclick=function(){
    document.body.classList.toggle("change")
    if(document.body.classList.contains("change")){
        moon.src="assets pro/moon.svg"
        logo.src="assets pro/taskopia-high-resolution-logo (2).png"
    } 
    else{
        moon.src="assets pro/sun.svg"
        logo.src="assets pro/taskopia-high-resolution-logo (1).png"
    }
}

const currentDate = new Date();
console.log(currentDate)

const hour=currentDate.getHours()

console.log(hour)

if(hour>0 && hour<12){
    wish.innerText="Good morning"
}
if(hour>12 && hour<19){
    wish.innerText="Good afternoon"
}
else{
    wish.innerText="Good evening"
}


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);


date.textContent = formattedDate;


