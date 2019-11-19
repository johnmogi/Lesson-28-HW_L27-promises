
function doSomething1() {
    const precision = +prompt("Enter PI precision: ");
    const pi = Math.PI.toPrecision(precision);
    alert("PI: " + pi);
}

function doSomething2() {
    try {
        const precision = +prompt("Enter PI precision: ");
        const pi = Math.PI.toPrecision(precision);
        alert("PI: " + pi);
    }
    catch (err) {
        alert("Error: " + err.message);
    }
    finally { // בלוק שתמיד יתבצע - גם אם היתה חריגה וגם אם לא היתה חריגה
        console.log("Done");
    }
}

function gradeFactor() {
    try {
        const grade = +prompt("Enter grade: ");
        const factoredGrade = getFactoredGrade(grade);
        alert("Factored Grade: " + factoredGrade);
    }
    catch (err) {
        alert("Error! Please enter 0 to 100");
    }
}

function getFactoredGrade(grade) {

    if (grade < 0 || grade > 100) {
        throw new Error("Illegal grade! Must be 0 to 100!");
    }

    if (grade <= 95) {
        return grade + 5;
    }
    
    return 100;
}
