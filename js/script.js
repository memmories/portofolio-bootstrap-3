// efek scroll
$('.page-scroll').on('click', function (e) {
  // ambil isi href
  var href = $(this).attr('href');
  // tangakp elemen
  var elemenhref = $(href);

  $('html,body').animate(
    {
      scrollTop: elemenhref.offset().top - 50,
    },
    1000,
    'easeInOutBack'
  );

  e.preventDefault();
});

// paralax efect

// about
$(window).on('load', function () {
  $('.pkiri').addClass('pmuncul');
  $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function () {
  var Wscroll = $(this).scrollTop();
  $('.jumbotron img').css({
    transform: 'translate(0px, ' + Wscroll / 4 + '%)',
  });

  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + Wscroll / 2 + '%)',
  });

  $('.jumbotron p').css({
    transform: 'translate(0px, ' + Wscroll / 1.2 + '%)',
  });
  // portfolio

  if (Wscroll > $('.portfolio').offset().top - 250) {
    $('.portfolio .thumbnail').each(function (i) {
      setTimeout(function () {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 500 * i + 1);
    });
  }
});
const container = document.querySelector('.portfolio');

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const span = document.getElementsByClassName('close')[0];

container.addEventListener('click', function (e) {
  if (e.target.id == 'myImg') {
    modal.classList.add('show');
    modalImg.src = e.target.src;
    captionText.innerHTML = e.target.alt;
  }
});
span.onclick = function () {
  modal.classList.remove('show');
};
// // Get the modal
// const modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// const img = document.getElementById('myImg');
// const modalImg = document.getElementById('img01');
// const captionText = document.getElementById('caption');
// img.onclick = function () {
//   modal.style.display = 'block';
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName('close')[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = 'none';
// };
