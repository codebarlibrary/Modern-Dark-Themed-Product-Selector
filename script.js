function confirmSelection() {
    const selected = document.querySelector('input[name="ramType"]:checked');

    if (selected) {
        alert("You Selected: " + selected.value + " RAM kit!");
    } else {
        alert("Please select a RAM kit!");
    }
}