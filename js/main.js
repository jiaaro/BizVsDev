$(function() {
  $(".show-notes a").attr("target", "_blank");

  $(".subscribe-btn").click(function() {
    track_subscribe('itunes');
    defer_click(this);
    return false;
  });
  $(".rss-subscribe").click(function() {
    track_subscribe('rss');
    defer_click(this);
    return false;
  });

  function defer_click(elem) {
    var destination = $(elem).attr("href");
    $(".subscribe-btn, .rss-subscribe").text("Woo hoo!");

    setTimeout(function() {
      location.href = destination;
    }, 500);
  }

  function track_subscribe(sub_type) {
    ga('send', 'event', 'Subscribe button', 'click', sub_type);

    // FACEBOOK PORTION:
    var fb_param = window.fb_param = {};
    fb_param.pixel_id = '6013752599143';
    fb_param.value = '0.01';
    fb_param.currency = 'USD';

    (function(){
      var fpw = document.createElement('script');
      fpw.src = '//connect.facebook.net/en_US/fp.js';
      var ref = document.getElementsByTagName('script')[0];
      ref.parentNode.insertBefore(fpw, ref);
    })();
  }
});
