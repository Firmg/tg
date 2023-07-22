document.getElementById('open-modal-btn').addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById('close-my-modal-btn').addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

const tabs = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabs.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabs.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item){
            item.classList.remove('active')
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active')
    });
});

function order()
        {
            var audio = new Audio();
            audio.src = 'src/sound.mp3';
            audio.autoplay = true;
            alert("Ваш заказ был принят, ждите звонка в дверь");

            return true;
        }