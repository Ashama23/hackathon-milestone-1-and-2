var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
