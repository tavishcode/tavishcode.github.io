// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon
var images = [
    ['github.png', 'https://www.github.com/tavishcode'],
    ['linkedin.png', 'https://www.linkedin.com/in/tgobindram'],
    ['resume.png', 'resume.pdf'],
]

function buildSlotItem (text) {
    var link = document.createElement("a")
    link.href = text[1]
    link.target='_blank'
    var image = document.createElement('img');
    image.src="/" + text[0];
    image.className = 'img-responsive';
    link.appendChild(image)
    return $('<div>').addClass('slottt-machine-recipe__item').html(link)
}

function buildSlotContents ($container, wordlist) {
  $items = images.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.slottt-machine-recipe__item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// inifinte div elements inside the container.
function rotateContents ($container, n) {
    setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 300);    
}

function animate() {
  $wordbox1.animate({top: -6*170}, {duration: 500, queue: false}, 'swing', function () {
    rotateContents($wordbox1, 6);
  });
  $wordbox2.animate({top: -7*170}, {duration: 500, queue: false}, 'swing', function () {
    rotateContents($wordbox2, 7);
  });
  $wordbox3.animate({top: -8*170}, {duration: 500, queue: false}, 'swing', function () {
    rotateContents($wordbox3, 8);
  });
  
}

$(function () {
    $wordbox1 = $('#wordbox1 .slottt-machine-recipe__items_container');
    buildSlotContents($wordbox1, images);  
    buildSlotContents($wordbox1, images);  
    buildSlotContents($wordbox1, images);  
    buildSlotContents($wordbox1, images);  
    $wordbox2 = $('#wordbox2 .slottt-machine-recipe__items_container');
    buildSlotContents($wordbox2, images);  
    buildSlotContents($wordbox2, images);  
    buildSlotContents($wordbox2, images);  
    buildSlotContents($wordbox2, images);  
    $wordbox3 = $('#wordbox3 .slottt-machine-recipe__items_container');
    buildSlotContents($wordbox3, images);  
    buildSlotContents($wordbox3, images);  
    buildSlotContents($wordbox3, images);  
    buildSlotContents($wordbox3, images);  
    animate()
});