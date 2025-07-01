const display = document.getElementById("display");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.'].includes(event.key)) {
    append(event.key);
  } else if (event.key === 'Backspace') {
    deleteLast();
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}
