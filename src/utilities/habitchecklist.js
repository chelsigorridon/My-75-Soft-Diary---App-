import { habits } from "../data.js";
import { updateProgressBar } from "./progressbar.js";

const habitlist = document.getElementById("habit-list");

export function renderHabits() {
    habitlist.innerHTML = "";
    habits.forEach( habit => {
    const list = document.createElement("li");
        
    list.innerHTML = `
    <label>
    <input type="checkbox" ${habit.completed ? "checked" :"" } data-id="${habit.id}"/>
    ${habit.name} 
    </label>

    `;
    const checkbox = list.querySelector('input');

    checkbox.addEventListener('change', () => {
    // Find the habit by its id
    const habitId = parseInt(checkbox.dataset.id);
    const habit = habits.find(h => h.id === habitId);

    // Update its completed state
    habit.completed = checkbox.checked;

    // Update the progress bar immediately
    updateProgressBar();
    });

    habitlist.appendChild(list);
    });
   }               


