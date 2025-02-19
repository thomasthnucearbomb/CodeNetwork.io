const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
            if (sidebar.classList.contains("close")) {
                // Adjust main content area when sidebar is closed
                document.querySelector('.home').style.left = '78px'; // Adjust based on closed sidebar width
                document.querySelector('.home').style.width = 'calc(100% - 78px)';
            } else {
                // Reset main content area when sidebar is open
                document.querySelector('.home').style.left = '250px'; // Adjust based on open sidebar width
                document.querySelector('.home').style.width = 'calc(100% - 250px)';
            }
        });
            
        searchBtn.addEventListener("click", () => {
            sidebar.classList.remove("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");
            
            if (body.classList.contains("dark")) {
                modeText.innerText = "Light mode";
            } else {
                modeText.innerText = "Dark mode";
            }
        });