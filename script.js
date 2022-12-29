const panels = document.querySelectorAll('.panel');//gives a node list 

panels.forEach(
    (panel)=>{panel.addEventListener('click', 
    () => {
remove ()
panel.classList.add('active')})
});

function remove (){
panels.forEach((panel)=> panel.classList.remove('active'))}