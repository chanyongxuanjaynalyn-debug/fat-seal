// =====================================================
// VOICE.JS
// MULTILINGUAL VOICE ASSISTANT
//
// Every announcement speaks:
// 1. English
// 2. Chinese
// 3. Malay
// =====================================================


// =====================================================
// MAIN MULTILINGUAL SPEAK FUNCTION
// =====================================================

function speakAll(english, chinese, malay) {

    if (!("speechSynthesis" in window)) {
        alert("Speech is not supported by this browser.");
        return;
    }

    // Stop anything already speaking
    window.speechSynthesis.cancel();


    // ==============================
    // ENGLISH
    // ==============================

    const englishVoice =
        new SpeechSynthesisUtterance(english);

    englishVoice.lang = "en-SG";
    englishVoice.rate = 0.9;
    englishVoice.pitch = 1;
    englishVoice.volume = 1;


    // ==============================
    // CHINESE
    // ==============================

    const chineseVoice =
        new SpeechSynthesisUtterance(chinese);

    chineseVoice.lang = "zh-CN";
    chineseVoice.rate = 0.85;
    chineseVoice.pitch = 1;
    chineseVoice.volume = 1;


    // ==============================
    // MALAY
    // ==============================

    const malayVoice =
        new SpeechSynthesisUtterance(malay);

    malayVoice.lang = "ms-MY";
    malayVoice.rate = 0.9;
    malayVoice.pitch = 1;
    malayVoice.volume = 1;


    // ==============================
    // SPEAK IN THIS ORDER
    //
    // English
    // ↓
    // Chinese
    // ↓
    // Malay
    // ==============================

    window.speechSynthesis.speak(
        englishVoice
    );

    window.speechSynthesis.speak(
        chineseVoice
    );

    window.speechSynthesis.speak(
        malayVoice
    );

}


// =====================================================
// PLEASE TAP YOUR CARD
// =====================================================

function voiceTapCard() {

    speakAll(

        "Please tap your card.",

        "请轻触您的卡。",

        "Sila sentuh kad anda."

    );

}


// =====================================================
// READING CARD
// =====================================================

function voiceReadingCard() {

    speakAll(

        "Reading your card.",

        "正在读取您的卡。",

        "Kad anda sedang dibaca."

    );

}


// =====================================================
// CARD ACCEPTED
// =====================================================

function voiceCardAccepted() {

    speakAll(

        "Card accepted. Please select your payment method.",

        "卡已接受。请选择付款方式。",

        "Kad diterima. Sila pilih kaedah pembayaran."

    );

}


// =====================================================
// CARD NOT RECOGNISED
// =====================================================

function voiceCardRejected() {

    speakAll(

        "Sorry, card not recognised. Please try again.",

        "抱歉，无法识别此卡。请再试一次。",

        "Maaf, kad tidak dikenali. Sila cuba lagi."

    );

}


// =====================================================
// SELECT PAYMENT METHOD
// =====================================================

function voiceSelectPayment() {

    speakAll(

        "Please select your payment method.",

        "请选择您的付款方式。",

        "Sila pilih kaedah pembayaran anda."

    );

}


// =====================================================
// CREDIT CARD
// =====================================================

function voiceCreditCard() {

    speakAll(

        "Credit card selected.",

        "已选择信用卡。",

        "Kad kredit dipilih."

    );

}


// =====================================================
// CDC VOUCHER
// =====================================================

function voiceCDC() {

    speakAll(

        "CDC voucher selected.",

        "已选择社区发展理事会邻里购物券。",

        "Baucar CDC dipilih."

    );

}


// =====================================================
// PAYPAL
// =====================================================

function voicePayPal() {

    speakAll(

        "PayPal selected.",

        "已选择 PayPal。",

        "PayPal dipilih."

    );

}


// =====================================================
// CHAS CARD
// =====================================================

function voiceCHAS() {

    speakAll(

        "CHAS card selected.",

        "已选择 CHAS 卡。",

        "Kad CHAS dipilih."

    );

}


// =====================================================
// PROCESSING PAYMENT
// =====================================================

function voiceProcessingPayment() {

    speakAll(

        "Processing your payment. Please wait.",

        "正在处理您的付款。请稍候。",

        "Pembayaran anda sedang diproses. Sila tunggu."

    );

}


// =====================================================
// PAYMENT SUCCESSFUL
// =====================================================

function voicePaymentSuccessful() {

    speakAll(

        "Payment successful. Thank you.",

        "付款成功。谢谢。",

        "Pembayaran berjaya. Terima kasih."

    );

}


// =====================================================
// PAYMENT FAILED
// =====================================================

function voicePaymentFailed() {

    speakAll(

        "Payment unsuccessful. Please try again.",

        "付款失败。请再试一次。",

        "Pembayaran tidak berjaya. Sila cuba lagi."

    );

}


// =====================================================
// THANK YOU
// =====================================================

function voiceThankYou() {

    speakAll(

        "Thank you. Have a nice day.",

        "谢谢。祝您今天愉快。",

        "Terima kasih. Semoga hari anda menyenangkan."

    );

}


// =====================================================
// TEST VOICE
// =====================================================

function testVoice() {

    speakAll(

        "Please tap your card.",

        "请轻触您的卡。",

        "Sila sentuh kad anda."

    );

}


// =====================================================
// DEBUG
// =====================================================

console.log("voice.js loaded successfully");
