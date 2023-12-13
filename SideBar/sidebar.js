var sidebar = document.getElementById("sidebar");
      var page = document.querySelector("#card");
      var btn = document.getElementsByClassName("toggle")[0];
      sidebar.style.display = "none";
      let isClick = false;
      btn.addEventListener("click", function () {
        if (!isClick) {
          sidebar.style.display = "block";
          console.log(isClick);
          
          isClick = true;
        } else {
          sidebar.style.display = "none";
          isClick = false;
        }
      });

      var close = document.querySelector(".close");
      close.addEventListener("click", () => {
        sidebar.style.display = "none";
        isClick = false;
      });