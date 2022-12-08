/**
 * Create Team Glider
 */
new Glider(document.getElementById('glider-team'), {
  slidesToShow: 2,
  draggable: true, 
  dots: '#dots-team',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1501,
      settings: {
        slidesToShow: 5,
      },
    },
  ]
});
