var doc = document;
var store = $('#store_number').val();
var week = $('#week_number').val();
var start_date = $('#start_date').val();
var end_date = $('#end_date').val();
// var project_type = $('#project_type').val();
var project_type = $("#project_type option:checked").val();
var language = $("input[name='language']:checked").val();
var end_digit = 0;

let walmartWeek = [

 ['Saturday',   'Sunday',     'Monday',     'Tuesday',    'Wednesday',  'Thursday',   'Friday'],
 ['29-Jan-22',  '30-Jan-22',  '31-Jan-22',  '01-Feb-22',  '02-Feb-22',  '03-Feb-22',  '04-Feb-22'],
 ['05-Feb-22',  '06-Feb-22',	'07-Feb-22',	'08-Feb-22',	'09-Feb-22',	'10-Feb-22',	'11-Feb-22'],
 ['12-Feb-22',	'13-Feb-22',	'14-Feb-22',	'15-Feb-22',	'16-Feb-22',	'17-Feb-22',	'18-Feb-22'],
 ['19-Feb-22',	'20-Feb-22',	'21-Feb-22',	'22-Feb-22',	'23-Feb-22',	'24-Feb-22',	'25-Feb-22'],
 ['26-Feb-22',	'27-Feb-22',	'28-Feb-22',	'01-Mar-22',	'02-Mar-22',	'03-Mar-22',	'04-Mar-22'],
 ['05-Mar-22',	'06-Mar-22',	'07-Mar-22',	'08-Mar-22',	'09-Mar-22',	'10-Mar-22',	'11-Mar-22'],
 ['12-Mar-22',	'13-Mar-22',	'14-Mar-22',	'15-Mar-22',	'16-Mar-22',	'17-Mar-22',	'18-Mar-22'],
 ['19-Mar-22',	'20-Mar-22',	'21-Mar-22',	'22-Mar-22',	'23-Mar-22',	'24-Mar-22',	'25-Mar-22'],
 ['26-Mar-22',	'27-Mar-22',	'28-Mar-22',	'29-Mar-22',	'30-Mar-22',	'31-Mar-22',	'01-Apr-22'],
 ['02-Apr-22',  '03-Apr-22',	'04-Apr-22',	'05-Apr-22',	'06-Apr-22',	'07-Apr-22',	'08-Apr-22'],
 ['09-Apr-22',	'10-Apr-22',	'11-Apr-22',	'12-Apr-22',	'13-Apr-22',	'14-Apr-22',	'15-Apr-22'],
 ['16-Apr-22',	'17-Apr-22',	'18-Apr-22',	'19-Apr-22',	'20-Apr-22',	'21-Apr-22',	'22-Apr-22'],
 ['23-Apr-22',	'24-Apr-22',	'25-Apr-22',	'26-Apr-22',	'27-Apr-22',	'28-Apr-22',	'29-Apr-22'],
 ['30-Apr-22',	'01-May-22',	'02-May-22',	'03-May-22',	'04-May-22',	'05-May-22',	'06-May-22'],
 ['07-May-22',	'08-May-22',	'09-May-22',	'10-May-22',	'11-May-22',	'12-May-22',	'13-May-22'],
 ['14-May-22',	'15-May-22',	'16-May-22',	'17-May-22',	'18-May-22',	'19-May-22',	'20-May-22'],
 ['21-May-22',	'22-May-22',	'23-May-22',	'24-May-22',	'25-May-22',	'26-May-22',	'27-May-22'],
 ['28-May-22',	'29-May-22',	'30-May-22',	'31-May-22',	'01-Jun-22',	'02-Jun-22',	'03-Jun-22'],
 ['04-Jun-22',	'05-Jun-22',	'06-Jun-22',	'07-Jun-22',	'08-Jun-22',	'09-Jun-22',	'10-Jun-22'],
 ['11-Jun-22',	'12-Jun-22',	'13-Jun-22',	'14-Jun-22',	'15-Jun-22',	'16-Jun-22',	'17-Jun-22'],
 ['18-Jun-22',	'19-Jun-22',	'20-Jun-22',	'21-Jun-22',	'22-Jun-22',	'23-Jun-22',	'24-Jun-22'],
 ['25-Jun-22',	'26-Jun-22',	'27-Jun-22',	'28-Jun-22',	'29-Jun-22',	'30-Jun-22',	'01-Jul-22'],
 ['02-Jul-22',	'03-Jul-22',	'04-Jul-22',	'05-Jul-22',	'06-Jul-22',	'07-Jul-22',	'08-Jul-22'],
 ['09-Jul-22',	'10-Jul-22',	'11-Jul-22',	'12-Jul-22',	'13-Jul-22',	'14-Jul-22',	'15-Jul-22'],
 ['16-Jul-22',	'17-Jul-22',	'18-Jul-22',	'19-Jul-22',	'20-Jul-22',	'21-Jul-22',	'22-Jul-22'],
 ['23-Jul-22',	'24-Jul-22',	'25-Jul-22',	'26-Jul-22',	'27-Jul-22',	'28-Jul-22',	'29-Jul-22'],
 ['30-Jul-22',	'31-Jul-22',	'01-Aug-22',	'02-Aug-22',	'03-Aug-22',	'04-Aug-22',	'05-Aug-22'],
 ['06-Aug-22',	'07-Aug-22',	'08-Aug-22',	'09-Aug-22',	'10-Aug-22',	'11-Aug-22',	'12-Aug-22'],
 ['13-Aug-22',	'14-Aug-22',	'15-Aug-22',	'16-Aug-22',	'17-Aug-22',	'18-Aug-22',	'19-Aug-22'],
 ['20-Aug-22',	'21-Aug-22',	'22-Aug-22',	'23-Aug-22',	'24-Aug-22',	'25-Aug-22',	'26-Aug-22'],
 ['27-Aug-22',	'28-Aug-22',	'29-Aug-22',	'30-Aug-22',	'31-Aug-22',	'01-Sep-22',	'02-Sep-22'],
 ['03-Sep-22',	'04-Sep-22',	'05-Sep-22',	'06-Sep-22',	'07-Sep-22',	'08-Sep-22',	'09-Sep-22'],
 ['10-Sep-22',	'11-Sep-22',	'12-Sep-22',	'13-Sep-22',	'14-Sep-22',	'15-Sep-22',	'16-Sep-22'],
 ['17-Sep-22',	'18-Sep-22',	'19-Sep-22',	'20-Sep-22',	'21-Sep-22',	'22-Sep-22',	'23-Sep-22'],
 ['24-Sep-22',	'25-Sep-22',	'26-Sep-22',	'27-Sep-22',	'28-Sep-22',	'29-Sep-22',	'30-Sep-22'],
 ['01-Oct-22',	'02-Oct-22',	'03-Oct-22',	'04-Oct-22',	'05-Oct-22',	'06-Oct-22',	'07-Oct-22'],
 ['08-Oct-22',	'09-Oct-22',	'10-Oct-22',	'11-Oct-22',	'12-Oct-22',	'13-Oct-22',	'14-Oct-22'],
 ['15-Oct-22',	'16-Oct-22',	'17-Oct-22',	'18-Oct-22',	'19-Oct-22',	'20-Oct-22',	'21-Oct-22'],
 ['22-Oct-22',	'23-Oct-22',	'24-Oct-22',	'25-Oct-22',	'26-Oct-22',	'27-Oct-22',	'28-Oct-22'],
 ['29-Oct-22',	'30-Oct-22',	'31-Oct-22',	'01-Nov-22',	'02-Nov-22',	'03-Nov-22',	'04-Nov-22'],
 ['05-Nov-22',	'06-Nov-22',	'07-Nov-22',	'08-Nov-22',	'09-Nov-22',	'10-Nov-22',	'11-Nov-22'],
 ['12-Nov-22',	'13-Nov-22',	'14-Nov-22',	'15-Nov-22',	'16-Nov-22',	'17-Nov-22',	'18-Nov-22'],
 ['19-Nov-22',	'20-Nov-22',	'21-Nov-22',	'22-Nov-22',	'23-Nov-22',	'24-Nov-22',	'25-Nov-22'],
 ['26-Nov-22',	'27-Nov-22',	'28-Nov-22',	'29-Nov-22',	'30-Nov-22',	'01-Dec-22',	'02-Dec-22'],
 ['03-Dec-22',	'04-Dec-22',	'05-Dec-22',	'06-Dec-22',	'07-Dec-22',	'08-Dec-22',	'09-Dec-22'],
 ['10-Dec-22',	'11-Dec-22',	'12-Dec-22',	'13-Dec-22',	'14-Dec-22',	'15-Dec-22',	'16-Dec-22'],
 ['17-Dec-22',	'18-Dec-22',	'19-Dec-22',	'20-Dec-22',	'21-Dec-22',	'22-Dec-22',	'23-Dec-22'],
 ['24-Dec-22',	'25-Dec-22',	'26-Dec-22',	'27-Dec-22',	'28-Dec-22',	'29-Dec-22',	'30-Dec-22'],
 ['31-Dec-22',	'01-Jan-23',	'02-Jan-23',	'03-Jan-23',	'04-Jan-23',	'05-Jan-23',	'06-Jan-23'],
 ['07-Jan-23',	'08-Jan-23',	'09-Jan-23',	'10-Jan-23',	'11-Jan-23',	'12-Jan-23',	'13-Jan-23'],
 ['14-Jan-23',	'15-Jan-23',	'16-Jan-23',	'17-Jan-23',	'18-Jan-23',	'19-Jan-23',	'20-Jan-23'],
 ['21-Jan-23',	'22-Jan-23',	'23-Jan-23',	'24-Jan-23',	'25-Jan-23',	'26-Jan-23',	'27-Jan-23'],
 ['28-Jan-23',	'29-Jan-23',	'30-Jan-23',	'31-Jan-23',	'01-Feb-23',	'02-Feb-23',	'03-Feb-23'],
 ['04-Feb-23',	'05-Feb-23',	'06-Feb-23',	'07-Feb-23',	'08-Feb-23',	'09-Feb-23',	'10-Feb-23'],
 ['11-Feb-23',	'12-Feb-23',	'13-Feb-23',	'14-Feb-23',	'15-Feb-23',	'16-Feb-23',	'17-Feb-23'],
 ['18-Feb-23',	'19-Feb-23',	'20-Feb-23',	'21-Feb-23',	'22-Feb-23',	'23-Feb-23',	'24-Feb-23'],
 ['25-Feb-23',	'26-Feb-23',	'27-Feb-23',	'28-Feb-23',	'01-Mar-23',	'02-Mar-23',	'03-Mar-23'],
 ['04-Mar-23',	'05-Mar-23',	'06-Mar-23',	'07-Mar-23',	'08-Mar-23',	'09-Mar-23',	'10-Mar-23'],
 ['11-Mar-23',	'12-Mar-23',	'13-Mar-23',	'14-Mar-23',	'15-Mar-23',	'16-Mar-23',	'17-Mar-23'],
 ['18-Mar-23',	'19-Mar-23',	'20-Mar-23',	'21-Mar-23',	'22-Mar-23',	'23-Mar-23',	'24-Mar-23'],
 ['25-Mar-23',	'26-Mar-23',	'27-Mar-23',	'28-Mar-23',	'29-Mar-23',	'30-Mar-23',	'31-Mar-23'],
 ['01-Apr-23',	'02-Apr-23',	'03-Apr-23',	'04-Apr-23',	'05-Apr-23',	'06-Apr-23',	'07-Apr-23']

];

