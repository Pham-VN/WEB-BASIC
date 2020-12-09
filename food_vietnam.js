function titre() {
    var x = document.getElementsByTagName("h2");
    for(var i = 0; i < x.length; i++) {
    var y = document.createElement("ul");
        y = "<li>" + x[i].innerHTML + "</li>";
    document.getElementById("demo").innerHTML += y;
    }   
}
function link() {
    var x = document.getElementsByTagName("a")[0].getAttribute("href");
        document.getElementById("demo").innerHTML = "<a href ="+x+">";

}
