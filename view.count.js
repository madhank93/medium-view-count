// Get all 'p' elements containing 'Views'
const viewsElements = Array.from(document.querySelectorAll("p")).filter((p) =>
  p.textContent.includes("Views")
);

let totalSum = 0;

// Iterate through each 'Views' element
viewsElements.forEach((viewsElement) => {
  const valueElement = viewsElement.parentElement.querySelector("div > p");
  const titleElement = viewsElement.closest("tr").querySelector("h2:first-of-type");

  if (valueElement && titleElement) {
    let num = parseFloat(valueElement.textContent.replace("K", "")) * (valueElement.textContent.includes("K") ? 1000 : 1);
    const title = titleElement.textContent.trim();

    console.log(`Article "${title}" with view: ${num}`);
    totalSum += num;
  }
});

console.log(`The total sum is: ${totalSum}`);
