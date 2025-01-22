function genericSocialShare(url) {
	window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
	return true;
}
jQuery(document).ready(function () {
	jQuery(".changelangauges").click(function () {
	
   
    location.replace(ChangeLangRoute + "?lang=" + jQuery(this).attr('data-lang'));


	});
	var myCustomForms = jQuery("form.customformvalidations");

	myCustomForms.each(function (i) {
		var myCustomForm = myCustomForms.eq(i);
		myCustomForm.validate({
			highlight: function (element) {
				jQuery(element).parent().addClass('formblank-has-error');
			},
			unhighlight: function (element) {
				jQuery(element).parent().removeClass('formblank-has-error');
			},
		});
	});

	/** Disability Cookies Setup */
	jQuery('.DisabilityColorContrastMode').on('click',function() {
		let ModeType = jQuery(this).attr('data-mode');
		let expiryDate = new Date();
		expiryDate.setMonth(expiryDate.getMonth() + 12);
		document.cookie = "ColorContrastTheme=" + ModeType + "; path=/" + "; expires= " + expiryDate + ";"; 
		window.location.reload(true);
	});

	jQuery('.DisabilityFontSizeMode').on('click',function() {
		let ModeType = jQuery(this).attr('data-mode');
		let expiryDate = new Date();
		expiryDate.setMonth(expiryDate.getMonth() + 12);
		document.cookie = "FontSizeModeTheme=" + ModeType + "; path=/" + "; expires= " + expiryDate + ";"; 
		window.location.reload(true);
	});

	jQuery(".skiptomaincontentscroll").click(function (){
		jQuery('html, body').animate({
			scrollTop: $("#innerContentSectionStart").offset().top
		}, 2000);
	});

	jQuery(".ExternalSiteClick").click(function () {
		let link = jQuery(this).attr('data-href');
		console.log(link);
		Swal.fire({
			html: "You are about to proceed to an external website. Click Yes to proceed",
			showCancelButton: true,
			confirmButtonText: "Yes",
			cancelButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				window.open(link, '_blank');
			}
		});
	});
	
	/** Disability Cookies Setup */
});

function sweet_alert(heading, message, alert_type) {
	Swal.fire(
		heading,
		message,
		alert_type
	);
}

function ValidateFormSubmit(formclass, label = '') {
	jQuery(document).off().on("submit", "." + formclass, function (e) {
		e.preventDefault();
		var ajax_save_form = jQuery(this);
		var formaction = ajax_save_form.attr('data-action');
		jQuery.ajax({
			enctype: 'multipart/form-data',
			url: formaction,
			data: new FormData(this),
			method: 'post',
			dataType: 'json',
			processData: false,
			contentType: false,
			cache: false,
			timeout: 600000,
			beforeSend: function () {
				ajax_save_form.find(":submit").prop('disabled', true);
				ajax_save_form.find(":submit").html('Processing please wait...');
			},
			success: function (response) {
				var errorcode = '';
				ajax_save_form.find(":submit").prop('disabled', false);
				ajax_save_form.find(":submit").html(label);
				if (response.status) {
					Swal.fire({
						title: 'Success',
						html: response.message,
						icon: 'success',
						showCancelButton: false,
						confirmButtonText: 'Okay',
					}).then((result) => {
						if (result.isConfirmed) {
							window.location.reload();
						}
					});
				} else {
					jQuery.each(response.message, function (key, value) {
						console.log(value);
						errorcode += '<p>' + value + '</p>';
					});
					console.log(errorcode);
					sweet_alert('Error', errorcode, 'error');
				}
			}
		});
	});
}