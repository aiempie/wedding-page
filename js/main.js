const apiUrl =
  "https://script.google.com/macros/s/AKfycbyQaNeBwGa9DxtaU9j_Eys8UJ0qgpCpxZolHP-pJEgeBHmXyWm04-aFt3TrVIZx3Pky/exec";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const dataDiv = document.getElementById("get-comment");
    //tạo html comment
    data.forEach((item, index) => {
      let htmlStr;
      // phân cách chuỗi
      if (index % 2 == 0) {
        htmlStr = `
        <div class="wish-box-item">
          <strong>${item.name}</strong>
          <p>${item.comment}</p>
        </div>
        `;
      } else {
        htmlStr = `
        <div class="wish-box-item bg">
          <strong>${item.name}</strong>
          <p>${item.comment}</p>
        </div>
        `;
      }

      dataDiv.innerHTML += htmlStr;
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();

let wishBox = document.querySelector(".wish-box");
