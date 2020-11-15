function toggleCompareLink(checked_id)
{
	// from the id, we substring to get the item number
	var itemNo = document.getElementById(checked_id).id.substring(11);	

	// when user checked the compare checkbox
	if(document.getElementById(checked_id).checked)
	{	
		console.log(checked_id + " " + itemNo);
		if(document.getElementById(checked_id).id==("cbx_compare"+itemNo))
		{
			$("#href_"+itemNo).show();
			$("#lbl_compare"+itemNo).hide();
		}		
	}
	else // when user unchecked the compare checkbox
	{	
		if(document.getElementById(checked_id).id==("cbx_compare"+itemNo))
		{
			$("#href_"+itemNo).hide();
			$("#lbl_compare"+itemNo).show();
		}	
	}
}

// to store the value of the item selected
var itemArray = [];
function loadComparePage()
{
	// get all the checked checkboxes
	var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
	// push the value of each checked checkbox into array
	for (var i = 0; i < checkboxes.length; i++) {
	  itemArray.push(checkboxes[i].value)
	}
	console.log(itemArray);
	
	// data to pass to next page 
	sessionStorage.setItem("ITEM1", itemArray[0]);
    sessionStorage.setItem("ITEM2", itemArray[1]);
	sessionStorage.setItem("ITEM3", itemArray[2]);
	
	window.location="product-compare.html";
}

