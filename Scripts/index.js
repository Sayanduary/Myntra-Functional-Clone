let bagItems;
onLoad()
function onLoad() {
    let bagItemsStr = localStorage.getItem("bagItems");
    bagItems=bagItemsStr?JSON.parse(bagItemsStr):[];
    displayItemsOnHomePage();
    displayBagItem();
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement){
        return;
    }
    let innerHTML = '';

    items.forEach(item => {
        innerHTML += ` <div class="item-container">
                    <img class="item-image" src="${item.image}" alt="Ear-ring">
                    <div class="rating">
                        ${item.rating.stars} ⭐| ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="pricing">
                        <span class="current-price">₹${item.current_price}</span>
                        <span class="original-price">₹${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="button-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
                </div>`
    })
    itemsContainerElement.innerHTML = innerHTML;

}



function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagItem();
}

function displayBagItem() {
    let bagItemCountElement = document.querySelector(".bag-item-count");
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

