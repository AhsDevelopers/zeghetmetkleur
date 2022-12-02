/**
 * Create Workshops Glider
 */
new Glider(document.getElementById('glider-workshops'), {
  slidesToShow: 1,
  draggable: true,
  dots: '#dots-workshops',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    // {
    //   breakpoint: 1201,
    //   settings: {
    //     slidesToShow: 4,
    //   },
    // },
    // {
    //   breakpoint: 1501,
    //   settings: {
    //     slidesToShow: 5,
    //   },
    // },
  ],
});