$(document).ready(function(){
    $('#week_number').change(function (){
       $('#start_date').val(walmartWeek[$('#week_number').val()][createStartDay()]);
       $('#end_date').val(walmartWeek[$('#week_number').val()][createEndDay()]);
    });

    $('#project_type').change(function () {
      $("select#project_type option:checked").val();

    });
  });

function enforeNumberLength(id, event) {
  var element = $("#" + id);
  var len = element.val().length + 1;
  var max = element.attr("maxlength");

    var cond = (46 < event.which && event.which < 58) || (46 < event.keyCode && event.keyCode < 58);

    if (!(cond && len <= max)) {
      event.preventDefault();
      return false;
     }
}

function createStartDay() {
  var pt = $("#project_type option:checked").val();

  if (pt == "CR") {
    end_digit = "2";
  } else if (pt == "SCOS4" || pt == "SCOS3" || pt == "SCOS2") {
    end_digit = "1";
  } else if (pt == "SCOM4" || pt == "SCOM3" || pt == "SCOM2") {
    end_digit = "2";
  } else if (pt == "ESL") {
    end_digit = "1";
  } else if (pt == "ESL-R") {
    end_digit = "1";
  } else if (pt == "FOCAL") {
    end_digit = "2";
  } else { return 1; }

  return end_digit;
}

