function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("triangleBase").value); const height = parseFloat(document.getElementById("triangleHeight").value);
    
    if (base <= 0 || height <= 0) { document.getElementById("triangleAreaResult").textContent = "Invalid input"; return;
    }
    
    const area = 0.5 * base * height; document.getElementById("triangleAreaResult").textContent = `Triangle Area: ${area}`;
}
    
function calculateRectangleArea() {
    const width = parseFloat(document.getElementById("rectangleWidth").value); const length = parseFloat(document.getElementById("rectangleLength").value);

    if (width <= 0 || length <= 0) { document.getElementById("rectangleAreaResult").textContent = "Invalid input"; return;
    }

    const area = width * length;
    document.getElementById("rectangleAreaResult").textContent = `Rectangle Area: ${area}`;
}
    
function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("circleRadius").value);

    if (radius <= 0) {
    document.getElementById("circleAreaResult").textContent = "Invalid input"; return;
    }
    const area = Math.PI * radius * radius; document.getElementById("circleAreaResult").textContent = `Circle Area:
    ${area.toFixed(2)}`;
}
