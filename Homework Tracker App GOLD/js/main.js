$('#home').on('pageinit', function(){
	//code needed for home page goes here

});	
	
$('#add').on('pageinit', function(){
		var 	myAddForm = $('#additemform'),
			errorLink = $('#errorlinks')
		;
                
		myAddForm.validate({
		invalidHandler: function(form, validator) {
                       errorLink.click();
                       for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]')
				var legend = label.closest('fieldset').find('ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				console.log(fieldName);
				};
			},
			submitHandler: function() {
                                var itemData = myAddForm.serializeArray();
                                parseAddForm(itemData);
				alert("Homework Added!");
                                }
                });
	//any other code needed for addItem page goes here
	
		// Save user data to Local Storage
		var parseAddForm = function(itemData){
			var key		= Math.floor(Math.random()*100000001);
			localStorage.setItem(key, JSON.stringify(itemData));
			console.log(itemData);
		};
	});

	//The functions below can go inside or outside the pageinit function for the page in which it is needed.

	
	var autofillData = function (){
	 
	};

	function getData(){
		
	};
	


	var deleteItem = function (){
		
	};

	var clearLocal = function(){

	};