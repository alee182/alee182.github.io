function showSection(sectionId) {
    
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
  
    
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
  }
  
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); 
      const sectionId = this.getAttribute('href').substring(1); 
      showSection(sectionId); 
    });
  });
  
  
  window.addEventListener('load', () => {
    showSection('section1');
  });
  