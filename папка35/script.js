document.getElementById('addBtn').addEventListener('click', function() {
    
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;

    
    if (name && age && !isNaN(age)) {
      
        const ageNumber = Number(age);

      
        const newBox = document.createElement('div');
        newBox.classList.add('box');


        newBox.innerHTML = `
            <div class="text">
                <h1>${name}</h1>
                <div class="input-container">
                    <input type="text" class="fill" placeholder="Age" value="${age}" readonly>
                    <span class="Age">${age}</span>
                </div>
                <div class="vertical-line"></div>
            </div>
        `;

        if (ageNumber < 25) {
            document.getElementById('column1').appendChild(newBox);
        } else if (ageNumber < 60) {
            document.getElementById('column2').appendChild(newBox);
        } else {
            document.getElementById('column3').appendChild(newBox);
        }

       
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
    } else {
        alert('Пожалуйста, заполните оба поля корректно');
    }
});
