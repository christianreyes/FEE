$(function() {
	$("#article li").hide();
	$("#article li:first").show();
	
	$("#content-sidebar li").click(function(event){
	  event.preventDefault();
	  $("#article li:visible").fadeOut();
	  var id = $("#content-sidebar li").index(this);
	  $('#article li').eq(id).fadeIn();
    });
	
	
});