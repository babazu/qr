document.getElementById('startButton').addEventListener('click', function() {  
    const html5QrCode = new Html5Qrcode("reader");  
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };  
  
    function onScanSuccess(qrCodeMessage) {  
        // Ova funkcija se poziva kada je QR kod uspješno skeniran  
        // qrCodeMessage je string koji sadrži podatke iz QR koda  
        QRCodeScanned(qrCodeMessage);  
        // Nakon skeniranja, zaustavite kameru  
        html5QrCode.stop().then(() => {  
            console.log("QR skeniranje zaustavljeno.");  
        }).catch(err => {  
            console.warn("Problem pri zaustavljanju QR skeniranja.", err);  
        });  
    }  
  
    function onScanError(errorMessage) {  
        // Obrada grešaka tijekom skeniranja  
        console.error("Problem pri skeniranju.", errorMessage);  
    }  
  
    // Start skeniranja koristeći prednju ili stražnju kameru  
    html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess, onScanError);  
});  
  
function QRCodeScanned(qrCodeData) {  
    console.log("Skenirani QR kod:", qrCodeData);  
    // Ovdje možete dodati logiku što učiniti s podacima QR koda  
} 