
// Selecting all panels with class of panel 
const panels = document.querySelectorAll('.panel') 
  
// On click event for each panel  
panels.forEach((panel)=>{ 
    panel.addEventListener('click',()=>{ 
    // remove active class from all another panel  
    // and add it to the selected panel 
        panels.forEach((panel) => { 
            panel.classList.remove('active') 
        }) 
        panel.classList.add('active') 
    }) 
})