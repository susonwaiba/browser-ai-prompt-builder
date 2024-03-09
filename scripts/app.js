console.log('app.js loaded');

function loadSettings() {
    console.log('loadSettings() called');
    var settings = localStorage.getItem('settings');
    if (settings) {
        settings = JSON.parse(settings);
        console.log('settings:', settings);
    }
}

function onSettingFormSubmit() {

    console.log('onSettingFormSubmit() called');
    var settings = {
        color: 'red',
        fontSize: 24
    };
    localStorage.setItem('settings', JSON.stringify(settings));
}
