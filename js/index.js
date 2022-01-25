function fillSvg () {
    const circleBoxes = document.querySelectorAll('.fact-item__info');
    let percent;

    circleBoxes.forEach(item => {
        let circle = item.querySelector('.circle-progress');
        
        let circleRadius = circle.getAttribute('r');
        let circleLength = 2 * Math.PI * circleRadius;

        let circleInner = item.querySelector('.fact-item__value');
        let dataValue = item.dataset.value;
        console.log(dataValue);

        if (item.dataset.percent == 'true') {
            percent = Math.floor(dataValue);
            circleInner.textContent = `${percent}%`;
            console.log('percent');
        }
        else {
            let dataFullValue = item.dataset.fullValue;
            percent = Math.floor(dataValue / dataFullValue * 100);;
            circleInner.textContent = dataValue;
        }

        circle.setAttribute('stroke-dasharray', circleLength);
        circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percent / 100);
    });
}

fillSvg();