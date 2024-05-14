document.addEventListener('DOMContentLoaded', function () {     //Funzione per la navbar della pagina Storia
			var links = document.querySelectorAll('.navbar a.dot');
			var sections = document.querySelectorAll('.sec');

			function setActiveLink() {
				var top = window.pageYOffset;

				sections.forEach(function (section) {
					var id = section.getAttribute('id');
					var height = section.offsetHeight;
					var offset = section.offsetTop - 150;

					if (top >= offset && top < offset + height) {
						links.forEach(function (link) {
							link.classList.remove('active');
						});
						document.querySelector('.navbar').querySelector('[data-scroll="' + id + '"]').classList.add('active');
					}
				});
			}

			window.addEventListener('scroll', setActiveLink);
		});


        
let nextBtn = document.querySelector('.next')       //Funzione per lo slider
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])


nextBtn.onclick = function() {
    moveSlider('next')
}



prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true})
}
