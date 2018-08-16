var fueltype = [];
$(document).ready(function() {
 makeActiveSidebar();
 getProductTable();
// setpagination();

$("table")
.tablesorter({widthFixed: true, widgets: ['zebra']})
.tablesorterPager({container: $("#pager")});

});

function onCusremove(event){
    console.log('--inside on'+event);
    var index=($(event.target).parents('tr').index());
    document.getElementById("dataTableCus").deleteRow(index);
    return false;
}

function makeActiveSidebar(){
  document.getElementById("customerFrom").setAttribute("class", "");
  document.getElementById("productFrom").setAttribute("class", "active");
  document.getElementById("billingFrom").setAttribute("class", "");
  document.getElementById("dailyreportFrom").setAttribute("class", "");
  document.getElementById("weeklyreportFrom").setAttribute("class", "");
  document.getElementById("monthlyreportFrom").setAttribute("class", "");
}

function getCustomerTable(){

    var customervalues = (db1.get('customer').value());
  for(var i=0;i<customervalues.length;i++) {

   var table = document.getElementById("custTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
                var cell8 = row.insertCell(7);
                    var cell9 = row.insertCell(8);
                        var cell10 = row.insertCell(9);
                            var cell1 = row.insertCell(10);




        console.log("------fuel value s "+ customervalues[i].customerid)
    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("value",customervalues[i].customerid);
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "CUS_ID" + i);
    element.setAttribute("readonly","true");
    cell1.appendChild(element);



    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value",customervalues[i].customername);
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "CUS_NAME" + i);
    element.setAttribute("readonly","true");
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value",customervalues[i].address1);
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "CUS_ADDR1" + i);
    element.setAttribute("readonly","true");
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value",customervalues[i].address2);
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "CUS_ADDR2" + i);
    element.setAttribute("readonly","true");
    cell4.appendChild(element);


        var element = document.createElement("input");
        element.setAttribute("class", "form-control");
        element.setAttribute("ondrop","return false;");
        element.setAttribute("onpaste","return false;");
        element.setAttribute("value",customervalues[i].area);
        element.setAttribute("style", "text-align:right");
        element.setAttribute("id", "CUS_AREA" + i);
        element.setAttribute("readonly","true");
        cell5.appendChild(element);


            var element = document.createElement("input");
            element.setAttribute("class", "form-control");
            element.setAttribute("ondrop","return false;");
            element.setAttribute("onpaste","return false;");
            element.setAttribute("value",customervalues[i].pincode);
            element.setAttribute("style", "text-align:right");
            element.setAttribute("id", "CUS_PINCODE" + i);
            element.setAttribute("readonly","true");
            cell6.appendChild(element);

            var element = document.createElement("input");
            element.setAttribute("class", "form-control");
            element.setAttribute("ondrop","return false;");
            element.setAttribute("onpaste","return false;");
            element.setAttribute("value",customervalues[i].state);
            element.setAttribute("style", "text-align:right");
            element.setAttribute("id", "CUS_STATE" + i);
            element.setAttribute("readonly","true");
            cell7.appendChild(element);


                        var element = document.createElement("input");
                        element.setAttribute("class", "form-control");
                        element.setAttribute("ondrop","return false;");
                        element.setAttribute("onpaste","return false;");
                        element.setAttribute("value",customervalues[i].mobile);
                        element.setAttribute("style", "text-align:right");
                        element.setAttribute("id", "CUS_MOBILE" + i);
                        element.setAttribute("readonly","true");
                        cell8.appendChild(element);


                                    var element = document.createElement("input");
                                    element.setAttribute("class", "form-control");
                                    element.setAttribute("ondrop","return false;");
                                    element.setAttribute("onpaste","return false;");
                                    element.setAttribute("value",customervalues[i].tinno);
                                    element.setAttribute("style", "text-align:right");
                                    element.setAttribute("id", "CUS_TINNO" + i);
                                    element.setAttribute("readonly","true");
                                    cell9.appendChild(element);


                                                var element = document.createElement("input");
                                                element.setAttribute("class", "form-control");
                                                element.setAttribute("ondrop","return false;");
                                                element.setAttribute("onpaste","return false;");
                                                element.setAttribute("value",customervalues[i].email);
                                                element.setAttribute("style", "text-align:right");
                                                element.setAttribute("id", "CUS_EMAIL" + i);
                                                element.setAttribute("readonly","true");
                                                cell10.appendChild(element);

                                                var element = document.createElement("input");
                                                element.setAttribute("class", "form-control");
                                                element.setAttribute("ondrop","return false;");
                                                element.setAttribute("onpaste","return false;");
                                                element.setAttribute("value",customervalues[i].remarks);
                                                element.setAttribute("style", "text-align:right");
                                                element.setAttribute("id", "CUS_REMARKS" + i);
                                                element.setAttribute("readonly","true");
                                                cell11.appendChild(element);

  /**var element = document.createElement("input");
    element.setAttribute("class", "form-control");
    element.setAttribute("onkeypress","return isNumber(event)");
    element.setAttribute("onchange","return validateDecimal(this)");
    element.setAttribute("onblur","return calculateTotal1(this)");
    element.setAttribute("ondrop","return false;");
    element.setAttribute("onpaste","return false;");
    element.setAttribute("value",productvalues[i].mrp);
    element.setAttribute("style", "text-align:right");
    element.setAttribute("id", "PROD_MRP" + i);
    element.setAttribute("readonly","true");
    cell3.appendChild(element); **/


}
}

