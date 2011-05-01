function inputify() {
	jQuery(function($) {
	  $('input[type=text], textarea')
	  .livequery(function() {
	    var self = $(this);
	    this['default'] = self.val();
	    var is_inputify = self.hasClass('inputify');
	    
	    self
	    .bind('focus', function() {
	      if(is_inputify && self.val() == this['default'])
	        self.val('');
	    })
	    .bind('blur', function() {
	      var val = self.val();
	      
	      if(val == '') {
	        if(is_inputify)
	          self.val(this['default']);
	        
	        self.removeClass('active');
	      }
	      else if(val == this['default']) {
	        self.removeClass('active');
	      }
	      else {
	        self.addClass('active');
	      }
	    });
	    
	    self.trigger('blur');
	  });
	});
};

inputify();
