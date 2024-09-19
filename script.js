// Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const currentDay = new Date().getDay();

// Highlight the rows for the current day
const rows = document.querySelectorAll(`.${days[currentDay]}`);
rows.forEach(row => {
    row.classList.add("highlight");
});

// Function to alert the tasks for the current day
function remindTasks() {
    let tasks = [];
    rows.forEach(row => {
        const person = row.children[1].textContent;
        const morningTask = row.children[2].textContent;
        const eveningTask = row.children[3].textContent;
        tasks.push(`${person}: Morning - ${morningTask}, Evening - ${eveningTask}`);
    });
    alert(`Today's Tasks:\n\n${tasks.join('\n')}`);
}

// Automatically remind tasks when the page loads
window.onload = remindTasks;