function cusAddAction() {
  //document.getElementById('product').reset();
  $('#modalCompose').modal('show');
}

function addRowcustomer() {
    var table = document.getElementById("dataTableCus");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.id = rowCount;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11= row.insertCell(10);


    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "customerid" + rowCount);
    cell1.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "customername" + rowCount);
    cell2.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:left");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusaddr1" + rowCount);
    cell3.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusaddr2" + rowCount);
    cell4.appendChild(element);


    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusarea" + rowCount);
    cell5.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cuspincode" + rowCount);
    cell6.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusstate" + rowCount);
    cell7.appendChild(element);


    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "cusmobile" + rowCount);
    cell8.appendChild(element);

    var element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("style", "text-align:right");
    element.setAttribute("class", "form-control");
    element.setAttribute("id", "custinno" + rowCount);
    cell9.appendChild(element);



        var element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("style", "text-align:right");
        element.setAttribute("class", "form-control");
        element.setAttribute("id", "cusemail" + rowCount);
        cell10.appendChild(element);


            var element = document.createElement("input");
            element.setAttribute("type", "text");
            element.setAttribute("style", "text-align:right");
            element.setAttribute("class", "form-control");
            element.setAttribute("id", "cusremarks" + rowCount);
            cell11.appendChild(element);

    var element = document.createElement("button");
    element.setAttribute("style", "text-align:right;height: 30px !important;");
    //element.innerHTML="[X]";
    element.setAttribute("class", "btn btn-danger fa fa fa-remove");
    element.setAttribute("id", "cusaction" + rowCount);
    element.setAttribute("onclick","onremove(event)");
    cell12.appendChild(element);


    var obj = { "customerid": $('#customerid'+i).val(), "customername": $('#customername'+i).val(),"address1":$('#cusaddr1'+i).val(),
   "address2":$('#cusaddr2'+i).val(), "area":$('#cusarea'+i).val(), "pincode":$('#cuspincode'+i).val(), "state":$('#cusstate'+i).val(),
 "mobile":$('#cusmobile'+i).val(), "tinno":$('#custinno'+i).val(), "email":$('#cusemail'+i).val(), "remarks":$("cusremarks"+i).val()
};
    db.get('customer').push(obj).write();
   }
   $('#modalCompose').modal('hide');

}
