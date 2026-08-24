// =====================================================
// VOICE.JS
// AUTOMATIC MULTILINGUAL VOICE PROMPTS
//
// Every prompt speaks:
// 1. English
// 2. Chinese
// 3. Malay
// =====================================================


function speakAll(english, chinese, malay, onComplete = null) {

    if (!("speechSynthesis" in window)) {
        console.log("Speech synthesis not supported.");

        if (onComplete) {
            onComplete();
        }

        return;
    }


    // Stop previous announcement
    window.speechSynthesis.cancel();


    // ENGLISH
    const en =
        new SpeechSynthesisUtterance(english);

    en.lang = "en-SG";
    en.rate = 0.9;
    en.pitch = 1;
    en.volume = 1;


    // CHINESE
    const zh =
        new SpeechSynthesisUtterance(chinese);

    zh.lang = "zh-CN";
    zh.rate = 0.85;
    zh.pitch = 1;
    zh.volume = 1;


    // MALAY
    const ms =
        new SpeechSynthesisUtterance(malay);

    ms.lang = "ms-MY";
    ms.rate = 0.9;
    ms.pitch = 1;
    ms.volume = 1;


    // When Malay finishes, run next action
    ms.onend = function () {

        if (onComplete) {
            onComplete();
        }

    };


    // Speak:
    // English → Chinese → Malay

    window.speechSynthesis.speak(en);

    window.speechSynthesis.speak(zh);

    window.speechSynthesis.speak(ms);

}



// =====================================================
// PLEASE TAP CARD
// =====================================================

function voiceTapCard(onComplete = null) {

    speakAll(

        "Please tap your card.",

        "请轻触您的卡。",

        "Sila sentuh kad anda.",

        onComplete

    );

}



// =====================================================
// READING CARD
// =====================================================

function voiceReadingCard(onComplete = null) {

    speakAll(

        "Reading your card. Please wait.",

        "正在读取您的卡。请稍候。",

        "Kad anda sedang dibaca. Sila tunggu.",

        onComplete

    );

}



// =====================================================
// CARD ACCEPTED
// =====================================================

function voiceCardAccepted(onComplete = null) {

    speakAll(

        "Card accepted. Please select your payment method.",

        "卡已接受。请选择付款方式。",

        "Kad diterima. Sila pilih kaedah pembayaran.",

        onComplete

    );

}



// =====================================================
// CARD REJECTED
// =====================================================

function voiceCardRejected(onComplete = null) {

    speakAll(

        "Sorry, card not recognised. Please try again.",

        "抱歉，无法识别此卡。请再试一次。",

        "Maaf, kad tidak dikenali. Sila cuba lagi.",

        onComplete

    );

}



// =====================================================
// SELECT PAYMENT
// =====================================================

function voiceSelectPayment(onComplete = null) {

    speakAll(

        "Please select your payment method.",

        "请选择您的付款方式。",

        "Sila pilih kaedah pembayaran anda.",

        onComplete

    );

}



// =====================================================
// PROCESSING PAYMENT
// =====================================================

function voiceProcessingPayment(onComplete = null) {

    speakAll(

        "Processing your payment. Please wait.",

        "正在处理您的付款。请稍候。",

        "Pembayaran anda sedang diproses. Sila tunggu.",

        onComplete

    );

}



// =====================================================
// PAYMENT SUCCESSFUL
// =====================================================

function voicePaymentSuccessful(onComplete = null) {

    speakAll(

        "Payment successful. Thank you.",

        "付款成功。谢谢。",

        "Pembayaran berjaya. Terima kasih.",

        onComplete

    );

}



// =====================================================
// PAYMENT FAILED
// =====================================================

function voicePaymentFailed(onComplete = null) {

    speakAll(

        "Payment unsuccessful. Please try again.",

        "付款失败。请再试一次。",

        "Pembayaran tidak berjaya. Sila cuba lagi.",

        onComplete

    );

}



// =====================================================
// CREDIT CARD SELECTED
// =====================================================

function voiceCreditCard(onComplete = null) {

    speakAll(

        "Credit card selected.",

        "已选择信用卡。",

        "Kad kredit dipilih.",

        onComplete

    );

}



// =====================================================
// CDC SELECTED
// =====================================================

function voiceCDC(onComplete = null) {

    speakAll(

        "CDC voucher selected.",

        "已选择社区发展理事会邻里购物券。",

        "Baucar CDC dipilih.",

        onComplete

    );

}



// =====================================================
// CHAS SELECTED
// =====================================================

function voiceCHAS(onComplete = null) {

    speakAll(

        "CHAS card selected.",

        "已选择 CHAS 卡。",

        "Kad CHAS dipilih.",

        onComplete

    );

}



// =====================================================
// PAYPAL SELECTED
// =====================================================

function voicePayPal(onComplete = null) {

    speakAll(

        "PayPal selected.",

        "已选择 PayPal。",

        "PayPal dipilih.",

        onComplete

    );

}



console.log("Automatic multilingual voice system loaded.");
