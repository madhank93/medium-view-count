// Get all 'p' elements containing 'Views'
const viewsElements = Array.from(document.querySelectorAll("p")).filter((p) =>
  p.textContent.includes("Views")
);

let totalSum = 0;

// Iterate through each 'Views' element
viewsElements.forEach((viewsElement) => {
  // Find the preceding sibling 'div' and its 'p' child
  const valueElement = viewsElement.parentElement.querySelector("div > p");

  if (valueElement) {
    let text = valueElement.textContent.trim();
    let num;

    if (text.includes("K")) {
      // Convert 'k' to 1000 and multiply
      num = parseFloat(text.replace("K", "")) * 1000;
    } else {
      // Extract the numerical value directly
      num = parseFloat(text);
    }

    console.log(`Article view: ${num}`);

    totalSum += num;
  }
});

console.log(`The total sum is: ${totalSum}`);
