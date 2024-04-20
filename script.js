const hexaNumber = ["1","2","3","4","5","6","7","8","9", "A","B","C","D","E"]

let Hexa_Show = document.querySelector(".hexa")

GetColor = () => Math.floor(Math.random() * hexaNumber.length)


document.querySelector(".btn").addEventListener("click" , function ChangeColor()
{
    let ColorInHexa ="#"
    for(let i = 1 ; i <=6 ; i++)
    {
        ColorInHexa+=hexaNumber[GetColor()]
        
        
    }
    document.body.style.background = ColorInHexa;
   Hexa_Show.textContent = ColorInHexa
  

})