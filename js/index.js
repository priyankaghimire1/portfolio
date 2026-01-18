document.addEventListener('DOMContentLoaded', () => {

            const popupContainer1 = document.getElementById('popupContainer1');
            const openPopupBtn1 = document.getElementById('openPopupBtn1');
            const closePopupBtn1 = document.getElementById('closePopupBtn1');

            // Function to open the popup
            function openPopup1() {
                popupContainer1.style.display = 'flex';
            }

            // Function to close the popup
            function closePopup1() {
                popupContainer1.style.display = 'none';
            }

            // Event listeners
            openPopupBtn1.addEventListener('click', openPopup1);
            closePopupBtn1.addEventListener('click', closePopup1);

            // Close popup when clicking outside the popup content
            popupContainer1.addEventListener('click', (event) => {
                if (event.target === popupContainer1) {
                    closePopup1();
                }
            });
             const popupContainer2 = document.getElementById('popupContainer2');
            const openPopupBtn2 = document.getElementById('openPopupBtn2');
            const closePopupBtn2 = document.getElementById('closePopupBtn2');

            // Function to open the popup
            function openPopup2() {
                popupContainer2.style.display = 'flex';
            }

            // Function to close the popup
            function closePopup2() {
                popupContainer2.style.display = 'none';
            }

            // Event listeners
            openPopupBtn2.addEventListener('click', openPopup2);
            closePopupBtn2.addEventListener('click', closePopup2);

            // Close popup when clicking outside the popup content
            popupContainer2.addEventListener('click', (event) => {
                if (event.target === popupContainer2) {
                    closePopup2();
                }
            });
             const popupContainer3 = document.getElementById('popupContainer3');
            const openPopupBtn3 = document.getElementById('openPopupBtn3');
            const closePopupBtn3 = document.getElementById('closePopupBtn3');

            // Function to open the popup
            function openPopup3() {
                popupContainer3.style.display = 'flex';
            }

            // Function to close the popup
            function closePopup3() {
                popupContainer3.style.display = 'none';
            }

            // Event listeners
            openPopupBtn3.addEventListener('click', openPopup3);
            closePopupBtn3.addEventListener('click', closePopup3);

            // Close popup when clicking outside the popup content
            popupContainer3.addEventListener('click', (event) => {
                if (event.target === popupContainer3) {
                    closePopup3();
                }
            });
        });




    window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});