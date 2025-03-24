/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function gameDropdownClicked() {
    document.querySelector("#gameDropdown>.dropdown-content").classList.toggle("show");
    document.querySelector("#gameDropdown>.dropbtn>svg").classList.toggle("active");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.classList.contains('dropbtn') && (event.target.parentNode.classList != undefined && !event.target.parentNode.classList.contains('dropbtn'))) {
        document.querySelector("#gameDropdown>.dropbtn>svg").classList.remove("active");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
