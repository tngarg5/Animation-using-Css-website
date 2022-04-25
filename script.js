const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = { nav1, nav2, nav3, nav4, nav5 };

// function navAnm(direction1, direction2){
//     for (let index = 1; index <= navItems.length; index++) {
//         const element = navItems[index];
//         element.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);


//     }
// }
// i+1 as i start from 0 and nav starts from 1


// Toggle Nav
function toggleNav() {
    menuBars.classList.toggle('change');
    //Toggle Menu is active or not
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        //Animate in overlay
        //  overlay.classList.remove('overlay-slide-left');
        // overlay.classList.add('overlay-slide-right');

        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

        // navAnm('out','in');

        //this alone wont work if we dont add slide-left class along with overlay calss as we cant replace something thats is not there.
        // animate in nav items
        //similarly here also classes need to be added to the html tags
        // nav1.classList.replace
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');
        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');
        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');
        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');
        nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5');


    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // nav items animation(for out)
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');
        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');
        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');
        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');
        nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5');
        // navAnm('in','out');
    }
    //    if we run2 classes at same time the loxer class of css will override the upper ones
}


// event listners

menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
