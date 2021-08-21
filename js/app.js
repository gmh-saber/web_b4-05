//All button's are Called Here
const memoryOneButton = document.getElementById('firstMemory');
const memoryButtonTwo = document.getElementById('secondMemory');
const storageButtonfirst = document.getElementById('firstStorage');
const storageButtonSecond = document.getElementById('secondStorage');
const storageButtonThird = document.getElementById('thirdStorage');

const deliveryButtonOne = document.getElementById('deliveryFirst');
const deliveryButtonTwo = document.getElementById('deliverySecond');

const bestPrice = document.getElementById('bestPrice');
const extraMemoryPrice = document.getElementById('extraPriceOfMemory');
const extraStoragePrice = document.getElementById('extraPriceOfStorage');
const deliveryPrice = document.getElementById('deliveryPriceUpdate');
const totalPrice = document.getElementById('priceInTotal');


memoryOneButton.addEventListener('click', function () {
    extraMemoryPrice.innerText = Number(0);
    total()
})
memoryButtonTwo.addEventListener('click', function () {
    extraMemoryPrice.innerText = Number(180);
    total()
})

storageButtonfirst.addEventListener('click', function () {
    extraStoragePrice.innerText = Number(0);
    total()
})
storageButtonSecond.addEventListener('click', function () {
    extraStoragePrice.innerText = Number(100);
    total()
})
storageButtonThird.addEventListener('click', function () {
    extraStoragePrice.innerText = Number(180);
    total()
})


deliveryButtonOne.addEventListener('click', function () {
    deliveryPrice.innerText = Number(0);
    total()
})
deliveryButtonTwo.addEventListener('click', function () {
    deliveryPrice.innerText = Number(20);
    total()

})

function total() {
    const bestPriceUpdated = Number(bestPrice.innerText);
    const memoryPriceUpdated = Number(extraMemoryPrice.innerText);
    const UupdatedStoragePrice = Number(extraStoragePrice.innerText);
    const deliveryPriceUpdated = Number(deliveryPrice.innerText);
    const totalPriceUpdated = bestPriceUpdated + memoryPriceUpdated + UupdatedStoragePrice + deliveryPriceUpdated;
    totalPrice.innerText = totalPriceUpdated;

}

const discountTotal = document.getElementById('discountTotal');

///bonus section
const applyCuponButton = document.getElementById('applyCuponButton');
applyCuponButton.addEventListener('click', function () {
    const applyInput = document.getElementById('applyCuponInput')
    const applyInputText = applyInput.value;
    total();
    if (applyInputText == 'stevekaku') {
        const totalPriceUpdated = totalPrice.innerText;
        const discountPrice = totalPriceUpdated - totalPriceUpdated * 0.2;
        discountTotal.innerText = discountPrice;
        const successMessage = document.getElementById("success-message")
        successMessage.style.display = "block"
    }
    else {
        const errorMessage = document.getElementById("error-message")
        errorMessage.style.display = "block"
        const totalPriceUpdated = totalPrice.innerText;
        discountTotal.innerText = totalPriceUpdated;
    }

});















///

