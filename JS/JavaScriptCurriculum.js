document.addEventListener('DOMContentLoaded', function () {
    function showLessonContent(lessonNumber) {
        // Hide lesson buttons container
        const lessonButtonsContainer = document.querySelector('.lesson-buttons-container');
        lessonButtonsContainer.style.display = 'none';
    
        // Show the specific lesson content
        const lessonContent = document.getElementById(`lesson-${lessonNumber}-content`);
        lessonContent.style.display = 'block';
    }
    
    // Attach click event listeners to lesson buttons
    const lessonButtons = document.querySelectorAll('.lesson-button');
    lessonButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lessonNumber = button.textContent.split(' ')[1]; // Extract lesson number from button text
            showLessonContent(lessonNumber);
        });
    });
});