let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(ele =>{
    ele.addEventListener("click",(e)=>{
        let y= e.target.textContent;
        console.log(y)
        if(y === "C"){
            input.innerText=" ";
        }
        else if(y === "<"){
            input.innerText = input.innerText.slice(0,-1);
        }
        else if(y === "="){
            input.innerText=eval(input.innerText);
        }
        else{
            input.innerText +=y;
        }
        input.scrollLeft = input.scrollWidth;
    })

})