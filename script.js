const tabsBtn = document.querySelectorAll(".bikes__tabs-item");
const tabsItems = document.querySelectorAll(".bikes__tabs-content")


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('bikes__tabs-item_active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('bikes__tabs-item_active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('bikes__tabs-content_active');
            });

            currentBtn.classList.add('bikes__tabs-item_active');
            currentTab.classList.add('bikes__tabs-content_active');
        }
    });
}

// document.querySelector('bikes_tabs_nav-btn').click();