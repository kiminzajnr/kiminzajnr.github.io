document.addEventListener('DOMContentLoaded', function () {
    // Go to your selected content
    document.getElementById("goButton").addEventListener("click", function() {
        let selectedTrack = document.getElementById("trackDropdown").value;

        if (selectedTrack === "JavaScript") {
            window.location.href = "javacript_curriculum.html";
        } else if (selectedTrack == "Python") {
            window.location.href = "python_curriculum.html";
        }
    });
});