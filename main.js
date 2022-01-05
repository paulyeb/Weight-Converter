const weightValue = document.querySelector('#weightValue');
const selectedUnit = document.querySelector('#selectedUnit');
const goButton = document.querySelector('#goButton');
const output = document.querySelector('#output');

goButton.addEventListener('click', (e) => {
    e.preventDefault();
    if((weightValue.value == '') || (selectedUnit.value == '')) return

    //Lbs Conversions
    const lbToKg = weightValue.value / 2.2646
    const lbToG = weightValue.value * 0.0022046
    const lbToOz = weightValue.value * 16
    
    //Kgs Conversions
    const kgToLb = weightValue.value * 2.2205
    const kgToG = weightValue.value * 1000
    const kgToOz = weightValue.value * 35.274

    //Gs Conversions
    const gTolb = weightValue.value / 454
    const gToKg = weightValue.value /1000 
    const gToOz = weightValue.value / 28.35

    //Oz Conversions
    const ozToLb = weightValue.value / 16
    const ozToKg = weightValue.value / 35.274 
    const ozToG = weightValue.value * 28.35

    

    output.innerHTML = null
    
    if(selectedUnit.value === 'lb') {
        let div = document.createElement('div');
        div.className = 'card bg-primary mb-3';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex h4';
        cardBody.innerHTML = "<h4>Kilograms=</h4>"
        cardBody.appendChild(document.createTextNode(lbToKg))
        div.appendChild(cardBody);
        output.appendChild(div);

        let divForLbToG = document.createElement('div');
        divForLbToG.className = 'card bg-success mb-3';
        let cardBodyForLbToG = document.createElement('div');
        cardBodyForLbToG.className = 'card-body d-flex h4';
        cardBodyForLbToG.innerHTML = "<h4>Grams=</h4>"
        cardBodyForLbToG.appendChild(document.createTextNode(lbToG))
        divForLbToG.appendChild(cardBodyForLbToG);
        output.appendChild(divForLbToG);

        let divForLbToOz = document.createElement('div');
        divForLbToOz.className = 'card bg-danger mb-3';
        let cardBodyForLbToOz = document.createElement('div');
        cardBodyForLbToOz.className = 'card-body d-flex h4';
        cardBodyForLbToOz.innerHTML = "<h4>Ounces=</h4>"
        cardBodyForLbToOz.appendChild(document.createTextNode(lbToOz))
        divForLbToOz.appendChild(cardBodyForLbToOz);
        output.appendChild(divForLbToOz);
    }

    if(selectedUnit.value === 'kg') {
        let div = document.createElement('div');
        div.className = 'card bg-primary mb-2';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex h4';
        cardBody.innerHTML = "<h4>Pounds=</h4>"
        cardBody.appendChild(document.createTextNode(kgToLb))
        div.appendChild(cardBody);
        output.appendChild(div);

        let divForKgToG = document.createElement('div');
        divForKgToG.className = 'card bg-success mb-2';
        let cardBodyForKgToG = document.createElement('div');
        cardBodyForKgToG.className = 'card-body d-flex h4';
        cardBodyForKgToG.innerHTML = "<h4>Grams=</h4>"
        cardBodyForKgToG.appendChild(document.createTextNode(kgToG))
        divForKgToG.appendChild(cardBodyForKgToG);
        output.appendChild(divForKgToG);

        let divForKgToOz = document.createElement('div');
        divForKgToOz.className = 'card bg-danger mb-2';
        let cardBodyForKgToOz = document.createElement('div');
        cardBodyForKgToOz.className = 'card-body d-flex h4';
        cardBodyForKgToOz.innerHTML = "<h4>Ounces=</h4>"
        cardBodyForKgToOz.appendChild(document.createTextNode(kgToOz))
        divForKgToOz.appendChild(cardBodyForKgToOz);
        output.appendChild(divForKgToOz);
    }

    if(selectedUnit.value === 'g') {
        let div = document.createElement('div');
        div.className = 'card bg-primary mb-2';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex h4';
        cardBody.innerHTML = "<h4>Pounds=</h4>"
        cardBody.appendChild(document.createTextNode(gTolb))
        div.appendChild(cardBody);
        output.appendChild(div);

        let divForGToKg = document.createElement('div');
        divForGToKg.className = 'card bg-success mb-2';
        let cardBodyForGToKg = document.createElement('div');
        cardBodyForGToKg.className = 'card-body d-flex h4';
        cardBodyForGToKg.innerHTML = "<h4>Kilograms=</h4>"
        cardBodyForGToKg.appendChild(document.createTextNode(gToKg))
        divForGToKg.appendChild(cardBodyForGToKg);
        output.appendChild(divForGToKg);

        let divForGToOz = document.createElement('div');
        divForGToOz.className = 'card bg-danger mb-2';
        let cardBodyForGToOz = document.createElement('div');
        cardBodyForGToOz.className = 'card-body d-flex h4';
        cardBodyForGToOz.innerHTML = "<h4>Ounces=</h4>"
        cardBodyForGToOz.appendChild(document.createTextNode(gToOz))
        divForGToOz.appendChild(cardBodyForGToOz);
        output.appendChild(divForGToOz);
    }

    if(selectedUnit.value === 'oz') {
        let div = document.createElement('div');
        div.className = 'card bg-primary mb-2';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex h4';
        cardBody.innerHTML = "<h4>Pounds=</h4>"
        cardBody.appendChild(document.createTextNode(ozToLb))
        div.appendChild(cardBody);
        output.appendChild(div);

        let divForOzToKg = document.createElement('div');
        divForOzToKg.className = 'card bg-success mb-2';
        let cardBodyForOzToKg = document.createElement('div');
        cardBodyForOzToKg.className = 'card-body d-flex h4';
        cardBodyForOzToKg.innerHTML = "<h4>Kilograms=</h4>  " 
        cardBodyForOzToKg.appendChild(document.createTextNode(ozToKg))
        divForOzToKg.appendChild(cardBodyForOzToKg);
        output.appendChild(divForOzToKg);

        let divForOzToG = document.createElement('div');
        divForOzToG.className = 'card bg-danger mb-2';
        let cardBodyForOzToG = document.createElement('div');
        cardBodyForOzToG.className = 'card-body d-flex h4';
        cardBodyForOzToG.innerHTML = "<h4>Grams=</h4>"
        cardBodyForOzToG.appendChild(document.createTextNode(ozToG))
        divForOzToG.appendChild(cardBodyForOzToG);
        output.appendChild(divForOzToG);
    }
})