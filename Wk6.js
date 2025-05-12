 // Toggle Background Color
 const toggleBgBtn = document.getElementById('toggle-bg-btn');
 toggleBgBtn.addEventListener('click', () => {
   document.body.style.backgroundColor =
     document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
 });
 
 // Adjust Text Size with Slider
 const textSlider = document.getElementById('text-slider');
 const sliderText = document.getElementById('slider-text');
 textSlider.addEventListener('input', () => {
   sliderText.style.fontSize = `${textSlider.value}px`;
 });
 
 // Modal Functionality
 const openModalBtn = document.getElementById('open-modal-btn');
 const closeModalBtn = document.getElementById('close-modal-btn');
 const modal = document.getElementById('modal');
 const modalOverlay = document.getElementById('modal-overlay');
 
 openModalBtn.addEventListener('click', () => {
   modal.style.display = 'block';
   modalOverlay.style.display = 'block';
 });
 
 closeModalBtn.addEventListener('click', () => {
   modal.style.display = 'none';
   modalOverlay.style.display = 'none';
 });
 
 modalOverlay.addEventListener('click', () => {
   modal.style.display = 'none';
   modalOverlay.style.display = 'none';
 });
 
 // Form Validation
 const form = document.getElementById('user-form');
 const errorMessages = document.getElementById('error-messages');
 
 form.addEventListener('submit', (e) => {
   e.preventDefault(); // Prevent form submission
 
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
 
   let errors = [];
 
   if (name.length < 3) {
     errors.push('Name must be at least 3 characters long.');
   }
 
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     errors.push('Please enter a valid email address.');
   }
 
   const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
   if (!passwordRegex.test(password)) {
     errors.push(
       'Password must be at least 8 characters long, with one uppercase letter and one number.'
     );
   }
 
   if (errors.length > 0) {
     errorMessages.innerHTML = errors.join('<br>');
   } else {
     errorMessages.innerHTML = 'Form submitted successfully!';
     form.reset(); // Reset the form
   }
 });
  