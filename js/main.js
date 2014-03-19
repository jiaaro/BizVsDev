$(function() {
  $(".show-notes a").attr("target", "_blank");

  $(".subscribe-btn").click(function() {
    ga('send', 'event', 'Subscribe button', 'click', 'itunes');
  });
  $(".rss-subscribe").click(function() {
    ga('send', 'event', 'Subscribe button', 'click', 'rss');
  });
});
