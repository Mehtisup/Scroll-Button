<script>
window.onscroll = function() {scrollTop()};

function scrollTop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("myBtn").style.opacity = "1";
        document.getElementById("myBtn").style.transform = "translateY(-30px)";
    } else {
        document.getElementById("myBtn").style.opacity = "0";
        document.getElementById("myBtn").style.transform = "translateY(0px)";
        
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
</script>
