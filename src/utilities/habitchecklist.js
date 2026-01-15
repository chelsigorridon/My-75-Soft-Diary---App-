import { habits } from "../data.js";

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
    habitlist.appendChild(list);
    });
}               
