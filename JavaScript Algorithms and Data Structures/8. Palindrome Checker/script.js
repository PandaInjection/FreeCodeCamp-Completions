document.getElementById("check-btn").addEventListener("click", function() {
    let input = document.getElementById("text-input").value;
    let result = document.getElementById("result");
    
    if (!input) {
        alert("Please input a value.");
        return;
    }
    
    let processedInput = input.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let reversedInput = processedInput.split("").reverse().join("");
    
    if (processedInput === reversedInput) {
        result.textContent = `${input} is a palindrome.`;
    } else {
        result.textContent = `${input} is not a palindrome.`;
    }
});