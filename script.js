function activate(panelId) {
    document.getElementById('wish-panel').classList.remove('active');
    document.getElementById('bones-panel').classList.remove('active');
    
    document.getElementById(panelId + '-panel').classList.add('active');
}

function toggleBackstory() {
    const modal = document.getElementById('backstory-modal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}