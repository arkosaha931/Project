function toggleSubmit() {
    const checkbox = document.getElementById('agree');
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.disabled = !checkbox.checked;
}

function submitAgreement() {
    if (document.getElementById('agree').checked) {
        alert('You have agreed to the terms and conditions.');
        
    }
}