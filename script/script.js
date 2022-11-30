var True = 0, False = 0, counter = 0;
var english = [
  'Breakfast ',
  'Child',
  'Leg ',
  'Room',
  'Book',
  'Girl',
  'Side',
  'Dictionary',
  'Education ',
  'Clothing'
];
var ukrainian = [
  "сніданок",
  "дитина",
  "нога",
  "кімната",
  "книга",
  "дівчина",
  "сторона",
  "словник",
  "освіта",
  "одяг"
];
$("#Modal").hide();
$(".Window button").click(restart);
$("body>button").click(next);
function Random(english, ukrainian) {
  for (let i = 0 ; i < english.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [english[i], english[j]] = [english[j], english[i]];
    [ukrainian[i], ukrainian[j]] = [ukrainian[j], ukrainian[i]];
  }
}
function next() {
  if ($('input')[0].value.toLowerCase() == ukrainian[counter].toLowerCase()) {
    $('#True').text(`${++True}/10`);
  } else {
    $('#False').text(`${++False}/10`);
  }
  if (counter == 9) {
    $("#Modal").show();
	$("#Message").text("Ви вгадали " + `${True}`+ " з 10");
    return;
  }
  $("#Card").text(english[++counter]);
  $("#Counter").text(`${counter+1}/10`);
 $('input')[0].value = null;}

function restart() {
  Random(english, ukrainian);
  counter = True = False = 0;
  $("#Counter").text(`${counter+1}/10`);
  $("#True").text(True);
  $("#False").text(False);
  $("#Card").text(english[counter]);
  $("#Modal").hide();
}
Random(english, ukrainian);
$("#Card").text(english[counter]);
