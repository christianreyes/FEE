$(function() {
	$("#article li").hide();
	$("#article li:first").show();

	$("#content-sidebar li").click(function () {
	  $("#article li:visible").hide();
	  $('#article li').eq($("#content-sidebar li").index(this)).show();
    });
	
	
});