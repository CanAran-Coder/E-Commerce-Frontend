let right_arrow = document.getElementById("slider-arrow-right")
let left_arrow = document.getElementById("slider-arrow-left")
let slider_image_container = document.getElementById("slider-images")

let current_image = 0
let sliderInterval;

startSliderInterval()

right_arrow.addEventListener("click", () => {
    current_image++
    if (current_image == slider_image_container.children.length) {
        current_image = 0;
    }
    slider_image_container.style.transform = `translateX(-${current_image * 100}%)`
    clearInterval(sliderInterval)
    startSliderInterval()
})

left_arrow.addEventListener("click", () => {
    current_image--
    if (current_image < 0) {
        current_image = slider_image_container.children.length - 1;
    }
    slider_image_container.style.transform = `translateX(-${current_image * 100}%)`
    clearInterval(sliderInterval)
    startSliderInterval()
})

function startSliderInterval() {
    sliderInterval = setInterval(() => {
        current_image++
        if (current_image == slider_image_container.children.length) {
            current_image = 0;
        }
        slider_image_container.style.transform = `translateX(-${current_image * 100}%)`
    }, 5000)
}