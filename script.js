const phrases = ["Web Developer","Freelancer","Full Stack Developer"];
        let index = 0; // Current phrase index
        let charIndex = 0; // Current character index

        function type() {
            if (charIndex < phrases[index].length) {
                document.getElementById("namechanger").textContent += phrases[index][charIndex];
                charIndex++;
                setTimeout(type, 100); // Type next character
            } else {
                setTimeout(deleteText, 2000); // Wait before deleting
            }
        }

        function deleteText() {
            if (charIndex > 0) {
                const currentPhrase = phrases[index];
                document.getElementById("namechanger").textContent = currentPhrase.slice(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteText, 50); // Delete next character
            } else {
                index = (index + 1) % phrases.length; // Move to the next phrase
                charIndex = 0; // Reset character index
                setTimeout(type, 1000); // Wait before typing next phrase
            }
        }

        type(); 

        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Progress bar in view!');
                    animateBars();
                }
            });
        });
        
        


        
        



