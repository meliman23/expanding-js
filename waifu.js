const apiUrl = 'https://api.waifu.im/'; // Base API URL

// List of tags for waifu categories
const tags = [
  'maid',
  'waifu',
  'marin-kitagawa',
  'mori-calliope',
  'raiden-shogun',
  'oppai',
  'selfies',
  'uniform'
];

// Select DOM elements
const tagSelect = document.getElementById('tagSelect');
const waifuImg = document.getElementById('waifu-img');
const btn = document.getElementById('update-btn');

// Fetch a random waifu image from the API 
//based on the selected tag
async function getRandomPic(tag) {
  try {
    const response = await fetch(`${apiUrl}search?included_tags=${tag}`, {
      method: 'GET',
      headers: {
        'Accept-Version': 'v5'
      }
    });
    const data = await response.json();
    return data.images[0];
  } catch (error) {
    console.error('Error fetching waifu image:', error);
    return null;
  }
}
let pushButton =  async function () {
  const selectedTag = tagSelect.value; // Get selected tag
  const pic = await getRandomPic(selectedTag);
  if (pic) {
    waifuImg.setAttribute('src', pic.url); // Update image source
    waifuImg.setAttribute('alt', `Waifu from ${selectedTag}`); // Update alt text
  } else {
    waifuImg.setAttribute('src', '');
    waifuImg.setAttribute('alt', 'Error loading image');
  }}
// Event listener for the button to fetch and display a new waifu image
btn.addEventListener('click', pushButton);

// Populate the dropdown and load a default image on page load
document.addEventListener('DOMContentLoaded', async function () {
  // Populate dropdown options
  tagSelect.innerHTML = tags.map(tag => `<option value="${tag}">${tag}</option>`).join(''); 
  // .join makes the array into one string 

  // Load a default image
  const defaultPic = await getRandomPic('uniform');
  //objects return truthy 
  if (defaultPic) {
    waifuImg.setAttribute('src', defaultPic.url);
    waifuImg.setAttribute('alt', 'Default Waifu Image');
  }
});
