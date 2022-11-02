const container = document.querySelectorAll(".size");
const hoverContainer = document.querySelectorAll(".hover");
const sum = document.getElementById("sum");
// const money = document.querySelectorAll(".money");

const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

container.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.previousElementSibling.style.display = "grid";
  });
});

container.forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    e.target.previousElementSibling.style.display = "none";
  });
});

container.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    e.target.previousElementSibling.style.display = "grid";
  });
});

container.forEach((item) => {
  item.addEventListener("dblclick", (e) => {
    e.target.previousElementSibling.style.display = "none";
  });
});

async function getData(api) {
  const data = await fetch(api);
  const receivedData = await data.json();
  const finalData = await receivedData;

  container[0].style.height = finalData[0].amount + "%";
  container[1].style.height = finalData[1].amount + "%";
  container[2].style.height = finalData[2].amount + "%";
  container[3].style.height = finalData[3].amount + "%";
  container[4].style.height = finalData[4].amount + "%";
  container[5].style.height = finalData[5].amount + "%";
  container[6].style.height = finalData[6].amount + "%";

  hoverContainer[0].textContent += finalData[0].amount;
  hoverContainer[1].textContent += finalData[1].amount;
  hoverContainer[2].textContent += finalData[2].amount;
  hoverContainer[3].textContent += finalData[3].amount;
  hoverContainer[4].textContent += finalData[4].amount;
  hoverContainer[5].textContent += finalData[5].amount;
  hoverContainer[6].textContent += finalData[6].amount;

  let total = 0;
  finalData.forEach((data) => (total += data.amount));
  sum.textContent = total;

  let date = new Date().getDay();
  finalData.forEach((data) => {
    if (data.day === weekday[date]) {
      container[date - 1].style.backgroundColor = "hsl(186, 34%, 60%)";
    }
  });
}

getData("data.json");
