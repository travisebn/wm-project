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
  } else { return 0; }

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
  } else { return 6;}

  return end_day;
}

function returnWeek(i) {
  var w = parseInt($('#week_number').val());
  var s = parseInt(w + i);

  if (s <= 0) {
    s = parseInt(w);
  } else if (s > 52) {
    x = s - 52;
    s = x + " &nbsp; <i>FY24</i> "
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

  if (p == "OMNI") {
    x = "OMNI Health Check";
  } else if (p == "BR") {
    x = "Business Review";
  } else if (p == "D") {
    x = "Diagnostic";
  } else if (p == "PEP") {
    x = "PEP";
  } else {
    x = "Quarterly Readiness Walk";
  }

  return x;
}

function showTableData() {

  var wknm = $('#week_number').val();
  var stnm = $('#store_number').val();
  var project_type = $("#project_type option:checked").val();
  var language = $("input[name='language']:checked").val();

  if (project_type == "OMNI") {

    if (language == "E") {

      var row1 = '<tr><th>1</th><td id="event_details_title_1">OMNI Health Check - Week ' + wknm + ' - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(0) + '</td><td id="event_details_day">' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row2 = '<tr><th>2</th><td id="event_details_title_2">OMNI Health Check - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


      $('#table_body').append(row1);
      $('#table_body').append(row2);

    } else {

      var row1 = '<tr><th>1</th><td id="event_details_title_1">Recycleur d\'Argent Appel Pr&eacute;paratoire de 4-Semaine - Magasin ' + stnm + '</td><td id="event_details_week">' + returnWeek(-4) + '</td><td id="event_details_day">' + returnDay(-4,2) + '</td><td>' + returnProject() + '</td></tr>';

      var row2 = '<tr><th>2</th><td id="event_details_title_2">Recycleur d\'Argent, 2-Semaine Pr&eacute;paration Direction - Magasin ' + stnm + '</td><td>' + returnWeek(-2) + '</td><td>' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';


      $('#table_body').append(row1);
      $('#table_body').append(row2);

  }

} else if (project_type == "BR") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Business Review - Week ' + wknm + ' - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(0) + '</td><td id="event_details_day">' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Business Review - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">OMNI Health Check - Week ' + wknm + ' - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(0) + '</td><td id="event_details_day">' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">OMNI Health Check - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);

  }

} else if (project_type == "D") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: Prepare for Diagnostic Due in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Diagnostic - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">Diagnostic - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: Prepare for Diagnostic Due in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Diagnostic - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">Diagnostic - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);

  }

} else if (project_type == "PEP") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: PEP Due in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">PEP Due Today - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';



    $('#table_body').append(row1);
    $('#table_body').append(row2);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: PEP Due in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">PEP Due Today - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';



    $('#table_body').append(row1);
    $('#table_body').append(row2);

  }

} else if (project_type == "QRW") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: Quarterly Readiness Walk in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Quarterly Readiness Walk  - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">Quaterly Readiness Walk - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: Quarterly Readiness Walk in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Quarterly Business Readiness Walk  - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">Quaterly Business Readiness Walk - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);

  }

} else if (project_type == "") {

  if (language == "E") {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: Quarterly Readiness Walk in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Quarterly Readiness Walk  - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">Quaterly Readiness Walk - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);

  } else {

    var row1 = '<tr><th>1</th><td id="event_details_title_1">Reminder: Quarterly Readiness Walk in 2 Weeks - Store ' + stnm + '</td><td id="event_details_week">' + returnWeek(-2) + '</td><td id="event_details_day">' + returnDay(-2,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row2 = '<tr><th>2</th><td id="event_details_title_2">Quarterly Readiness Walk  - Store ' + stnm + '</td><td>' + returnWeek(0) + '</td><td>' + returnDay(0,2) + '</td><td>' + returnProject() + '</td></tr>';

    var row3 = '<tr><th>3</th><td id="event_details_title_2">Quaterly Readiness Walk - Follow-Up Due - Store ' + stnm + '</td><td>' + returnWeek(1) + '</td><td>' + returnDay(1,2) + '</td><td>' + returnProject() + '</td></tr>';


    $('#table_body').append(row1);
    $('#table_body').append(row2);
    $('#table_body').append(row3);

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

  if (project_type == "OMNI") {

    if (language == "E") {

      cal.addEvent('OMNI Health Check - Week ' + week + ' - Store ' + store,
      'OMNI Health Check Today  - Store ' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('OMNI Health Check - Follow-Up Due - Store ' + store,
      'Store needs to follow-up from last weeks OMNI Health Check - Store ' + store,
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

    } else {

      cal.addEvent('OMNI Health Check - Week ' + week + ' - Store ' + store,
      'OMNI Health Check Today  - Store ' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('OMNI Health Check - Follow-Up Due - Store ' + store,
      'Store needs to follow-up from last weeks OMNI Health Check - Store ' + store,
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

    }

  }  else if (project_type == "BR") {

    if (language == "E")  {

      cal.addEvent('Business Review - Week ' + week + ' - Store ' + store,
      'Business Review Today  - Store ' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Business Review - Follow-Up Due - Store ' + store,
      'Store needs to follow-up from last weeks Business Review - Store ' + store,
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

    } else {

      cal.addEvent('Business Review - Week ' + week + ' - Store ' + store,
      'Business Review Today  - Store ' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Business Review - Follow-Up Due - Store ' + store,
      'Store needs to follow-up from last weeks Business Review - Store ' + store,
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

    }

  } else if (project_type == "D") {

    if (language == "E") {

      cal.addEvent('Reminder: Prepare for Diagnostic Due in 2 Weeks - Store ' + store,
      '',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('Diagnostic - Store ' + store,
      '',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Diagnostic - Follow-Up Due - Store ' + store,
      '',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));


    } else {

      cal.addEvent('Reminder: Prepare for Diagnostic Due in 2 Weeks - Store ' + store,
      '',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('Diagnostic - Store ' + store,
      '',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Diagnostic - Follow-Up Due - Store ' + store,
      '',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

    }

  } else if (project_type == "PEP") {

    if (language == "E") {

      cal.addEvent('Reminder: PEP Due in 2 Weeks - Store ' + store,
      'PEP Due in 2 Weeks  - Store ' + store,
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('PEP Due Today - Store ' + store,
      'Store needs to have PEP submitted today - Store ' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

    } else {

      cal.addEvent('Reminder: PEP Due in 2 Weeks - Store ' + store,
      'PEP Due in 2 Weeks  - Store ' + store,
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('PEP Due Today - Store ' + store,
      'Store needs to have PEP submitted today - Store ' + store,
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));
    }

  } else if (project_type == "QRW") {

    if (language == "E") {

      cal.addEvent('Reminder: Quarterly Readiness Walk Due in 2 Weeks - Store ' + store,
      'Prepare for Quarterly Readiness Walk in 2 weeks',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('Quarterly Readiness Walk - Store ' + store,
      'Quarterly Readiness Walk is today',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Quarterly Readiness Walk - Follow-Up Due - Store ' + store,
      'Follow-up to last weeks Quarterly Readiness Walk is due today',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));

    } else {

      cal.addEvent('Reminder: Quarterly Readiness Walk in 2 Weeks - Store ' + store,
      'Prepare for Quarterly Business Review that is due in 2 weeks',
      'Store ' + store,
      returnDay(-2,2),
      returnDay(-2,3));

      cal.addEvent('Quarterly Readiness Walk - Store ' + store,
      'Quarterly Readiness Walk is today',
      'Store ' + store,
      returnDay(0,2),
      returnDay(0,3));

      cal.addEvent('Quarterly Business Review - Follow-Up Due - Store ' + store,
      'Follow-up to last weeks Quarterly Readiness Walk is due today',
      'Store ' + store,
      returnDay(1,2),
      returnDay(1,3));
    }

  } else {
    alert("YOU BROKE SOMETHING, STOP IT!");
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
