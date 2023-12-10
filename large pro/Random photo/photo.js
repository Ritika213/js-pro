const imageContainerEl = document.querySelector('.image-container');
const loadMoreBtn = document.querySelector('.btn');
let imageNum = 10;

loadMoreBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addNewImages();
});

function addNewImages() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement('img');
    const randomImageId = Math.floor(Math.random() * 2000);
    newImgEl.src = `https://picsum.photos/200/300?random=${randomImageId}`;

    if (newImgEl.src.includes('random=781')) {
      // Modify the randomImageId to avoid duplicates
      randomImageId += 1;
      newImgEl.src = `https://picsum.photos/200/300?random=${randomImageId}`;
    }

    newImgEl.classList.add('image-item');
    imageContainerEl.appendChild(newImgEl);
  }
}


