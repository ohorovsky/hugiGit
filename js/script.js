// there is a bug with MENU button .... 

$(document).ready(function(){
    
    $('.flex-images').flexImages({
        rowHeight: 440,
        
    });
    $('.menuBtn').click(function(){
        $('.menu').toggleClass("showMenu");
        $('.menuBtn').toggleClass("open");
        
    });
    
    $('.menuItems a').click(function(){
        $('.menu').toggleClass("showMenu");
        $('.menuBtn').toggleClass("open");
    })
    
    $(".imgLayer").hover(
      function () {
        $(".innerBorder").addClass("slideRight");
      },
      function () {
        $(".innerBorder").removeClass("slideRight");
      }
    );
    
    $('.imgLayer').click(function(){
        var link = $(this).attr("data-link");
        $("iframe").attr("src",link);
        
        $('.videoModal').addClass("openModal");
        
    })
    $('.closeVideo,.embed-container').click(function(){
        
        $('.videoModal').removeClass("openModal");
        $("iframe").attr("src","");
    })
    
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
        //Select animation
        var animation = 'easeOutCubic';
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, animation, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
    
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        
        $(".layer h1").css({
            'transform' : 'translate(50%, -'+ wScroll/8 +'%)',
            'opacity': 1 - (wScroll/400),
        })
        
        $(".layer p").css({
            'transform' : 'translate(0px, -'+ wScroll/9 +'%)',
            'opacity': 1 - (wScroll/500),
           
        })
        
        $(".layer .portfolioBtn").css({
            'transform' : 'translate(0px, -'+ wScroll/11 +'%)',
            'opacity': 1 - (wScroll/600),
           
        })
        
        var scrollBottom = $(".footerInfo").offset().top - window.innerHeight;
        var rozdiel = scrollBottom - wScroll;
        console.log(rozdiel);
        
        if(rozdiel<=0){
            $(".footerPhoto").addClass("slidePhoto");
            $(".footerInfo").addClass("shrinkFooter");
           
        }
        
    });
    
})