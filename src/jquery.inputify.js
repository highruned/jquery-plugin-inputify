jQuery(function($) {
  $('.inputify')
  .each(function() {
    var self = $(this);
    var fn = self.is('input') ? self.val : self.html;
    
    self
    .bind('focus', function() {
      if(fn.apply(self) == self.attr('default'))
        fn.apply(self, ['']);
    })
    .bind('blur', function() {
      var val = fn.apply(self);
      
      if(val == '') {
        fn.apply(self, [self.attr('default')]);
        
        self.removeClass('active');
      }
      else if(val == self.attr('default')) {
        self.removeClass('active');
      }
      else {
        self.addClass('active');
      }
    });
    
    self.trigger('blur');
  });
});
