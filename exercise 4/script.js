const showAlertBtn = document.getElementById('showAlertBtn');
const daySelect = document.getElementById('daySelect');

showAlertBtn.addEventListener('click', showAlert);

function showAlert() {
    const selectedDay = daySelect.value;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (selectedDay) {
        const selectedDayName = daysOfWeek[selectedDay];
        alert(`You selected: ${selectedDayName}`);
    }
}