$(document).ready(function(){
    $('button').on('click',function(){
        
    
    var subreddit =$('#subreddit').val();
    var jsonURL='https://www.reddit.com/r/'+ subreddit +'/.json';
    $.get(jsonURL).done(function(responseBody) {

        for(i=0; i< (responseBody.data.children.length - 10);i++){
            var responses = responseBody.data.children[i];
            console.log(responses)          
            if(responses.data.url.match(/\.(jpg|png|gif)/g)) {
                $('#bar7').append('<div class="selections"><h4 class="author">'+ responses.data.author +' </h4><a href="'+ responses.data.url+'" data-lightbox="examplet6" data-title="'+ responses.data.title+'"><img src='+ responses.data.thumbnail +' class="images" data-lightbox="image"></div>');
            
        };
     };
$('#bar7').slick({
  slidesToShow: 3,
  slidesToScroll:2,
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight:true
}); 
        
  });
    }); 
    });