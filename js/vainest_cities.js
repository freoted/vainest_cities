$(function() {

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/search?q=newyork&access_token=27703032.79547bd.418b75856eb1419f9fc1311a518db229",
        success: function(data) {
            console.log(data)
            $(".instagram").append("<span class='instaCount'>" + data.data[0].media_count + "</span>");
        }
    });
});