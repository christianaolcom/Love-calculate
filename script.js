const calculate = () => {
    let femaleName = document.getElementById('femaleName').value;
    let maleName = document.getElementById('maleName').value;
    let randomNumber = Math.round(Math.random()*99)  

    if (femaleName === "" || maleName === "") {
        disps.innerHTML = `<p class="display mt-3">Input Field! cannot be empty ❓ ❓ ❓ </p>`

    }else{
     if (randomNumber >= 0 && randomNumber <= 39) {
            disps.innerHTML = ` <h1 class="display"> <b> 😈😈😈</b>
            <br>
            ${randomNumber}%
            <p class="fw-bold text-light text-center">You don't match with each other you better japa for ur life 🏃🏼‍♀️ 🏃🏼‍♀️ 🏃🏼‍♀️ ${femaleName} </p>
            `
        }else if (randomNumber >= 40 && randomNumber <=45 ) {
            disps.innerHTML = ` <h1 class="display mt-3"> <b> 🥴🥴🥴</b>
            <br>
             ${randomNumber}%
            <p class="fw-bold text-light text- 
             center">This is fake love stop waiting your time 👵🏼👵🏼👵🏼 ${femaleName}</p>`

        }else if (randomNumber > 46 && randomNumber <= 55) {
            disps.innerHTML = `   <h1 class="display mt-3"> <b> 🤕🤕🤕</b>
            <br>
            ${randomNumber}%
            <p class= "text-light">It's not sure your love is genuine 🤷🏼‍♂️🤷🏼‍♂️ 
             🤷🏼‍♂️ ${femaleName}</p>
            `
        }else if (randomNumber > 56 && randomNumber <= 60){
            disps.innerHTML =`   <h1 class="display mt-3"> <b> 👿👿👿</b>
            <br>
            ${randomNumber}%
            <p class="text-light">Keep your eyes on him  🧍🏼‍♀️ 🧍🏼‍♀️ 🧍🏼‍♀️ ${femaleName}</p>
            `
        }else if (randomNumber > 61 && randomNumber <= 70){
            disps.innerHTML = ` <h1 class="display mt-3"> <b> 😪😪😪/b>
            <br>
            ${randomNumber}%

            <p class="text-light fw-bold">You are on the way but don't feel too relax 🤹🏼‍♀️ 🤹🏼‍♀️ 🤹🏼‍♀️ ${femaleName}</p>
            `
        }else if(randomNumber == 71 && randomNumber <= 80) {
            disps.innerHTML` <h1 class="display" mt-3> <b> 😍😍😍</b>
            <br>
            ${randomNumber}%

            <p>Both of you are on the same path! Congrats 💞💞💞 ${femaleName}.${maleName}</p>
            `
        }else if (randomNumber >= 81 && randomNumber <=100){
            disps.innerHTML=` <h1 class="display mt-3"> <b> 👫👩🏿‍🤝‍👩🏿👩🏿‍🤝‍👩🏾</b>
            <br>
            ${randomNumber}%
            <p>You match! Both can now be planning your wedding👬 👬 👬</p>
            `
        }
    }
}
