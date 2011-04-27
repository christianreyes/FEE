$(function() {
	$("#article-pictures li").hide();
	$("#article-pictures li:first").show();
	$("#article li").hide();
	$("#article li:first").show();
	
	$("#content-sidebar li").click(function(event){
	  event.preventDefault();
	  
	  $("#content-sidebar li").eq(id_selected).removeClass("selected");
	  $("#article li:visible").fadeOut();
	  $("#article-pictures li:visible").hide();
	  
	  id_selected = $("#content-sidebar li").index(this);
	  $('#article li').eq(id_selected).fadeIn();
	  $("#article-pictures li").eq(id_selected).show();
	  $(this).addClass("selected");
    });
	
});

var id_selected = -1;