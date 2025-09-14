// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true,
            multiplier: 5,
            class: 'is-reveal'
        });

        // // Update scroll on window resize
        // window.addEventListener('resize', () => {
        //     scroll.update();
        // });

        // // Refresh scroll after images load
        // window.addEventListener('load', () => {
        //     scroll.update();
        // });
 