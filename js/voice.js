// ==========================================
// VOICE SYSTEM
// English → Chinese → Malay
// ==========================================

function speak(text, language) {

    if (!("speechSynthesis" in window)) {
        console.log("Speech not supported");
        return;
    }

    const message =
        new SpeechSynthesisUtterance(text);

    message.lang = language;

    message.rate = 0.9;

    message.pitch = 1;

    message.volume = 1;

    window.speechSynthesis.speak(message);
}


// ==========================================
// SPEAK 3 LANGUAGES IN ORDER
// ==========================================

function speakThreeLanguages(
    english,
    chinese,
    malay
) {

    // Stop previous speech
    window.speechSynthesis.cancel();


    const englishMessage =
        new SpeechSynthesisUtterance(
            english
        );

    englishMessage.lang =
        "en-SG";

    englishMessage.rate =
        0.9;


    const chineseMessage =
        new SpeechSynthesisUtterance(
            chinese
        );

    chineseMessage.lang =
        "zh-CN";

    chineseMessage.rate =
        0.85;


    const malayMessage =
        new SpeechSynthesisUtterance(
            malay
        );

    malayMessage.lang =
        "ms-MY";

    malayMessage.rate =
        0.9;


    // Speak in order
    window.speechSynthesis.speak(
        englishMessage
    );

    window.speechSynthesis.speak(
        chineseMessage
    );

    window.speechSynthesis.speak(
        malayMessage
    );
}


// ==========================================
// PLEASE TAP YOUR CARD
// ==========================================

function voiceTapCard() {

    speakThreeLanguages(

        "Please tap your card.",

        "请轻触您的卡。",

        "Sila sentuh kad anda."

    );

}


// ==========================================
// READING CARD
// ==========================================

function voiceReadingCard() {

    speakThreeLanguages(

        "Reading your card.",

        "正在读取您的卡。",

        "Kad anda sedang dibaca."

    );

}


// ==========================================
// CARD ACCEPTED
// ==========================================

function voiceCardAccepted() {

    speakThreeLanguages(

        "Card accepted. Please select your payment method.",

        "卡已接受。请选择付款方式。",

        "Kad diterima. Sila pilih kaedah pembayaran."

    );

}


// ==========================================
// CARD NOT RECOGNISED
// ==========================================

function voiceCardRejected() {

    speakThreeLanguages(

        "Sorry, card not recognised. Please try again.",

        "抱歉，无法识别此卡。请再试一次。",

        "Maaf, kad tidak dikenali. Sila cuba lagi."

    );

}


// ==========================================
// PAYMENT SUCCESSFUL
// ==========================================

function voicePaymentSuccessful() {

    speakThreeLanguages(

        "Payment successful. Thank you.",

        "付款成功。谢谢。",

        "Pembayaran berjaya. Terima kasih."

    );

}
