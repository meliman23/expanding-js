const loading = document.querySelector('.loading'); // selects load class
let bg = document.querySelector('.bg');// selects the bg

let int = setInterval(bluring ,20);// does this function for 30 mil secods 

let count = 0; 

function bluring (){
    count++
   
    if(count >=99){
        clearInterval(int)
    }// stops count at 100

    console.log(count)// count should stop at 100 in the console

    loading.textContent = `Loading...${count}%`; // puts the count variable in the loading div 
    loading.style.opacity = map(count, 0, 100, 1, 0 )//maps count to opacity
    bg.style.filter = `blur(${map(count, 0, 99, 20, 0)}px)`
   
}

const map = (num, inmin, inmax, outmin, outmax)=>{ 
    return ((num - inmin) * (outmax - outmin))/(inmax - inmin ) + outmin
// maps a range of numbers to another range of numbers

}