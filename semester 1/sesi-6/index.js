let body = document.body;
      let info = document.getElementById("info");
      let mode = document.getElementById("mode");
      let home = document.getElementById("home");

      const darkLimit = 5;
      let darkCounter = 0;
      let darkRemainingLeft;

      function darkMode() {
        if (darkRemainingLeft == 1) {
          //   console.log("jatah darkmode anda telah habis");
          info.textContent = "DARK MODE SILENT";
          mode.style.display = "none";
          home.textContent = "BACK";

          return;
        }
        darkCounter += 1;
        darkRemainingLeft = darkLimit - darkCounter;

        // render ke info element
        info.textContent = `Darkmode dipakai ${darkCounter}kali, tersisa ${darkRemainingLeft}kali`;

        // console.log("dark mode di klik sebanyak:", darkCounter);
        // console.log("kesempatan anda:", darkRemainingLeft);
        body.classList.toggle("dark");
      }
      function reRender() {
        location.reload();
      }