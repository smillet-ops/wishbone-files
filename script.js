function showTab(tabId) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Show selected
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function toggleMode() {
    const isChecked = document.getElementById('viewToggle').checked;
    const body = document.body;
    const label = document.getElementById('mode-label');
    
    if(isChecked) {
        body.setAttribute('data-mode', 'bone');
        label.innerText = "BONE MODE";
    } else {
        body.removeAttribute('data-mode');
        label.innerText = "WISH MODE";
    }
}