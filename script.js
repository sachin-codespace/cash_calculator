document.addEventListener("DOMContentLoaded", () => {
    const rs500 = document.querySelector("#rs500");
    const rs200 = document.querySelector("#rs200");
    const rs100 = document.querySelector("#rs100");
    const rs50 = document.querySelector("#rs50");
    const rs20 = document.querySelector("#rs20");
    const rs10 = document.querySelector("#rs10");
    const rs5 = document.querySelector("#rs5");
    const rs2 = document.querySelector("#rs2");
    const rs1 = document.querySelector("#rs1");

    const txt500 = document.querySelector(".txt500");
    const txt200 = document.querySelector(".txt200");
    const txt100 = document.querySelector(".txt100");
    const txt50 = document.querySelector(".txt50");
    const txt20 = document.querySelector(".txt20");
    const txt10 = document.querySelector(".txt10");
    const txt5 = document.querySelector(".txt5");
    const txt2 = document.querySelector(".txt2");
    const txt1 = document.querySelector(".txt1");


    const txtFinalCash = document.querySelector(".total-cash");
    const reset = document.querySelector(".reset");

    const cashInputs = [rs500, rs200, rs100, rs50, rs20, rs10, rs5, rs2, rs1];
    const cashTexts = [txt500, txt200, txt100, txt50, txt20, txt10, txt5, txt2, txt1];

    cashInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            cashCalculator(index);
        })
    });

    function cashCalculator(index) {
        const dominations = [500, 200, 100, 50, 20, 10, 5, 2, 1]
        const rowValue = cashInputs[index].value * dominations[index];
        cashTexts[index].textContent = rowValue.toFixed(0);

        totalCash();
    }

    function totalCash() {
        let totalCashValue = 0;
        cashTexts.forEach((text) => {
            totalCashValue += parseInt(text.textContent);
        });
        txtFinalCash.textContent = "Total Cash : " + totalCashValue;
    }

    reset.addEventListener("click", clearData);
    function clearData() {
        cashInputs.forEach((input) => {
            input.value = "";
        });
        cashInputs.forEach((text) => {
            cashTexts.forEach((text) => {
                text.textContent = "0";
            });
        })
        txtFinalCash.textContent = "Total Cash : 0";
    };
}
)