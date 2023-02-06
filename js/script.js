let click_to_record = document.getElementById("click_to_record");
click_to_record.addEventListener('click',function(){
    const speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    console.log("Speech Recognition is working");
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'fr-FR';

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        document.getElementById("convert_text").value = transcript;

        console.log(transcript);
    });

    if (speech === true) {
        recognition.start();
    }
})