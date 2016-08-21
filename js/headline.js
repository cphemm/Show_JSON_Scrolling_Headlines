$(function() {
    function loadFeed () {
        var url = "http://www.stellarbiotechnologies.com/media/press-releases/json";
        var getFeed = function (offset) {
            $.getJSON(url + "?limit=20&offset=" + offset, function(feed) {
                $.each(feed.news, function(i, headline) {
                    $("#feed").append('<li class="list-group-item-info">' + headline.title + '<br>'
                        + 'Publication Date: ' + headline.published + '</li>');
                });

                $('#feed').on('scroll', function() {
                    if($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
                        if (feed.news.length == 20) {
                            getFeed(offset + 10);
                        }
                    }
                });
            });
        };

        getFeed();
    }
    loadFeed();

});
