// Select all elements that have the specified font
const elements = document.querySelectorAll('*'); // Select all elements

elements.forEach(element => {
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.fontFamily.includes('MinecraftDingsFont')) {
        const text = element.textContent;
        element.textContent = ''; // Clear original text

        // Wrap each letter in a span
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.transition = 'font-family 0.3s ease, color 0.3s ease';
            span.style.display = 'inline-block';
            element.appendChild(span);
        });

        // Hover effect (change font letter by letter)
        element.addEventListener('mouseover', () => {
            const spans = element.querySelectorAll('span');
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.style.fontFamily = 'MinecraftFont'; // Change to new font
                    span.style.color = '#000000'; // Optional color change
                }, index * 100); // Delay for each letter
            });
        });

        // Reset on mouseout (change back letter by letter)
        element.addEventListener('mouseout', () => {
            const spans = element.querySelectorAll('span');
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.style.fontFamily = 'MinecraftDingsFont'; // Reset font
                    span.style.color = ''; // Reset color
                }, index * 100);
            });
        });
    }
});
