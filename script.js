var assignment1 = document.getElementById("assignment1");
var assignment2 = document.getElementById("assignment2");
var assignment3 = document.getElementById("assignment3");
var assignment4 = document.getElementById("assignment4");
var assignment5 = document.getElementById("assignment5");
var finalResults = document.getElementById("finalResults");
var results = document.getElementById("results");
var copyFeed = document.getElementById("copyFeed");

// Eval Function
function runAndValidateFunction(func) {
  let result = eval(func);
  return result;
}

// radianToDegree
var testCases1 = [10, 25, 199, "10", {}];
var expected1 = [
  "572.96",
  "1432.39",
  "11401.86",
  "Error Message",
  "Error Message",
];
var testCasesLength = testCases1.length;
var testCaseResult = [];
for (var i = 0; i < testCasesLength; i++) {
  if (typeof testCases1[i] == "number") {
    var func = `radianToDegree(${testCases1[i]})`;
    testCaseResult.push(runAndValidateFunction(func));
  } else {
    var func = `radianToDegree("${testCases1[i]}")`;
    testCaseResult.push(runAndValidateFunction(func));
  }
}

var expResult1 = false;
var bonus1 = false;
testCaseResult.forEach((result, idx) => {
  var expc = expected1[idx];
  var support1 = result === expc ? "✅" : "❌";
  var support2 = result?.length > 10 ? "✅" : "❌";

  if ((idx === 0 || idx === 1 || idx === 2) && result === expc) {
    expResult1 = true;
    bonus1 = true;
  } else if ((idx === 3 || idx === 4) && result?.length > 10) {
    expResult1 = true;
    bonus1 = true;
  } else {
    expResult1 = false;
    bonus1 = false;
  }
  var p = document.createElement("p");
  p.innerHTML =
    `<strong>${idx + 1}</strong>. Result -> ` +
    result +
    `<br/><strong>Expected Result: ${expc} - ${
      idx === 0 || idx === 1 || idx === 2 ? support1 : support2
    }</strong>`;

  assignment1.appendChild(p);
});

var bonus1Is = document.createElement("p");
bonus1Is.innerHTML = `<br/><h4>radianToDegree</h4><h5 style="text-align: center;">Bonus Marks</h5> ${
  bonus1
    ? "✅ Correct! Good job. You have got bonus for validation."
    : "❌ No bonus for validation."
}<br/><br/>${
  expResult1 && bonus1
    ? '<h5 style="text-align: center;">You have got: 12</h5><h1 class="code">12</h1>'
    : '<h5 style="text-align: center;">You have got: 8</h5><h1 class="code">8</h1>'
}`;
assignment1.appendChild(bonus1Is);

// ======================================================================
// isJavaScriptFile
var testCases2 = ["app.js", "js.png", "image.js.png", "image.jpg.js", {}];
var expected2 = [true, false, false, true, "Error Message"];
var testCasesLength2 = testCases2.length;
var testCaseResult2 = [];

for (var i = 0; i < testCasesLength2; i++) {
  var func = `isJavaScriptFile(${JSON.stringify(testCases2[i])})`;
  testCaseResult2.push(runAndValidateFunction(func));
}

var expResult2 = false;
var bonus2 = false;
testCaseResult2.forEach((result, idx) => {
  var expc = expected2[idx];
  var support1 = result === expc ? "✅" : "❌";
  var support2 = result?.length > 5 ? "✅" : "❌";

  if ((idx === 0 || idx === 1 || idx === 2 || idx === 3) && result === expc) {
    expResult2 = true;
    bonus2 = true;
  } else if (idx === 4 && result?.length > 5) {
    expResult2 = true;
    bonus2 = true;
  } else {
    expResult2 = false;
    bonus2 = false;
  }
  var p = document.createElement("p");
  p.innerHTML =
    `<strong>${idx + 1}</strong>. Result -> ` +
    result +
    `<br/><strong>Expected Result: ${expc} - ${
      idx === 0 || idx === 1 || idx === 2 || idx === 3 ? support1 : support2
    }</strong>`;

  assignment2.appendChild(p);
});

var bonus2Is = document.createElement("p");
bonus2Is.innerHTML = `<br/><h4>isJavaScriptFile</h4><h5 style="text-align: center;">Bonus Marks</h5> ${
  bonus2
    ? "✅ Correct! Good job. You have got bonus for validation."
    : "❌ No bonus for validation."
}<br/><br/>${
  expResult2 && bonus2
    ? '<h5 style="text-align: center;">You have got: 12</h5><h1 class="code">12</h1>'
    : '<h5 style="text-align: center;">You have got: 8</h5><h1 class="code">8</h1>'
}`;
assignment2.appendChild(bonus2Is);

