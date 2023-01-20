const latinNumber=document.getElementById("latin-number");
const romanNumberResult=document.getElementById("roman-number-result");
const convertBtn=document.getElementById("convert");
const resetBtn=document.getElementById("reset")
 const copyRight=document.querySelector("footer");
const year= new Date().getFullYear();

 let result = "";
   const romanString = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const romanInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

//? fonction intToRoman
const intToRoman = (year) => {
 
  for (let i = 0; i < romanInt.length; i++) {
    while (year >= romanInt[i]) {
      year = year - romanInt[i];
      result = result + "" + romanString[i];
    }
  }
  return result;
};


convertBtn.addEventListener("click",()=>{
    intToRoman(latinNumber.value)
    romanNumberResult.value=result;
    convertBtn.disabled=true;
    copyRight.innerHTML=`<p> MG CURIOUS CODERS ${year}©</p>`
})
resetBtn.addEventListener("click",()=>{
    latinNumber.value=0;
    romanNumberResult.value=0;
    convertBtn.disabled=false;

})

