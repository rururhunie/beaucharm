$(document).ready(function()
{
	$('#admin_login_btn_login').click(function()
	{
		var e = $('#admin_login_email').val();
		var p = $('#admin_login_password').val();
		if(!checkLength(e,1))
		{
			bootbox.alert('Please enter your email address..');
			return false;
		}
		if(!checkLength(p,4))
		{
			bootbox.alert('Password Too short!');
			return false;
		}
		$.ajax({
			url: ajaxUrl + "admin_login.php",
            type: "POST",
            data:
                {'email': e,
            	 'password' : p,
            	},
            success:function(res){
            	if(res === "1")
            	{
            		document.location.href = url + "cpanel/dashboard";
            	}else bootbox.alert(res);
             }
          	});
	});
});