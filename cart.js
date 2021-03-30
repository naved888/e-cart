let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')
let index = 1;
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function() {
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
    })
    thumbnails[i].addEventListener('click', function() {
        document.getElementById('featured').src = this.src
        console.log(index)
    })
}
let buttonRight = document.getElementById('slideRight');
buttonRight.addEventListener('click', function() {
    let slider = document.getElementById('slider');
    let nextImg = slider.getElementsByClassName('thumbnail')
    index = (index === nextImg.length - 1) ? 0 : index + 1;
    document.getElementById('featured').src = nextImg[index].currentSrc
})

let buttonLeft = document.getElementById('slideLeft');
buttonLeft.addEventListener('click', function() {
    let slider = document.getElementById('slider');
    let nextImg = slider.getElementsByClassName('thumbnail')
    index = (index <= 0) ? (index = nextImg.length - 1) : index - 1
    document.getElementById('featured').src = nextImg[index].currentSrc

})