// ======================================================================
// oilPrice
var testCases3 = [
  [1, 1, 1],
  [30, 20, 10],
  [1, 0, 2],
  [0, 2, 3],
  ["1", 2, "5"],
];
var expected3 = [379, 7370, 384, 665, "Error Message"];
var testCasesLength3 = testCases2.length;
var testCaseResult3 = [];

for (var i = 0; i < testCasesLength3; i++) {
  if (i <= 3) {
    var func = `oilPrice(${testCases3[i][0]}, ${testCases3[i][1]}, ${testCases3[i][2]})`;
    testCaseResult3.push(runAndValidateFunction(func));
  } else {
    var func = `oilPrice("${testCases3[i][0]}", ${testCases3[i][1]}, "${testCases3[i][2]}")`;
    testCaseResult3.push(runAndValidateFunction(func));
  }
}

var expResult3 = false;
var bonus3 = false;
testCaseResult3.forEach((result, idx) => {
  var expc = expected3[idx];
  var support1 = result === expc ? "✅" : "❌";
  var support2 = result?.length > 5 ? "✅" : "❌";

  if ((idx === 0 || idx === 1 || idx === 2 || idx === 3) && result === expc) {
    expResult3 = true;
    bonus3 = true;
  } else if (idx === 4 && result?.length > 5) {
    expResult3 = true;
    bonus3 = true;
  } else {
    expResult3 = false;
    bonus3 = false;
  }
  var p = document.createElement("p");
  p.innerHTML =
    `<strong>${idx + 1}</strong>. Result -> ` +
    result +
    `<br/><strong>Expected Result: ${expc} - ${
      idx === 0 || idx === 1 || idx === 2 || idx === 3 ? support1 : support2
    }</strong>`;

  assignment3.appendChild(p);
});

var bonus3Is = document.createElement("p");
bonus3Is.innerHTML = `<br/><h4>oilPrice</h4><h5 style="text-align: center;">Bonus Marks</h5> ${
  bonus3
    ? "✅ Correct! Good job. You have got bonus for validation."
    : "❌ No bonus for validation."
}<br/><br/>${
  expResult3 && bonus3
    ? '<h5 style="text-align: center;">You have got: 12</h5><h1 class="code">12</h1>'
    : '<h5 style="text-align: center;">You have got: 8</h5><h1 class="code">8</h1>'
}`;
assignment3.appendChild(bonus3Is);

// ======================================================================
// publicBusFare
var testCases4 = [50, 55, 112, 235, 365, "365", {}];
var expected4 = [0, 1250, 250, 500, 1000, "Error Message", "Error Message"];
var testCasesLength4 = testCases4.length;
var testCaseResult4 = [];

for (var i = 0; i < testCasesLength4; i++) {
  if (i <= 4) {
    var func = `publicBusFare(${testCases4[i]})`;
    testCaseResult4.push(runAndValidateFunction(func));
  } else {
    var func = `publicBusFare(${JSON.stringify(testCases4[i])})`;
    testCaseResult4.push(runAndValidateFunction(func));
  }
}

var expResult4 = false;
var bonus4 = false;
testCaseResult4.forEach((result, idx) => {
  var expc = expected4[idx];
  var support1 = result === expc ? "✅" : "❌";
  var support2 = result?.length > 5 ? "✅" : "❌";

  if (
    (idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4) &&
    result === expc
  ) {
    expResult4 = true;
    bonus4 = true;
  } else if ((idx === 5 || idx === 6) && result?.length > 5) {
    expResult4 = true;
    bonus4 = true;
  } else {
    expResult4 = false;
    bonus4 = false;
  }
  var p = document.createElement("p");
  p.innerHTML =
    `<strong>${idx + 1}</strong>. Result -> ` +
    result +
    `<br/><strong>Expected Result: ${expc} - ${
      idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4
        ? support1
        : support2
    }</strong>`;

  assignment4.appendChild(p);
});

var bonus4Is = document.createElement("p");
bonus4Is.innerHTML = `<br/><h4>publicBusFare</h4><h5 style="text-align: center;">Bonus Marks</h5> ${
  bonus4
    ? "✅ Correct! Good job. You have got bonus for validation."
    : "❌ No bonus for validation."
}<br/><br/>${
  expResult4 && bonus4
    ? '<h5 style="text-align: center;">You have got: 12</h5><h1 class="code">12</h1>'
    : '<h5 style="text-align: center;">You have got: 8</h5><h1 class="code">8</h1>'
}`;
assignment4.appendChild(bonus4Is);

