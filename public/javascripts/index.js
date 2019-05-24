function createPdf(concierge){
  // Default export is a4 paper, portrait, using milimeters for units
  //fields
  let booking = concierge[0];
  let hotel = concierge[1];
  let hotel_addres = concierge[2];
  let guest = concierge[3];
  let check_in = concierge[4];
  let check_out = concierge[5];
  let nigths = concierge[6];
  let root_type = concierge[7];
  let info = concierge[8];



  var doc = new jsPDF()
  doc.text('Hello world!', 10, 10);
  doc.save('A4.pdf');



}

function getRowValues(row){

  let tbody = $('#tbody')[0].rows;
  var concierge =[];

  for(let i=0; i<9; i++){
    let value = tbody[0].getElementsByTagName("td")[i];
    concierge.push(value.innerHTML);
  }

  createPdf(concierge);
}

$(document).ready(function(){

  $('#generatePdf').click(function(){
    let rows = document.querySelectorAll('.rows');

    for(let i=0; i<rows.length; i++){
      if(rows[i].checked){
        getRowValues($(rows[i]).attr('id'));
        //alert("a");
        //rows[i].setAttribute('checked', 'false');

      }
    }
  });
});

$(document).on('change','.rows',function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);

});
