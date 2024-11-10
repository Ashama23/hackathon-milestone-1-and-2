const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none' ) {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});