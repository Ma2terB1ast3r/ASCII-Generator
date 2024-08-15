// Generates ascii banner art for the given text
function generate() {
    const text = document.getElementById('input').value; // Input text
    const padding = parseInt(document.getElementById('padding').value, 10); // Horizontal padding amount
    const verticalPadding = parseInt(document.getElementById('verticalPadding').value, 10); // Vertical padding amount
    const lines = text.split('\n'); // Split text into lines
    const maxLength = Math.max(...lines.map(line => line.length)); // Find the length of the longest line
    const length = maxLength + padding * 2; // Calculate the total length of the banner
    const border = '#'.repeat(length + 4); // Create the top and bottom border
    const emptyLine = `# ${' '.repeat(length)} #`; // Create an empty line with the correct length

    // Top border
    let output = `${border}\n`;
    // Top Padding
    for (let i = 0; i < verticalPadding; i++) {
        output += `${emptyLine}\n`;
    }
    // Print each line with padding
    lines.forEach(line => {
        const totalPadding = length - line.length;
        const leftPadding = Math.floor(totalPadding / 2);
        const rightPadding = totalPadding - leftPadding;
        const paddedText = ' '.repeat(leftPadding) + line + ' '.repeat(rightPadding);
        output += `# ${paddedText} #\n`;
    });
    // Bottom padding
    for (let i = 0; i < verticalPadding; i++) {
        output += `${emptyLine}\n`;
    }
    // Bottom border
    output += `${border}`;

    // Display the output
    document.getElementById('output').innerText = output;
}

// Copy the output to clipboard
function copyText() {
    const output = document.getElementById('output'); // Get the output element
    const range = document.createRange(); // Create a range object
    range.selectNode(output); // Select the output element
    window.getSelection().removeAllRanges(); // Remove all existing selections
    window.getSelection().addRange(range); // Add the range to the selection
    document.execCommand('copy'); // Copy the selected text
    window.getSelection().removeAllRanges(); // Remove the selection
}