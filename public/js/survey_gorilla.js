



$(document).ready(function() {

// $('#addQuestion').click(function(e) {
$('#addQuestion').on('click', function(e) {
  e.preventDefault();
  var q_input = "<br>Question: <textarea name='questions[text]' rows='4' cols='49'></textarea><br>";
  var c_button = "<br><button id='addChoice' type='button' class='button1'>Add Choices</button><br>";
  var c_input = "<br> X <input type='text' name='choices[text]'><button id='delButton' type='button'> delete </button><br>";
  $('.myQuestions').append(q_input);
  $('.myQuestions').append("<br><button id='addChoice'>Add Choices</button><br>");
  $('.myQuestions').append(c_input);

// $('button#addChoice').unbind('click');




});

// $('.myQuestions').on('click', function(e) {
  $('.myQuestions').on('click', function(e) {
    // $('button#addChoice').click(function(e) {
      e.preventDefault();
alert("here");
  var $c_input = "<br> X <input type='text' name='choices[text]'><button id='delButton' type='button'> delete </button><br>";
  $('.myQuestions').append($c_input);
});

// $('.myQuestions #addChoice').on('click', function() {
  // $('.myQuestions #addChoice').click(function(e) {
//     $('button#addChoice').click(function(e) {
//     e.preventDefault();
// // $('.myCButton').click(function() {
// alert("here");
//   var $c_input = "<br> X <input type='text' name='choices[text]'><button id='delButton' type='button'> delete </button><br>";
//   $('.myQuestions').append($c_input);
// });

// $('#delButton').on('click', function() {
//   alert("here");
//   $(this).remove();
// });


});