function createEndDay() {
  var ed = $("#project_type option:checked").val();

  if (ed == "CR") {
    end_day = 5;
  } else if (ed == "SCOS4") {
    end_day = 5;
  } else if (ed == "SCOS3") {
    end_day = 4;
  } else if (ed == "SCOS2") {
    end_day = 3;
  } else if (ed == "SCOM4") {
    end_day = 6;
  } else if (ed == "SCOM3") {
    end_day = 5;
  } else if (ed == "SCOM2") {
    end_day = 4;
  } else if (ed == "ESL") {
    end_day = 6;
  } else if (ed == "ESL-R") {
    end_day = 6;
  } else if (ed == "FOCAL") {
    end_day = 6;
  } else { return 1;}

  return end_day;
}

function returnWeek(i) {
  var w = parseInt($('#week_number').val());
  var s = parseInt(w + i);

  if (s <= 0) {
    s = parseInt(w);
  } else if (s > 52) {
    x = s - 52;
    s = x + " &nbsp; <i>FY24</i> ";
  } else {
    s = parseInt(w + i);
  }

  return s;
}

function returnDay(i,day) {
  var w = parseInt($('#week_number').val());
  var s = parseInt(w + i);

  if (s <= 0) {
    s = w;
  }

  return walmartWeek[s][day];
}

function returnProject() {
  var p = $('#project_type').val();
  var x;

  if (p == "CR") {
    x = "Cash Recycler";
  } else if (p == "SCOM4") {
    x = "Self-Checkout";
  } else if (p == "SCOS4") {
    x = "Self-Checkout";
  } else if (p == "FOCAL") {
    x = "Focal";
  } else {
    x = "Electronic Shelf Labels";
  }

  return x;
}

