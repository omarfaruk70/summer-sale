// creat a dynamic function to grab value
let totalPrice = 0;
function getinputValue(itemId) {
    const price = document.getElementById(itemId);
    const itemPriceStr = price.children[1].children[2].innerText.split(" ")[0];
    let itemPrice = parseFloat(itemPriceStr);
    const initialprice = document.getElementById('totalPrice');
    const initialValueStr = initialprice.innerText;
    const initialValue = parseFloat(initialValueStr);
    totalPrice += itemPrice;
    const card = document.getElementById(itemId);
    const itemName = card.children[1].children[1].innerText;
    setPriceIntoText('totalPrice', totalPrice, itemName);

    const applyBtn = document.getElementById('applyBtn');
    const discountElement = document.getElementById('totalDiscount');
    
    const discountStr = discountElement.innerText;
    const discountNum = parseFloat(discountStr); 
    const haveToPaymentElement = document.getElementById('totalPayment');
    const haveToPaymentStr = haveToPaymentElement.innerText;
    const haveToPaymentNum = parseFloat(haveToPaymentStr)
    const PurchaseBtn = document.getElementById('PurchaseBtn');
    const itemContainer = document.getElementById('totalItem-container');
    applyBtn.addEventListener('click', function(){
        const couponField = document.getElementById('couponField');
        const couponStr = couponField.value;
        if(couponStr === 'SELL200'){
            const afterDiscount = totalPrice * 20 / 100;
            const willPay = totalPrice - afterDiscount;
            discountElement.innerText = afterDiscount;
            haveToPaymentElement.innerText = willPay;
        }
    });
    const goHomeBtn = document.getElementById('goHome');
    goHomeBtn.addEventListener('click', function(){
        window.location.reload();
        
    })
    
    if(totalPrice > 0){
        PurchaseBtn.removeAttribute('disabled')
    };
    if(totalPrice >= 200){
        applyBtn.removeAttribute('disabled')
    };
    return itemName;
};
function setPriceIntoText(priceText, totalPrice , itemName){
    const pricefield = document.getElementById(priceText);
    pricefield.innerText = totalPrice;
    const itemContainer = document.getElementById('totalItem-container');
    const li = document.createElement('li');
    li.innerText = itemName;
    itemContainer.appendChild(li)
   
}

// items function
function itemOne(){
    const itemOnePrice = getinputValue('cardOne');
    return itemOnePrice;
}

function itemTwo(){
    const itemTwoPrice = getinputValue('cardTwo');
    return itemTwoPrice
}
function itemThree(){
    const itemThreePrice = getinputValue('cardThree');
    return itemThreePrice
}
function itemFour(){
    const itemFourPrice = getinputValue('cardFour');
    return itemFourPrice
}
function itemFive(){
    const itemFivePrice = getinputValue('cardFive');
    return itemFivePrice
}
function itemSix(){
    const itemSixPrice = getinputValue('cardSix');
    return itemSixPrice
}








