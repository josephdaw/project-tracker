//const currentTimeEl = $('#current-time');

// var currentTime = moment().format("MMM Do, YYYY @ h:mm:ss a");
// $("#current-time").text(currentTime);

setInterval(function(){ 
    var currentTime = moment().format("MMM Do, YYYY @ h:mm:ss a");
$("#current-time").text(currentTime); }, 1000);


// $('#new-project').on('shown.bs.modal', function () {
//     $('#my-modal').trigger('focus')
//   })

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// $('#myModal').modal(options)