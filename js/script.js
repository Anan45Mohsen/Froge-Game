const lands = document.getElementsByClassName('land')
const land1 = document.getElementById('land1')
const land2 = document.getElementById('land2')
const land3 = document.getElementById('land3')
const land4 = document.getElementById('land4')
const land5 = document.getElementById('land5')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
// const froge = document.getElementsByClassName('froge')
const Frogee  = document.getElementById('frogee')

/////////////////// to disapear the froge when click on reset button/////////////
btn2.addEventListener('click' ,(e)=>{
    e.preventDefault() 
    Frogee.style.display ="none"
})
///////////////////////////// set frogge in land-grass///////////////
 // Example positions, change as needed
btn1.addEventListener("click" , (e)=>{
    e.preventDefault()
    setTimeout(function(){     
      Frogee.style.display= 'block'
        var divIds = [land1, land2, land3, land4, land5]; // div IDs, change as needed
        var positions = [1, 2, 3, 4, 5]; //positions, change as needed
      
        // Shuffle the positions array randomly
        positions.sort(() => Math.random() - 0.5);
      
        // Get the target div ID based on the shuffled positions array
        var targetDivId = divIds[positions[0] - 1];
      
        // Move the main div to the target div
        targetDivId.appendChild(Frogee);
},300)

})

