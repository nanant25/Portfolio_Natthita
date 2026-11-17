const myList = document.querySelectorAll("li a");
console.log(myList)
myList.forEach((li) => {
  
  li.addEventListener("mouseenter", () => {
    li.style.color = "#ff7a9c";
    li.style.transform = "scale(1.5)"; 
  });

  li.addEventListener("mouseleave", () => {
    li.style.color = "#ffffff";
    li.style.transform = "scale(1)"; 
  });

});



const rows = document.querySelector("#rows");
const status = document.querySelector("#status");


fetch("./Data/work.json")
  .then(response => response.json())
  .then((Education) => {
      console.log(Education)
    for (const edu of Education) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${edu.level}</td>
      <td>${edu.school}</td>
      <td>${edu.gpax}</td>
    `;
      rows.append(tr);
    }
  });