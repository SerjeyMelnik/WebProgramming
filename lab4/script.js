$(document).ready(function(){
	inputEmail = $('input[type="email"]')[0];
	inputPassword = $('input[type="password"]')[0];
	
$("#form").on("submit", function check(e)
{
	e.preventDefault();
	
	
	//clearTimeout(hide);
	hide  = setTimeout(hideEl,3000);
	if (inputEmail.value == "")
	{
		$(inputEmail).addClass("errorInput");
		$(inputEmail.parentNode).find(".errorInputBlock").addClass("show");
		$(".errorBlock").addClass("show");
		
	}
	if (inputPassword.value == "")
	{
		$(inputPassword).addClass("errorInput");
		$(inputPassword.parentNode).find(".errorInputBlock").addClass("show");
		$(".errorBlock").addClass("show");
	}
	if (inputEmail.value != "" && inputPassword.value != "") this.submit();
	$("#close").on("click",hideEl);
	//clearTimeout(hide);
	$(inputEmail,inputPassword).on("focus",hideEl);
	function hideEl()
		{
			$(".errorInputBlock").removeClass("show");
			$(".errorBlock").removeClass("show");
			$(inputEmail).removeClass("errorInput");
			$(inputPassword).removeClass("errorInput");
			console.log(true);
		}
});
 
});