// ======================================================================
// isBestFriend
var testCases5 = [
  [
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" },
  ],
  [
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "sabul" },
  ],
  ["{}", "{ name: 'babul', friend: 'abul' }"],
];
var expected5 = [true, false, "Error Message"];
var testCasesLength5 = testCases5.length;
var testCaseResult5 = [];

for (var i = 0; i < testCasesLength5; i++) {
  var func = `isBestFriend(${JSON.stringify(
    testCases5[i][0]
  )}, ${JSON.stringify(testCases5[i][1])})`;
  testCaseResult5.push(runAndValidateFunction(func));
}

var expResult5 = false;
var bonus5 = false;
testCaseResult5.forEach((result, idx) => {
  var expc = expected5[idx];
  var support1 = result === expc ? "✅" : "❌";
  var support2 = result?.length > 5 ? "✅" : "❌";

  if ((idx === 0 || idx === 1) && result === expc) {
    expResult5 = true;
    bonus5 = true;
  } else if (idx === 2 && result?.length > 5) {
    expResult5 = true;
    bonus5 = true;
  } else {
    expResult5 = false;
    bonus5 = false;
  }
  var p = document.createElement("p");
  p.innerHTML =
    `<strong>${idx + 1}</strong>. Result -> ` +
    result +
    `<br/><strong>Expected Result: ${expc} - ${
      idx === 0 || idx === 1 ? support1 : support2
    }</strong>`;

  assignment5.appendChild(p);
});

var bonus5Is = document.createElement("p");
bonus5Is.innerHTML = `<br/><h4>isBestFriend</h4><h5 style="text-align: center;">Bonus Marks</h5> ${
  bonus5
    ? "✅ Correct! Good job. You have got bonus for validation."
    : "❌ No bonus for validation."
}<br/><br/>${
  expResult5 && bonus5
    ? '<h5 style="text-align: center;">You have got: 12</h5><h1 class="code">12</h1>'
    : '<h5 style="text-align: center;">You have got: 8</h5><h1 class="code">8</h1>'
}`;
assignment5.appendChild(bonus5Is);

// ======================================================================
var totalMarks = 0;
if (expResult1 && bonus1) {
  totalMarks += 12;
}
if (expResult2 && bonus2) {
  totalMarks += 12;
}
if (expResult3 && bonus3) {
  totalMarks += 12;
}
if (expResult4 && bonus4) {
  totalMarks += 12;
}
if (expResult5 && bonus5) {
  totalMarks += 12;
}
if (expResult1 && !bonus1) {
  totalMarks += 8;
}
if (expResult2 && !bonus2) {
  totalMarks += 8;
}
if (expResult3 && !bonus3) {
  totalMarks += 8;
}
if (expResult4 && !bonus4) {
  totalMarks += 8;
}
if (expResult5 && !bonus5) {
  totalMarks += 8;
}

var totalMarksIs = document.createElement("div");
totalMarksIs.style.textAlign = "center";
totalMarksIs.style.marginTop = "15px";
totalMarksIs.style.marginBottom = "15px";
totalMarksIs.innerHTML = `<br/><h5 style="text-align: center;">Total Marks</h5> ${totalMarks}`;

// create textarea

results.innerHTML = `1) radianToDegree: ${
  expResult1 ? "✅ Correct! Good job." : "❌ Oops! Wrong answer."
} ${
  bonus1
    ? "You got a bonus mark for validation."
    : "No bonus mark for validation."
}\n\n2) isJavaScriptFile: ${
  expResult2 ? "✅ Correct! Good job." : "❌ Oops! Wrong answer."
} ${
  bonus2
    ? "You got a bonus mark for validation."
    : "No bonus mark for validation."
}\n\n3) oilPrice: ${
  expResult3 ? "✅ Correct! Good job." : "❌ Oops! Wrong answer."
} ${
  bonus3
    ? "You got a bonus mark for validation."
    : "No bonus mark for validation."
}\n\n4) publicBusFare: ${
  expResult4 ? "✅ Correct! Good job." : "❌ Oops! Wrong answer."
} ${
  bonus4
    ? "You got a bonus mark for validation."
    : "No bonus mark for validation."
}\n\n5) isBestFriend: ${
  expResult5 ? "✅ Correct! Good job." : "❌ Oops! Wrong answer."
} ${
  bonus5
    ? "You got a bonus mark for validation."
    : "No bonus mark for validation."
}`;

finalResults.appendChild(totalMarksIs);

copyFeed.addEventListener("click", function () {
  var copyText = results;
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
});
