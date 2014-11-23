Template.front.rendered = function() {
  $('section#cta').velocity({ opacity: 0.5 }, { duration: 1000 });
  $('#landing-arrow')
    .velocity({ colorAlpha: 0 }, { duration: 0 })
    .velocity({ colorAlpha: "1" }, { duration: 2000 })
    .velocity({ colorAlpha: 0 }, { duration: 1000 })
    .velocity({ colorAlpha: "1" }, { duration: 2000 })
    .velocity({ colorAlpha: 0 }, { duration: 1000 })
    .velocity({ colorAlpha: "+0.1" }, { duration: 2000 });


  var loaded = false;

  $('#landing-arrow').click(function() {
    $('body').moveDown();
  });

  setTimeout(function() {

    if(loaded === false) {
      $('header#landing')
        .velocity({boxShadowBlur: 0}, 0)
        .velocity("fadeIn", { delay: 500, display: 'flex' })
        .velocity("slideDown", { queue: false,  display: 'flex', duration: 600 });

        loaded = true;
    }
  }, 8000);


  $('#wrapper-landing').onepage_scroll({ 
    pagination: false,
    afterMove: function(index) {
      console.log(index);
      if(index >= 2) {

        $('header#landing')
          .velocity({ backgroundAlpha: '50%' })
          .velocity({ boxShadowBlur: '3px' })

        if(loaded === false) {
          $('header#landing')
            .velocity("fadeIn", { display: 'flex', duration: 500 })
            .velocity("slideDown", { queue: false,  display: 'flex', duration: 500 });
            loaded = true;
        }
      } else if(index === 1) {
         $('header#landing').velocity({
           boxShadowBlur: 0
         }, 1000);
      }
    }
  });

  //$('#landing-arrow').waypoint(function(dir) {

    //console.log('dadasd');
    //if(dir === 'down') {
      //$('header#landing')
        //.velocity({ backgroundAlpha: '50%' })
        //.velocity({ boxShadowBlur: '3px' })

      //if(loaded === false) {
        //$('header#landing')
          //.velocity("fadeIn", { delay: 500, display: 'flex' })
          //.velocity("slideDown", { queue: false,  display: 'flex', duration: 600 });
          //loaded = true;
      //}
    //} else if(dir === 'up') {
      //$('header#landing').velocity({
        //boxShadowBlur: 0
      //}, 1000);

      ////$.Velocity.hook($('header#landing'), "boxShadow", "none");
    //}
  //});


};
