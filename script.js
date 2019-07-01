// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon
var images = [
    ['github.png', 'https://www.github.com/tavishcode', 'GitHub'],
    ['linkedin.png', 'https://www.linkedin.com/in/tgobindram', 'LinkedIn'],
    ['resume.png', 'resume.pdf', 'Resume'],
]

function buildSlotItem (text) {
    var link = document.createElement("a")
    link.href = text[1]
    link.target='_blank'
    var image = document.createElement('img');
    image.src="/" + text[0];
    image.className = 'img-responsive';
    image.title = text[2]
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
    stop_ixs = [12, 13, 14]
    for(var i = 0; i < num_boxes; i++) {
        boxes[i].animate({top: -stop_ixs[i]*170}, {duration: 500, queue: false}, 'swing', function () {
            rotateContents(boxes[i], stop_ixs[i]);
        });
    }    
}

$(function () {
    boxes = [];
    num_boxes = 3;
    num_spins = 5
    for(var i = 0; i < num_boxes; i++) {
        boxes.push($(`#box${i} .slottt-machine-recipe__items_container`))
    }
    for(var i = 0; i < num_boxes; i++) {
        for(var j = 0; j < num_spins; j++) {
            buildSlotContents(boxes[i], images); 
        }
    }
    animate()
});