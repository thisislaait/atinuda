// import $ from 'jquery';
// import 'slick-carousel';
// import 'fancybox';
// import Plyr from 'plyr';
// import 'glightbox';

// $(document).ready(function() {

//     function setCookie(name,value,days) {
//         var expires = "";
//         if (days) {
//             var date = new Date();
//             date.setTime(date.getTime() + (days*1));
//             expires = "; expires=" + date.toUTCString();
//         }
//         document.cookie = name + "=" + (value || "")  + expires + "; path=/";
//     }

//     $( ".pop-upclose" ).click(function() {
//         $.ajax({
//             type:'POST',
//             url:'/setcookie',
//             headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
//             success:function(data){
//                 $("#msg").html(data.msg);
//             }
//         });
//     });

//     $('.variable-width').slick({
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         centerMode: true,
//         variableWidth: true,
//         centerPadding: '60px',
//         autoplay: true,
//     });

//     $('.variable-width2').slick({
//         infinite: true,
//         speed: 300,
//         slidesToShow: 4,
//         centerMode: true,
//         variableWidth: false,
//         centerPadding: '60px',
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     centerMode: false,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 2,
//                     centerMode: false,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });

// $('.pop-upclose').click(function(e){
//     $('.eventpopup').fadeOut();
// });

// $('.popclose').click(function(e){
//     // $('.eventpopup').fadeOut();
//     // $(".eventpopup").css("display", "none");
//     // window.location.replace("/events/the-walpole-summit");
// });

// document.querySelector('.w-slider-arrow-left').addEventListener('click', function(e) {
//     speaker_number.innerHTML = ((+speaker_number.innerHTML - 1) % 7) || 7;
// });

// document.querySelector('.w-slider-arrow-right').addEventListener('click', function(e) {
//     speaker_number.innerHTML = ((+speaker_number.innerHTML + 1) % 7) || 7;
// });

// const player = new Plyr('#player');

// function showReportForm () {
//     console.log($('#reportForm'));
//     reportForm.style.display = 'block';
// }
// function closeReportForm(){
//     reportForm.style.display = 'none';
// }
