let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

let select = document.querySelector(".wrapper")
let select_btn = document.querySelector(".select-btn")
let lis = document.querySelector(".options")
let input = document.querySelector("#input")
let ct = document.querySelector("#CountryT")

let cuntv = ""


function tap (d){
    cuntv = d.target.innerText 
    
    ct.innerText=d.target.innerText
    
    select.classList.remove('active')

    let rbg = document.querySelectorAll(".pels")
    
    rbg.forEach((e)=>{
        e.style = "background:"
    })
    d.target.style = "background:#d9c7c7"

    input.value=""
    
}




function elemG (arr){
    
    lis.innerHTML=""
    
    arr.forEach(element => {
        
        let pel = `<p class="pels" onclick="tap(event)">${element}</p>`
        
        lis.insertAdjacentHTML("afterbegin", pel);
        
        if(element==cuntv){
            let ddp =  document.querySelector(".pels")
            
            console.log(ddp);
            ddp.style = "background:#d9c7c7"  
        }
        
    });
    
}

select_btn.addEventListener(`click`, (e)=>{
    select.classList.toggle("active")
})

input.addEventListener("input", (e)=>{
    
    let newd = countries.filter(item=>{
        return item.toLocaleLowerCase().startsWith(input.value)
        
    }) 
    
    elemG(newd)
    
})

elemG(countries)