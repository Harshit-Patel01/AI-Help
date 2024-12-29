const output_container = document.getElementById('output');
const getStoryButton = document.getElementById('get');

getStoryButton.addEventListener('click', async () => {
    const input = document.getElementById('input').value
    try {
        const response = await fetch('http://localhost:3000/?prompt=' +'steps for'+input+'just the step guide need not to give extra info and add a new line character ater new line'); // Make the request to your server

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        output_container.textContent = data;
        output_container.style.display='block';
    } catch (error) {
        console.error("Error fetching story:", error);
        output_container.textContent = "Error fetching story. Check the console.";
    }
});