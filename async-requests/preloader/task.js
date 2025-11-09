const xhr = new XMLHttpRequest();
const items = document.getElementById('items'); 
const loader = document.getElementById('loader');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) {
        loader.classList.remove('loader_active');
        const data = xhr.response;
        items.innerHTML = ''; 

        Object.values(data.response.Valute).forEach(valuta => {
            const item = document.createElement('div');
            item.className = 'item';
            
            const itemCode = document.createElement('div');
            itemCode.className = 'item__code';
            itemCode.textContent = valuta.CharCode;

            const itemValue = document.createElement('div');
            itemValue.className = 'item__value';
            itemValue.textContent = valuta.Value;

            const itemCurrency = document.createElement('div');
            itemCurrency.className = 'item__currency';
            itemCurrency.textContent = ' руб.';

            item.appendChild(itemCode);
            item.appendChild(itemValue);
            item.appendChild(itemCurrency);
            
            items.appendChild(item);
        });
    }
};

xhr.onerror = function () {
    loader.classList.remove('loader_active');
    console.error('Ошибка загрузки данных');
};

xhr.send();