function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operator = document.getElementById("operator").value;
  var result = 0;
  
  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "*") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "/") {
    result = parseFloat(num1) / parseFloat(num2);
  }

  if (result === 25) {
    var password = prompt("Please enter your password to login:");
    if (password === "UseURPASSWD") {
      for (let i = 0; i < 10; i++) {
        setTimeout(function() {
          alert("Logged in successfully!");
        }, i * 1000);
      }
    } else {
      alert("Incorrect password. Please try again.");
    }
  } else {
    document.getElementById("result").value = result;
  }
}
if (result === 49) {
  var password = prompt("Please enter your password to login:");
  if (password === "UseURPASSWD") {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        alert("Logged in successfully!");
      }, i * 1000);
    }
  } else {
    alert("Incorrect password. Please try again.");
  }
} else {
  document.getElementById("result").value = result;
}

if (result === 10) {
  var password = prompt("Please enter your password to login:");
  if (password === "UseURPASSWD") {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        alert("Logged in successfully!");
      }, i * 1000);
    }
  } else {
    alert("Incorrect password. Please try again.");
  }
} else {
  document.getElementById("result").value = result;
}

if (result === 100) {
  var password = prompt("Please enter your password to login:");
  if (password === "UseURPASSWD") {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        alert("Logged in successfully!");
      }, i * 1000);
    }
  } else {
    alert("Incorrect password. Please try again.");
  }
} else {
  document.getElementById("result").value = result;
}

if (result === 1000) {
  var password = prompt("Please enter your password to login:");
  if (password === "UseURPASSWD") {
    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        alert("Logged in successfully!");
      }, i * 1000);
    }
  } else {
    alert("Incorrect password. Please try again.");
  }
} else {
  document.getElementById("result").value = result;
}