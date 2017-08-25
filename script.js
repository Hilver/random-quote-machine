$(document).ready(function() {
$(".btn-quote").on('click',function(e){
  e.preventDefault();
 $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quoteMsg').html(post.content);
        $('#quote-title').text(post.title);
       var tweetTit = $('#quote-title').text();
       var tweetVal = $("#quoteMsg").text(); // Get the quote's text to use it in tweet's link
        $('.btn-tweet').click(function(){
        tweetTit = $('#quote-title').text(); // Update variable
        tweetVal = $("#quoteMsg").text(); // Update variable
   window.open(
  'https://twitter.com/intent/tweet?text=' + "\"" + tweetVal + "\"" + " - " + tweetTit,
  '_blank' // <- This is what makes it open in a new window.
);

});
        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);

        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });

   $(".btn-tweet").animate({
    opacity: 1
  });
  });
  });
