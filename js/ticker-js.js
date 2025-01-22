$(document).ready(function(){

    var myET = $('.myTicker').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 2000,
        height: '437',
        visible: 5,
        mousePause: true,
        autoplay: true,
        controls: {
            up: '.up',
            down: '.down',
            toggle: '.toggle',
            stopText: 'Stop !!!'
        },
      //  callbacks: {
           // before: function(ul, li){
           //     console.log('before', this, ul, li);
          //      $(li).css('color', '');
          //  },
          //  after: function(ul, li){
          //      console.log('after', this, ul, li);
          //  },
         //   finish: function(a){
           //     console.log('finish', this, a);
          //  }
        //}
    }).data('easyTicker');
    
    cc = 1;
    $('.add').click(function(){
        $('.myTicker ul').append('<li>' + cc + ' Triangles can be made easily using CSS also without any images. This trick requires only div tags and some</li>');
        cc++;
    });
    
    $('.visible-3').click(function(){
        myET.options['visible'] = 3;
        
    });
    
    $('.visible-all').click(function(){
        myET.stop();
        myET.options['visible'] = 0 ;
        myET.start();
    });
    
    var ticker2 = $('.myTicker2').easyTicker({
        interval: 5000,
        height: 'auto',
        visible: 3
    });

    var ticker3 = $('.myTicker3').easyTicker().data('easyTicker');
    $('.up3').click(function(){
        ticker3.up();
    });

    $('.down3').click(function(){
        ticker3.down();
    });

    var ticker4 = $('.myTicker4').easyTicker({
        interval: 3000,
        height: '50',
        visible: 3
    });

    var ticker5 = $('.myTicker5').easyTicker({
        interval: 5000,
        height: '50',
        visible: 3
    });

    $('.t5Btn').click(function(){
        $('.t5Wrap').fadeToggle();
    });

    var ticker6 = $('.myTicker6').easyTicker({
        interval: 2000,
        visible: 3,
        autoplay: false
    });

});