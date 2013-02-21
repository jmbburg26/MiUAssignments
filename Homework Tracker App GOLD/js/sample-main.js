$('#home').on('pageinit', function(){
	//code needed for home page goes here

});	
	
$('#add').on('pageinit', function(){

		var myForm = $('#additemform'),
                var errorLink = $(#usererrors),
                
		    myForm.validate({
			invalidHandler: function(form, validator) {
                                errorLink.click();
                                for (var key in validator.submitted){
                                                $('label[for^="'+ key +'"]')
                                }
                        },
			submitHandler: function() {
                                var data = myForm.serializeArray(); 
                                storeData(data);
                                }
                });
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	console.log(data);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};