function showTableData() {

  var wknm = $('#week_number').val();
  var stnm = $('#store_number').val();
  var project_type = $("#project_type option:checked").val();
  var language = $("input[name='language']:checked").val();

  if (project_type == "CR") {

    if (language == "E") {

      var row1 = '<tr><th>1</th><td id="event_details_title_1">Cash Recycler 4-Week Out Onboarding Call Go-Live Week ' + wknm + ' - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row2 = '<tr><th>2</th><td id="event_details_title_2">Are you Ready for Cash Recycler? - 2 Weeks to Go - Store ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row3 = '<tr><th>3</th><td>Cash Recycler Go-Live Update - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row4 = '<tr><th>4</th><td>Cash Recycler Go-Live Week Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

      var row5 = '<tr><th>5</th><td>Cash Recycler 2-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row6 = '<tr><th>6</th><td>Cash Recycler 4-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(4) + '</td><td>' + returnDay(4,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row7 = '<tr><th>7</th><td>Cash Recycler 8-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(8) + '</td><td>' + returnDay(8,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row8 = '<tr><th>8</th><td>GO-LIVE WEEK - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';


      $('#table_body').append(row1);
      $('#table_body').append(row2);
      $('#table_body').append(row3);
      $('#table_body').append(row4);
      $('#table_body').append(row5);
      $('#table_body').append(row6);
      $('#table_body').append(row7);

    } else {

      var row1 = '<tr><th>1</th><td id="event_details_title_1">Recycleur d\'Argent Appel Pr&eacute;paratoire de 4-Semaine - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row2 = '<tr><th>2</th><td id="event_details_title_2">Recycleur d\'Argent, 2-Semaine Pr&eacute;paration Direction - Magasin ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row3 = '<tr><th>3</th><td>Update Recycleur d\'Argent - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row4 = '<tr><th>4</th><td>Recap de la semaine Recycleur d\'Argent - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

      var row5 = '<tr><th>5</th><td>Suivi 2 semaines, Recycleur d\'Argent - Magasin ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row6 = '<tr><th>6</th><td>Suivi 4 semaines, Recycleur d\'Argent - Magasin ' + stnm + '</td><td>' + returnWeek(4) + '</td><td>' + returnDay(4,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row7 = '<tr><th>7</th><td>Suivi 8 semaines, Recycleur d\'Argent - Magasin ' + stnm + '</td><td>' + returnWeek(8) + '</td><td>' + returnDay(8,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row8 = '<tr><th>8</th><td>SEMAINE DE GO-LIVE - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';


      $('#table_body').append(row1);
      $('#table_body').append(row2);
      $('#table_body').append(row3);
      $('#table_body').append(row4);
      $('#table_body').append(row5);
      $('#table_body').append(row6);
      $('#table_body').append(row7);
      $('#table_body').append(row8);
  }

} else if (project_type == "SCOS4") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">SCO Acceleration - 5-Week Introduction - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">SCO Acceleration - 4-Week Zoom Recap - Store ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td>SCO Acceleration - 1-Week Pre Go-Live - Store ' + stnm + '</td><td>' + returnWeek(-1) + '</td><td>' + returnDay(-1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>Nightly SCO Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>SCO Acceleration - End of Project Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>SCO Project After-Weekend Check-In - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>SCO Acceleration - 2-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>SCO Acc. - 4-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(4) + '</td><td>' + returnDay(4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>SCO Acc. - 8-Week Post Check-in - Store ' + stnm + '</td><td>' + returnWeek(8) + '</td><td>' + returnDay(8,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row10 = '<tr><th>10</th><td>GO LIVE WEEK - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,1) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);
    $('#table_body').append(row10);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Projet CLS - 5-Semaine Introduction - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Projet CLS - 4-Semaine R&eacute;sum&eacute; de Zoom - Magasin ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td>Projet CLS - 1-Semaine avant Go-Live - Magasin ' + stnm + '</td><td>' + returnWeek(-1) + '</td><td>' + returnDay(-1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>Projet CLS - R&eacute;sum&eacute; de la nuit - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>Projet CLS - R&eacute;sum&eacute; de fin de projet - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>Projet CLS -  Apr&egrave;s la premier week-end - Magasin ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>Projet CLS - 2-Semaines apr&egrave;s - Magasin ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>Projet CLS - 4-Semaines apr&egrave;s - Magasin ' + stnm + '</td><td>' + returnWeek(4) + '</td><td>' + returnDay(4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>Projet CLS - 8-Semaines apr&egrave;s - Magasin ' + stnm + '</td><td>' + returnWeek(8) + '</td><td>' + returnDay(8,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row10 = '<tr><th>10</th><td>SEMAINE DE GO-LIVE - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,1) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);
    $('#table_body').append(row10);

  }

} else if (project_type == "SCOM4") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">SCO Acceleration - 5-Week Introduction - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">SCO Acceleration - 4-Week Zoom Recap - Store ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td>SCO Acceleration - 1-Week Pre Go-Live - Store ' + stnm + '</td><td>' + returnWeek(-1) + '</td><td>' + returnDay(-1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>Nightly SCO Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>SCO Acceleration - End of Project Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>SCO Project After-Weekend Check-In - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>SCO Acceleration - 2-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>SCO Acc. - 4-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(4) + '</td><td>' + returnDay(4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>SCO Acc. - 8-Week Post Check-in - Store ' + stnm + '</td><td>' + returnWeek(8) + '</td><td>' + returnDay(8,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row10 = '<tr><th>10</th><td>GO LIVE WEEK - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);
    $('#table_body').append(row10);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Projet CLS - 5-Semaine Introduction - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Projet CLS - 4-Semaine R&eacute;sum&eacute; de Zoom - Magasin ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td>Projet CLS - 1-Semaine avant Go-Live - Magasin ' + stnm + '</td><td>' + returnWeek(-1) + '</td><td>' + returnDay(-1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>Projet CLS - R&eacute;sum&eacute; de la nuit - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>Projet CLS - R&eacute;sum&eacute; de fin de projet - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>Projet CLS -  Apr&egrave;s la premier week-end - Magasin ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>Projet CLS - 2-Semaines apr&egrave;s - Magasin ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>Projet CLS - 4-Semaines apr&egrave;s - Magasin ' + stnm + '</td><td>' + returnWeek(4) + '</td><td>' + returnDay(4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>Projet CLS - 8-Semaines apr&egrave;s - Magasin ' + stnm + '</td><td>' + returnWeek(8) + '</td><td>' + returnDay(8,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row10 = '<tr><th>10</th><td>SEMAINE DE GO-LIVE - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);
    $('#table_body').append(row10);

  }

} else if (project_type == "ESL-R") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">ESL Remote -  4-Week Onboarding Call - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_1">ESL Remote - Send COO Stickers Order - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">ESL Remote - Send Recap - 4-Week Onboarding - Store ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>ESL Remote - Send 2-Week Pre Go-Live - Store ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>ESL Remote - Send Nightly Project Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>ESL Remote - Send End Of Project Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>ESL Remote - Send Fixture Return Email - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>ESL Remote - Send 2-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>ESL Remote - GO LIVE WEEK - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,1) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">ESL Remote - Appel de 4 semaines pour l\'int&eacute;gration - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_1">ESL - Envoyer un e-mail pour les autocollants COO - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">ESL - R&eacute;capitulatif de l\'appel d\'int&eacute;gration de 4 semaines - Magasin ' + stnm + '</td><td>' + returnWeek(-3) + '</td><td>' + returnDay(-3,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>ESL - Prep 2 semaines avant Go-Live - Magasin ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>ESL - R&eacute;sum&eacute; de la nuit - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>ESL - R&eacute;sum&eacute; de fin de projet - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>ESL Envoyer un e-mail de retour de luminaire - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>ESL - Suivi de 2 semaines - Magasin ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>SEMAINE DE GO-LIVE - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,1) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);

  }

} else if (project_type == "FOCAL") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Focal - Send Invite - 4-Week Onboarding Call - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Focal - Send Call Recap - 4-Week Onboarding Call - Store ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td>Focal - Send Reminder - 2-Week Pre Go-Live - Store ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>Focal - Send GO-LIVE Check-In - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>Focal - Send Install Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,6) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>Focal - Send 2-Week Post Check-In - Store ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>Focal - GO-LIVE WEEK - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Focal - Envoyer l&apos;invitation - Appel de 4 semaines pour l\'int&eacute;gration - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-5) + '</td><td id="event_details_day">' + returnDay(-5,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Focal - R&eacute;capitulatif de l\'appel d\'int&eacute;gration de 4 semaines - Magasin ' + stnm + '</td><td>' + returnWeek(-4) + '</td><td>' + returnDay(-4,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td>Focal - Prep 2 semaines avant Go-Live - Magasin  ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>Focal - Envoyer l\'email de GO-LIVE commence - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>Focal - R&eacute;sum&eacute; de fin de projet - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,6) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>Focal - Suivi de 2 semaines - Magasin ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>Focal - SEMAINE DE GO-LIVE - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);

  }

} else {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">ESL 4-Week Onboarding Call - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_1">ESL - Send COO Stickers Order - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">ESL 4-Week Onboarding Call Recap - Store ' + stnm + '</td><td>' + returnWeek(-3) + '</td><td>' + returnDay(-3,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>ESL 2-Week Pre Go-Live - Store ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>ESL Nightly Project Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>ESL End Of Project Recap - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>ESL Send Fixture Return Email - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>ESL 2-Week Post Check In - Store ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>GO LIVE WEEK - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,1) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">ESL - Appel de 4 semaines pour l\'int&eacute;gration - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_1">ESL - Envoyer un e-mail pour les autocollants COO - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">ESL - R&eacute;capitulatif de l\'appel d\'int&eacute;gration de 4 semaines - Magasin ' + stnm + '</td><td>' + returnWeek(-3) + '</td><td>' + returnDay(-3,3) + '</td><td>' + returnProject() + '</td></tr>';

    var row4 = '<tr><th>4</th><td>ESL - Prep 2 semaines avant Go-Live - Magasin ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row5 = '<tr><th>5</th><td>ESL - R&eacute;sum&eacute; de la nuit - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row6 = '<tr><th>6</th><td>ESL - R&eacute;sum&eacute; de fin de projet - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row7 = '<tr><th>7</th><td>ESL Envoyer un e-mail de retour de luminaire - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,5) + '</td><td>' + returnProject() + '</td></tr>';

    var row8 = '<tr><th>8</th><td>ESL - Suivi de 2 semaines - Magasin ' + stnm + '</td><td>' + returnWeek(2) + '</td><td>' + returnDay(2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row9 = '<tr><th>9</th><td>SEMAINE DE GO-LIVE - Magasin ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,1) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);
    $('#table_body').append(row4);
    $('#table_body').append(row5);
    $('#table_body').append(row6);
    $('#table_body').append(row7);
    $('#table_body').append(row8);
    $('#table_body').append(row9);

  }

}


  $("#generate_button_field").removeClass('is-hidden');
  $("#cr_table").removeClass('is-hidden');
  $("#create_button_field").addClass('is-hidden');

  $('#store_number').prop('disabled',true);
  $('#week_number').prop('disabled',true);
  $('#project_type').prop('disabled',true);

}

