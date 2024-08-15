// Generates ascii banner art for the given text
function generate() {
    const text = document.getElementById('input').value;
    const padding = parseInt(document.getElementById('padding').value, 10);
    const verticalPadding = parseInt(document.getElementById('verticalPadding').value, 10);
    const lines = text.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const length = maxLength + padding * 2;
    const border = '#'.repeat(length + 4);
    const emptyLine = `# ${' '.repeat(length)} #`;

    console.log(border);
    for (let i = 0; i < verticalPadding; i++) {
        console.log(emptyLine);
    }
    lines.forEach(line => {
        const totalPadding = length - line.length;
        const leftPadding = Math.floor(totalPadding / 2);
        const rightPadding = totalPadding - leftPadding;
        const paddedText = ' '.repeat(leftPadding) + line + ' '.repeat(rightPadding);
        console.log(`# ${paddedText} #`);
    });
    for (let i = 0; i < verticalPadding; i++) {
        console.log(emptyLine);
    }
    console.log(border);

    let output = `${border}\n`;
    for (let i = 0; i < verticalPadding; i++) {
        output += `${emptyLine}\n`;
    }
    lines.forEach(line => {
        const totalPadding = length - line.length;
        const leftPadding = Math.floor(totalPadding / 2);
        const rightPadding = totalPadding - leftPadding;
        const paddedText = ' '.repeat(leftPadding) + line + ' '.repeat(rightPadding);
        output += `# ${paddedText} #\n`;
    });
    for (let i = 0; i < verticalPadding; i++) {
        output += `${emptyLine}\n`;
    }
    output += `${border}`;

    document.getElementById('output').innerText = output;
}

function copyText() {
    const output = document.getElementById('output');
    const range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}