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
      if(fn.apply(self) == '')
        fn.apply(self, [self.attr('default')]);      
    });
    
    self.trigger('blur');
  });
});
