export function Left() {
    const mas = [
        {text: 'Это первая запись', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg'},
        {text: 'Это вторая запись', image: 'https://www.greeka.com/photos/cyclades/beaches/hero/cyclades-beaches-1280.jpg'},
        {text: 'Это третья запись', image: 'https://images.photowall.com/products/62178/sunset-beach-2.jpg?h=699&q=85'}
    ];

    let result = '';

    function makeFn(arr) {
        console.log('arr', arr);
        for (let i = 0; i < arr.length; i++) {
            console.log('arr[i]', arr[i]);
            result += `
					<div class="record">
						<p><img src="${arr[i].image}" width="100px" height="100px" alt=""></p>
						<p>${arr[i].text}</p>
					  </div>
			`;
        };
        return result;
    };

    return (`
        <div id="left" class="block">
            <p>Записи Записи  Записи Записи Записи Записи Записи</p>
            <div id="records">
                ${makeFn(mas)}
            </div>
        </div>
    `);
}
