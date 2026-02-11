// ---- Love Quiz ----
function startQuiz() {
    const questions = [
        { q: "What's your ideal date?", a: ["Movie night", "Picnic", "Adventure"] },
        { q: "Favorite romantic color?", a: ["Red", "Pink", "Purple"] },
        { q: "Ideal gift for your partner?", a: ["Flowers", "Chocolate", "Jewelry"] }
    ];

    let result = "";
    questions.forEach((q, i) => {
        const answer = prompt(q.q + "\nOptions: " + q.a.join(" / "));
        result += `Q${i+1}: ${answer}\n`;
    });

    alert("Your quiz answers:\n" + result);
}

// ---- Virtual Love Letter ----
function sendLetter() {
    const from = document.getElementById('fromName').value;
    const to = document.getElementById('toName').value;
    const msg = document.getElementById('letterMessage').value;

    if (!from || !to || !msg) {
        alert("Please fill all fields!");
        return;
    }

    const letter = `💌 Dear ${to},\n\n${msg}\n\nWith love, ${from} 💖`;
    document.getElementById('letterOutput').innerText = letter;
}