function createCalEvents() {
  var store = $('#store_number').val();
  var week = $('#week_number').val();
  var start_date = $('#start_date').val();
  var end_date = $('#end_date').val();
  // var project_type = $('#project_type').val();
  var project_type = $("#project_type").val();
  var language = $("input[name='language']:checked").val();

  cal = ics();

  if (project_type == "CR") {

    if (language == "E") {

      cal.addEvent('Cash Recycler 4-Week Onboarding Call Go-Live Week ' + week + ' - Store ' + store,
      'Send Cash Recycler 4-Week Onboarding Call Go-Live Week ' + week + ' - Store ' + store,
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('Are you Ready for Cash Recycler? - 2 Weeks to Go - Store ' + store,
      'Send Are you Ready for Cash Recycler? - 2 Weeks to Go - Store ' + store,
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,4));

      cal.addEvent('Cash Recycler Go-Live Update - Store ' + store,
      'Send Cash Recycler Updates Each Morning during the Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Cash Recycler Go-Live Week Recap - Store ' + store,
      'Send Cash Recycler Go-Live Week Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('Cash Recycler 2-Week Post Check-In - Store ' + store,
      'Send Cash Recycler 2-Week Post Check-In',
      'Store ' + store,
      returnDay(3,2),
      returnDay(3,3));

      cal.addEvent('Cash Recycler 4-Week Post Check-In - Store ' + store,
      'Send Cash Recycler 4-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(5,2),
      returnDay(5,3));

      cal.addEvent('Cash Recycler 8-Week Post Check-In - Store ' + store,
      'Send Cash Recycler 8-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(9,2),
      returnDay(9,3));

      cal.addEvent(' CR STORE ' + store + ' GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,6));

    } else {

      cal.addEvent('Recycleur d\'Argent Appel Préparatoire de 4-Semaine - Magasin ' + store,
      'Send Cash Recycler 4-Week Onboarding Call Go-Live Week ' + week + ' - Store ' + store,
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('Recycleur d\'Argent, 2-Semaine Préparation Direction - Magasin ' + store,
      'Send Are you Ready for Cash Recycler? - 2 Weeks to Go - Store ' + store,
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('Update Recycleur d\'Argent - Magasin ' + store,
      'Send Cash Recycler Updates Each Morning during the Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Recap de la semaine Recycleur d\'Argent - Magasin ' + store,
      'Send Cash Recycler Go-Live Week Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('Suivi 2 semaines, Recycleur d\'Argent - Magasin ' + store,
      'Send Cash Recycler 2-Week Post Check-In',
      'Store ' + store,
      returnDay(3,2),
      returnDay(3,3));

      cal.addEvent('Suivi 4 semaines, Recycleur d\'Argent - Magasin ' + store,
      'Send Cash Recycler 4-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(5,2),
      returnDay(5,3));

      cal.addEvent('Suivi 8 semaines, Recycleur d\'Argent - Magasin ' + store,
      'Send Cash Recycler 8-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(9,2),
      returnDay(9,3));

      cal.addEvent(' CR MAGASIN ' + store + ' GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,6));

    }

  }  else if (project_type == "SCOS4") {

    if (language == "E")  {

      cal.addEvent('SCO Acceleration - 5-Week Introduction - Store ' + store,
      'Send SCO Acceleration 5-Week Introduction and Zoom Call Invite',
      'Store ' + store,
      returnDay(-5,2),
      returnDay(-5,3));

      cal.addEvent('SCO Acceleration - 4-Week Zoom Recap - Store ' + store,
      'Send Recap of SCO Acceleration Zoom Meeting',
      'Store ' + store,
      returnDay(-4,3),
      returnDay(-4,4));

      cal.addEvent('SCO Acceleration - 1-Week Pre Go-Live - Store ' + store,
      'Send SCO Acceleration 1-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-1,2),
      returnDay(-1,3));

      cal.addEvent('Nightly SCO Recap - Store ' + store,
      'Send Nightly SCO Recaps each Morning of Go-Live',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('SCO STORE ' + store + '- GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));

      cal.addEvent('SCO Acceleration - End of Project Recap - Store ' + store,
      'Send SCO End of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('SCO Project After-Weekend Check-In - Store ' + store,
      'Send Check-In after first weekend of new SCO usage',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

      cal.addEvent('SCO Acceleration - 2-Week Post Check-In - Store ' + store,
      'Send SCO Acceleration 2-Week Post Check-In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('SCO Acc. - 4-Week Post Check-In - Store ' + store,
      'Send SCO Acceleration 4-Week Post Check-In',
      'Store ' + store,
      returnDay(4,2),
      returnDay(4,3));

      cal.addEvent('SCO Acc. - 8-Week Post Check-in  - Store ' + store,
      'Send SCO Acceleration 8-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(8,2),
      returnDay(8,3));

    } else {

      cal.addEvent('Projet CLS - 5-Semaine Introduction - Magasin ' + store,
      'Send SCO Acceleration 5-Week Introduction and Zoom Call Invite',
      'Store ' + store,
      returnDay(-5,2),
      returnDay(-5,3));

      cal.addEvent('Projet CLS - 4-Semaine Résumé de Zoom - Magasin ' + store,
      'Send Recap of SCO Acceleration Zoom Meeting',
      'Store ' + store,
      returnDay(-4,3),
      returnDay(-4,4));

      cal.addEvent('Projet CLS - 1-Semaine avant Go-Live - Magasin ' + store,
      'Send SCO Acceleration 1-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-1,2),
      returnDay(-1,3));

      cal.addEvent('Projet CLS - Résumé de la nuit - Magasin ' + store,
      'Send Nightly SCO Recaps each Morning of Go-Live',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('CLS MAGASIN ' + store + '- GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));

      cal.addEvent('Projet CLS - Résumé de fin de projet - Magasin ' + store,
      'Send SCO End of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('Projet CLS -  Après la premier week-end - Magasin ' + store,
      'Send Check-In after first weekend of new SCO usage',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

      cal.addEvent('Projet CLS - 2-Semaines après - Magasin ' + store,
      'Send SCO Acceleration 2-Week Post Check-In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('Projet CLS - 4-Semaines après - Magasin ' + store,
      'Send SCO Acceleration 4-Week Post Check-In',
      'Store ' + store,
      returnDay(4,2),
      returnDay(4,3));

      cal.addEvent('Projet CLS - 8-Semaines après - Magasin ' + store,
      'Send SCO Acceleration 8-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(8,2),
      returnDay(8,3));

    }

  } else if (project_type == "SCOM4") {

    if (language == "E") {

      cal.addEvent('SCO Acceleration - 5-Week Introduction - Store ' + store,
      'Send SCO Acceleration 5-Week Introduction and Zoom Call Invite',
      'Store ' + store,
      returnDay(-5,2),
      returnDay(-5,3));

      cal.addEvent('SCO Acceleration - 4-Week Zoom Recap - Store ' + store,
      'Send Recap of SCO Acceleration Zoom Meeting',
      'Store ' + store,
      returnDay(-4,3),
      returnDay(-4,4));

      cal.addEvent('SCO Acceleration - 1-Week Pre Go-Live - Store ' + store,
      'Send SCO Acceleration 1-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-1,2),
      returnDay(-1,3));

      cal.addEvent('Nightly SCO Recap - Store ' + store,
      'Send Nightly SCO Recaps each Morning of Go-Live',
      'Store ' + store,
      returnDay(0,3),
      returnDay(0,4));

      cal.addEvent('SCO STORE ' + store + '- GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,6));

      cal.addEvent('SCO Acceleration - End of Project Recap - Store ' + store,
      'Send SCO End of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('SCO Project After-Weekend Check-In - Store ' + store,
      'Send Check-In after first weekend of new SCO usage',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

      cal.addEvent('SCO Acceleration - 2-Week Post Check-In - Store ' + store,
      'Send SCO Acceleration 2-Week Post Check-In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('SCO Acc. - 4-Week Post Check-In - Store ' + store,
      'Send SCO Acceleration 4-Week Post Check-In',
      'Store ' + store,
      returnDay(4,2),
      returnDay(4,3));

      cal.addEvent('SCO Acc. - 8-Week Post Check-in  - Store ' + store,
      'Send SCO Acceleration 8-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(8,2),
      returnDay(8,3));

    } else {

      cal.addEvent('Projet CLS - 5-Semaine Introduction - Magasin ' + store,
      'Send SCO Acceleration 5-Week Introduction and Zoom Call Invite',
      'Store ' + store,
      returnDay(-5,2),
      returnDay(-5,3));

      cal.addEvent('Projet CLS - 4-Semaine Résumé de Zoom - Magasin ' + store,
      'Send Recap of SCO Acceleration Zoom Meeting',
      'Store ' + store,
      returnDay(-4,3),
      returnDay(-4,4));

      cal.addEvent('Projet CLS - 1-Semaine avant Go-Live - Magasin ' + store,
      'Send SCO Acceleration 1-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-1,2),
      returnDay(-1,3));

      cal.addEvent('Projet CLS - Résumé de la nuit - Magasin ' + store,
      'Send Nightly SCO Recaps each Morning of Go-Live',
      'Store ' + store,
      returnDay(0,3),
      returnDay(0,4));

      cal.addEvent('CLS MAGASIN ' + store + '- GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,6));

      cal.addEvent('Projet CLS - Résumé de fin de projet - Magasin ' + store,
      'Send SCO End of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('Projet CLS -  Après la premier week-end - Magasin ' + store,
      'Send Check-In after first weekend of new SCO usage',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

      cal.addEvent('Projet CLS - 2-Semaines après - Magasin ' + store,
      'Send SCO Acceleration 2-Week Post Check-In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('Projet CLS - 4-Semaines après - Magasin ' + store,
      'Send SCO Acceleration 4-Week Post Check-In',
      'Store ' + store,
      returnDay(4,2),
      returnDay(4,3));

      cal.addEvent('Projet CLS - 8-Semaines après - Magasin ' + store,
      'Send SCO Acceleration 8-Week Post Check-In Hypercare',
      'Store ' + store,
      returnDay(8,2),
      returnDay(8,3));

    }

  } else if (project_type == "ESL") {

    if (language == "E") {

      cal.addEvent('ESL 4-Week Onboarding Call - Store ' + store,
      'Send ESL 4-Week Onboarding Call Invite',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL - Send COO Sticker Order - Store ' + store,
      'Send Country Of Origin Sticker Order to hcwmsigns@tc.tc using email template ',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL 4-Week Onboarding Call Recap - Store ' + store,
      'Send Recap of ESL Onboarding Call',
      'Store ' + store,
      returnDay(-3,3),
      returnDay(-3,4));

      cal.addEvent('ESL 2-Week Pre Go-Live - Store ' + store,
      'Send ESL 2-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('ESL Nightly Project Recap - Store ' + store,
      ' Send ESL Nightly Project Recap each morning of Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('ESL End Of Project Recap - Store ' + store,
      'Send ESL End Of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL Send Fixture Return Email - Store ' + store,
      'Send e-mail to Arbab with the fixtures the store needs to return.',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL 2-Week Check In - Store ' + store,
      'Send ESL 2-Week Hypercare Check In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('ESL STORE ' + store + ' GO-LIVE',
      'Go-Live Week' + store,
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));

    } else {

      cal.addEvent('ESL - Appel de 4 semaines pour l\'intégration - Magasin ' + store,
      'Send ESL 4-Week Onboarding Call Invite',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL - Envoyer un e-mail pour les autocollants COO - Magasin ' + store,
      'hcwmsigns@tc.tc ',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL - Récapitulatif de l\'appel d\'intégration de 4 semaines - Magasin ' + store,
      'Send Recap of ESL Onboarding Call',
      'Store ' + store,
      returnDay(-3,3),
      returnDay(-3,4));

      cal.addEvent('ESL - Prep 2 semaines avant Go-Live - Magasin ' + store,
      'Send ESL 2-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('ESL - Résumé de la nuit - Magasin ' + store,
      ' Send ESL Nightly Project Recap each morning of Go-Live Week' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('ESL - Résumé de fin de projet - Magasin ' + store,
      'Send ESL End Of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL - Résumé de fin de projet - Magasin ' + store,
      'Send fixture return e-mail to Arbab',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL - Suivi de 2 semaines - Magasin ' + store,
      'Send ESL 2-Week Hypercare Check In' + store,
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('ESL MAGASIN ' + store + ' GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));
    }

  } else if (project_type == "ESL-R") {

    if (language == "E") {

      cal.addEvent('ESL 4-Week Onboarding Call - Store ' + store,
      'Send ESL 4-Week Onboarding Call Invite',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL - Send COO Sticker Order - Store ' + store,
      'Send Country Of Origin Sticker Order to hcwmsigns@tc.tc using email template ',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL 4-Week Onboarding Call Recap - Store ' + store,
      'Send Recap of ESL Onboarding Call',
      'Store ' + store,
      returnDay(-3,3),
      returnDay(-3,4));

      cal.addEvent('ESL 2-Week Pre Go-Live - Store ' + store,
      'Send ESL 2-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('ESL Nightly Project Recap - Store ' + store,
      ' Send ESL Nightly Project Recap each morning of Go-Live Week',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('ESL End Of Project Recap - Store ' + store,
      'Send ESL End Of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL Send Fixture Return Email - Store ' + store,
      'Send e-mail to Arbab with the fixtures the store needs to return.',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL 2-Week Check In - Store ' + store,
      'Send ESL 2-Week Hypercare Check In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('ESL STORE ' + store + ' GO-LIVE',
      'Go-Live Week' + store,
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));

    } else {

      cal.addEvent('ESL - Appel de 4 semaines pour l\'intégration - Magasin ' + store,
      'Send ESL 4-Week Onboarding Call Invite',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL - Envoyer un e-mail pour les autocollants COO - Magasin ' + store,
      'hcwmsigns@tc.tc ',
      'Store ' + store,
      returnDay(-4,2),
      returnDay(-4,3));

      cal.addEvent('ESL - Récapitulatif de l\'appel d\'intégration de 4 semaines - Magasin ' + store,
      'Send Recap of ESL Onboarding Call',
      'Store ' + store,
      returnDay(-3,3),
      returnDay(-3,4));

      cal.addEvent('ESL - Prep 2 semaines avant Go-Live - Magasin ' + store,
      'Send ESL 2-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('ESL - Résumé de la nuit - Magasin ' + store,
      ' Send ESL Nightly Project Recap each morning of Go-Live Week' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('ESL - Résumé de fin de projet - Magasin ' + store,
      'Send ESL End Of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL - Résumé de fin de projet - Magasin ' + store,
      'Send fixture return e-mail to Arbab',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('ESL - Suivi de 2 semaines - Magasin ' + store,
      'Send ESL 2-Week Hypercare Check In' + store,
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

      cal.addEvent('ESL MAGASIN ' + store + ' GO-LIVE',
      'Go-Live Week',
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));
    }

  } else if (project_type == "FOCAL") {

    if (language == "E") {

      cal.addEvent('Focal - Send Invite - 4-Week Onboarding Call - Store ' + store,
      'Send Focal 4-Week Onboarding Call Invite for a time next week',
      'Store ' + store,
      returnDay(-5,2),
      returnDay(-5,3));

      cal.addEvent('Focal - Send Call Recap - 4-Week Onboarding Call Recap - Store ' + store,
      'Send Recap of Focal Onboarding Call',
      'Store ' + store,
      returnDay(-4,3),
      returnDay(-4,6));

      cal.addEvent('Focal - Send Reminder - 2-Week Pre Go-Live - Store ' + store,
      'Send Focal 2-Week Pre Go-Live Email',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('FOCAL STORE ' + store + ' GO-LIVE',
      'Go-Live Week' + store,
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));

      cal.addEvent('Focal - Send GO-LIVE Check-In - Store ' + store,
      'Send Focal Go-Live Check-In',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Focal - Send Install Recap - Store ' + store,
      'Send Focal End Of Project Recap',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('Focal - Send 2-Week Post Check-In - Store ' + store,
      'Send Focal 2-Week Hypercare Check In',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));

    } else {

      cal.addEvent('Focal - Envoyer l\'invitation - Appel de 4 semaines pour l\'intégration - Magasin ' + store,
      'Focal - Envoyer l\'invitation - Appel de 4 semaines pour l\'intégration',
      'Store ' + store,
      returnDay(-5,2),
      returnDay(-5,3));

      cal.addEvent('Focal - Récapitulatif de l\'appel d\'intégration de 4 semaines - Magasin ' + store,
      'Focal - Récapitulatif de l\'appel d\'intégration de 4 semaines',
      'Store ' + store,
      returnDay(-4,3),
      returnDay(-4,6));

      cal.addEvent('Focal - Prep 2 semaines avant Go-Live - Magasin ' + store,
      'Focal - Prep 2 semaines avant Go-Live',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('FOCAL MAGASIN ' + store + ' GO-LIVE',
      'Magasin ' + store,
      'Store ' + store,
      returnDay(0,1),
      returnDay(0,6));

      cal.addEvent('Focal - Envoyer l\'email de GO-LIVE commence - Magasin ' + store,
      'Focal - Envoyer l\'email de GO-LIVE commence',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Focal - Résumé de fin de projet - Magasin ' + store,
      'Focal - Résumé de fin de projet',
      'Store ' + store,
      returnDay(0,5),
      returnDay(0,6));

      cal.addEvent('Focal - Suivi de 2 semaines - Magasin ' + store,
      'Focal - Suivi de 2 semaines',
      'Store ' + store,
      returnDay(2,2),
      returnDay(2,3));
    }

  } else {
    alert("YOU BROKE SOMETHING, STOP IT! (Error while adding Calendar Events)");
  }
}

function checkForEmptyFields() {
  var st = $('#store_number').val();
    if(st == "") {
      $('#store_number').addClass('is-danger');
      $('#store_number_helper').removeClass('is-hidden');
    } else {
      $('#store_number').removeClass('is-danger');
      $('#store_number_helper').addClass('is-hidden');

      showTableData();
      createCalEvents();
    }
}
