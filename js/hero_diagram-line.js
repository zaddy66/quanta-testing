function getCircleCenter(circle) {
    const rect = circle.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }
  
  function getContainerOffset() {
    const container = document.getElementById("diagram-container");
    const containerRect = container.getBoundingClientRect();
    return {
      x: containerRect.left,
      y: containerRect.top,
    };
  }
  
  function createLine(svg, circle1Id, circle2Id, strength) {
    // Create an SVG line element
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
    // Set the stroke width dynamically based on the strength
    let strokeWidth;
    switch (strength) {
      case "medium":
        strokeWidth = 2;
        break;
      case "strong":
        strokeWidth = 3;
        break;
      case "weak":
      default:
        strokeWidth = 1;
        break;
    }
  
    line.setAttribute("stroke", "#614AD6");
    line.setAttribute("stroke-width", strokeWidth);
    line.classList.add(`${circle1Id}-to-${circle2Id}`);
  
    // Append the line to the SVG
    svg.appendChild(line);
    return line;
  }
  
  function updateLinePosition(circle1, circle2, line, containerOffset) {
    const center1 = getCircleCenter(circle1);
    const center2 = getCircleCenter(circle2);
  
    // Set the position of the line relative to the container
    line.setAttribute("x1", center1.x - containerOffset.x);
    line.setAttribute("y1", center1.y - containerOffset.y);
    line.setAttribute("x2", center2.x - containerOffset.x);
    line.setAttribute("y2", center2.y - containerOffset.y);
  }
  
  function connectCircles() {
    const svg = document.getElementById("svgLine"); // Assuming you have one SVG for all lines
    const circles = document.querySelectorAll("[data-diagram-circle]");
    const containerOffset = getContainerOffset();
  
    // Loop through each circle and parse its connections
    circles.forEach((circle) => {
      const circleId = circle.getAttribute("data-diagram-circle");
      const connectTo = circle.getAttribute("data-diagram-connect");
  
      if (connectTo) {
        const targetCircles = connectTo.split(",").map((pair) => {
          const [targetId, strength] = pair.split(":").map((str) => str.trim());
          return { targetId, strength };
        });
  
        // Create and update lines for each connection
        targetCircles.forEach(({ targetId, strength }) => {
          const targetCircle = document.querySelector(
            `[data-diagram-circle="${targetId}"]`
          );
          if (targetCircle) {
            const lineClass = `${circleId}-to-${targetId}`;
            let line = svg.querySelector(`.${lineClass}`);
  
            if (!line) {
              // If the line doesn't exist, create it with the proper stroke width
              line = createLine(svg, circleId, targetId, strength);
            }
  
            // Update the position of the line
            updateLinePosition(circle, targetCircle, line, containerOffset);
          }
        });
      }
    });
  }
  
  window.addEventListener("resize", connectCircles);
  window.addEventListener("load", connectCircles);
  