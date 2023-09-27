
const appIcons = document.querySelectorAll('.innerapps');
const selectedAppsContainer = document.querySelector('.selected-apps');
const clearAllButton = document.getElementById('clear-all-button');


const selectedApps = [];
console.log("enter js code");


function addAppName(appName) {
  
  const appIcon = document.querySelector(`[data-app="${appName}"]`);

  if (appIcon) {
      appIcon.classList.toggle('selected');
  }

    const selectedAppElement = document.createElement('div');
    selectedAppElement.textContent = appName;

    const removeButton = document.createElement('span');
    removeButton.textContent = '✖';
    removeButton.classList.add('remove-button');

    removeButton.addEventListener('click', () => {
        console.log("remove");
        const index = selectedApps.indexOf(appName);
        if (index !== -1) {
            selectedApps.splice(index, 1);
        }

        selectedAppsContainer.removeChild(selectedAppElement);

         appIcon.classList.toggle('selected');
    });

    selectedAppElement.appendChild(removeButton);
    selectedAppsContainer.appendChild(selectedAppElement);

    selectedApps.push(appName);

  }


appIcons.forEach(appIcon => {
    appIcon.addEventListener('click', () => {
        console.log("second last");
        const appName = appIcon.getAttribute('data-app');

        if (!selectedApps.includes(appName)) {
            addAppName(appName);

            appIcon.classList.add('selected');
        }  else {
           const index = selectedApps.indexOf(appName);
          if (index !== -1) {
            selectedApps.splice(index, 1);
          }
          selectedAppsContainer.removeChild(selectedAppElement);
        
          appIcon.classList.remove('selected');
         }
    });
});

clearAllButton.addEventListener('click', () => {
    console.log("last");
    selectedApps.length = 0;
    selectedAppsContainer.innerHTML = '';

    clearAllSelection();
});

function clearAllSelection() {
  appIcons.forEach(appIcon => {
      appIcon.classList.remove('selected');
  });
}





//responsive
function namMenuResponsive() {
  console.log("responsiveeeeeeeeeee")
  var x = document.getElementById("myTopnav");
  if (x.className === "header-menu") {
    x.className += " responsive";
  } else {
    x.className = "header-menu";
  }
}


 function toggleTables() {
  var desktopTable = document.getElementById("apps-line1");
  var mobileTable = document.getElementById("apps-line1-mobile-section");
  
  if (window.innerWidth <= 768) {
    
     desktopTable.style.display = "none";
     mobileTable.style.display = "table"; 
  } else {
    
     desktopTable.style.display = "table"; 
     mobileTable.style.display = "none";
  }
}


toggleTables();


window.addEventListener("resize", toggleTables);
