jQuery(document).ready(function(){
	jQuery('.toggle-desc').click(function(){
		jQuery(this).parent().parent().parent().next('.bpe-desc').toggle();
		return false;
	});
});