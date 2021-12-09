function myFunction() {

    let value = parseInt(document.getElementById("value").value);
    if (value != NaN) {
        /**
         * Zero profit/loss after 2nd step
         */
        // let stepPercentage = [
        //     0.99, // Step 1
        //     1.754, // Step 2
        //     2.888, // Step 3
        //     5.929, // Step 4
        //     12.168, // Step 5
        //     24.98, // Step 6
        //     51.291, // Step 7
        // ]

        /**
         * Low profit on 1st n 2nd
         */
        let stepPercentage = [
            0.55, // Step 1
            1.1, // Step 2
            1.737, // Step 3
            6.056, // Step 4
            12.477, // Step 5
            25.58, // Step 6
            52.5, // Step 7
        ]

        let t = 0;
        stepPercentage.forEach(v => {
            t += v;
        })
        console.log('percentage', t+' %')

        let step1 = parseFloat((value * (stepPercentage[0] / 100)).toFixed(2));
        let step2 = parseFloat((value * (stepPercentage[1] / 100)).toFixed(2));
        let step3 = parseFloat((value * (stepPercentage[2] / 100)).toFixed(2));
        let step4 = parseFloat((value * (stepPercentage[3] / 100)).toFixed(2));
        let step5 = parseFloat((value * (stepPercentage[4] / 100)).toFixed(2));
        let step6 = parseFloat((value * (stepPercentage[5] / 100)).toFixed(2));
        let step7 = parseFloat((value * (stepPercentage[6] / 100)).toFixed(2));

        let buyTotal = step1 + step2 + step3 + step4 + step5 + step6 + step7;
        console.log('buyTotal',buyTotal)
        let winAmount1 = (step1 * 1.95).toFixed(2);
        let winAmount2 = (step2 * 1.95).toFixed(2);
        let winAmount3 = (step3 * 1.95).toFixed(2);
        let winAmount4 = (step4 * 1.95).toFixed(2);
        let winAmount5 = (step5 * 1.95).toFixed(2);
        let winAmount6 = (step6 * 1.95).toFixed(2);
        let winAmount7 = (step7 * 1.95).toFixed(2);


        document.getElementById("buyAmount1").innerText = step1;
        document.getElementById("buyAmount2").innerText = step2;
        document.getElementById("buyAmount3").innerText = step3;
        document.getElementById("buyAmount4").innerText = step4;
        document.getElementById("buyAmount5").innerText = step5;
        document.getElementById("buyAmount6").innerText = step6;
        document.getElementById("buyAmount7").innerText = step7;

        document.getElementById("winAmount1").innerText = winAmount1;
        document.getElementById("winAmount2").innerText = winAmount2;
        document.getElementById("winAmount3").innerText = winAmount3;
        document.getElementById("winAmount4").innerText = winAmount4;
        document.getElementById("winAmount5").innerText = winAmount5;
        document.getElementById("winAmount6").innerText = winAmount6;
        document.getElementById("winAmount7").innerText = winAmount7;

        document.getElementById("netProfit1").innerText = (winAmount1 - step1).toFixed(2);
        document.getElementById("netProfit2").innerText = (parseFloat(winAmount2) - (parseFloat(step1) + parseFloat(step2))).toFixed(2);
        document.getElementById("netProfit3").innerText = (parseFloat(winAmount3) - (parseFloat(step1) + parseFloat(step2) + parseFloat(step3))).toFixed(2);

        document.getElementById("netProfit4").innerText = (parseFloat(winAmount4) - (parseFloat(step1) + parseFloat(step2) + parseFloat(step3) + parseFloat(step4))).toFixed(2);

        document.getElementById("netProfit5").innerText = (parseFloat(winAmount5) - (parseFloat(step1) + parseFloat(step2) + parseFloat(step3) + parseFloat(step4) + parseFloat(step5))).toFixed(2);

        document.getElementById("netProfit6").innerText = (parseFloat(winAmount6) - (parseFloat(step1) + parseFloat(step2) + parseFloat(step3) + parseFloat(step4) + parseFloat(step5) + parseFloat(step6))).toFixed(2);

        document.getElementById("netProfit7").innerText = (parseFloat(winAmount7) - (parseFloat(step1) + parseFloat(step2) + parseFloat(step3) + parseFloat(step4) + parseFloat(step5) + parseFloat(step6) + parseFloat(step7))).toFixed(2);


    }
}

myFunction();

