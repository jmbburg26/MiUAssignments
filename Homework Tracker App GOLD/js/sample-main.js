$('#home').on('pageinit', function(){
	//code needed for home page goes here

});	
	
$('#add').on('pageinit', function(){

		var myForm = $('#additemform'),
                    errorLink = $('#usererrors')
                ;
                
		    myForm.validate({
			invalidHandler: function(form, validator) {
                                errorLink.click();
                                var html = '';
                                for (var key in validator.submitted){
                                        var label = $('label[for^="'+ key +'"]');
                                        var legend = label.closest('fieldset').find('ui-controlgroup-label');
                                        var fieldName = legend.length ? legend.text() : label.text();
                                        console.log(fieldName)
                                        html += '<li>' + fieldName +'<li>';
                                };
                                $("#usererrors ul").html(html);
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