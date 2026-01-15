import { habits } from "../data.js";

const progressBar = document.getElementById('progress-bar');

export function updateProgressBar() {
    const totalHabits = habits.length;
    let completedHabits = 0;

    habits.forEach(habit => {
        // Add 1 for completed good habits
        if (habit.type === "good" && habit.completed) {
            completedHabits += 1;
        }

        // Subtract 1 for completed bad habits
        if (habit.type === "bad" && habit.completed) {
            completedHabits -= 1;

        // Calculate percentage and clamp between 0-100
    const progressPercent = Math.max(0, Math.min(100, (completedHabits / totalHabits) * 100));

    // Update the progress bar width
    progressBar.style.width = `${progressPercent}%`;

     if (progressPercent < 30) {
      progressBar.style.backgroundColor = "#f44336"; // red
      } else if (progressPercent < 50) {
     progressBar.style.backgroundColor = "#ff9800"; // orange
      } else {
    progressBar.style.backgroundColor = "#4caf50"; // green
  }

}
})}