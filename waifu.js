const apiUrl = 'https://api.waifu.im/';

const tags = ['maid',
'waifu',
'marin-kitagawa',
'mori-calliope',
'raiden-shogun',
'oppai',
'selfies',
'uniform'];

//selecting elements 
const tagSelect = document.getElementById('tagSelect');
const waifuImg = document.getElementById('waifu-img');
const btn = document.getElementById('update-btn');


async function getRandomPic(tag){
  const request = await fetch(`${apiUrl}search?included_tags=${tag}`,{
    method:"GET",
    headers: {
      'Accept-Version': 'v5'
    }
    
  });
  const {images} = await request.json();

return images[0];
}

btn.addEventListener('click', async function () {
  const selectedTag = tagSelect.value;
  const pic =  await getRandomPic(selectedTag);
  waifuImg.setAttribute('src', pic.url)
  
} )

// loads after html is completely laoaded 
document.addEventListener('DOMContentLoaded', function(){
  getRandomPic('uniform');
  tagSelect.innerHTML = tags.map(
    t=> `<option value="${t}">${t}</option>`)

});

