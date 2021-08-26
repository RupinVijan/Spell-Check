const head=document.getElementById("heading");
const btn=document.getElementById("btn");
const inp=document.getElementById("inp");
const result=document.getElementById("result");
const cross=document.getElementById("cross");

// btn.addEventListener("click",()=>{
//     inp.classList.toggle('active');
//     result.classList.toggle('active');
// });
// cross.addEventListener("click",()=>{
//     inp.classList.toggle('active');
//     result.classList.toggle('active');
// });
const text="Spell Checker";
        let index=1;
        function writee(){
            head.innerText=text.slice(0,index);
            index++;
            if (index>text.length){
                index=1;
            }
        }
        setInterval(() => {
            writee();
        }, 300);
