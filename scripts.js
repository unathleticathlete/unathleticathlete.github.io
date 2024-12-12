document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
    });
  });
});
