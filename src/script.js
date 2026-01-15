import { renderHabits } from "./utilities/habitchecklist.js";
import { updateProgressBar } from "./utilities/progressbar.js";

document.addEventListener("DOMContentLoaded", () => {
    renderHabits();
    updateProgressBar();
}
);