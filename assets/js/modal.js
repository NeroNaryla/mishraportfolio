
    // Gets the modal & when off form is clicked, it closes
    var modal = document.getElementById('id01');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
    }
