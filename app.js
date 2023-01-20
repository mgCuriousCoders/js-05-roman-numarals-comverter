const latinNumber=document.getElementById("latin-number");
const romanNumberResult=document.getElementById("roman-number-result");
const convertBtn=document.getElementById("convert");
const resetBtn=document.getElementById("reset")
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
const intToRoman = (year) => {
 
  for (let i = 0; i < romanInt.length; i++) {
    while (year >= romanInt[i]) {
      year = year - romanInt[i];
      result = result + "" + romanString[i];
    }
  }
  return result;
};
const romanInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
convertBtn.addEventListener("click",()=>{

    intToRoman(latinNumber.value)
    romanNumberResult.value=result;
    convertBtn.disabled=true;
})
resetBtn.addEventListener("click",()=>{
    latinNumber.value=0;
    romanNumberResult.value=0;
    convertBtn.disabled=false;

})

