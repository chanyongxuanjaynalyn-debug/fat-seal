// =====================================================
// VOICE.JS
// BILINGUAL VOICE ASSISTANT
//
// Every announcement speaks:
// 1. English
// 2. Chinese
// =====================================================


// =====================================================
// MAIN SPEAK FUNCTION
// =====================================================

function speakAll(english, chinese, onComplete = null) {

    if (!("speechSynthesis" in window)) {

        console.log("Speech synthesis not supported.");

        if (onComplete) {
            onComplete();
        }

        return;
    }


    // Stop anything already speaking
    window.speechSynthesis.cancel();


    // =================================================
    // ENGLISH
    // =================================================

    const en =
        new SpeechSynthesisUtterance(english);

    en.lang = "en-SG";
    en.rate = 0.9;
    en.pitch = 1;
    en.volume = 1;


    // =================================================
    // CHINESE
    // =================================================

    const zh =
        new SpeechSynthesisUtterance(chinese);

    zh.lang = "zh-CN";
    zh.rate = 0.85;
    zh.pitch = 1;
    zh.volume = 1;


    // =================================================
    // WHEN CHINESE FINISHES
    // =================================================

    zh.onend = function () {

        if (onComplete) {
            onComplete();
        }

    };


    // =================================================
    // SPEAK IN ORDER
    //
    // English → Chinese
    // =================================================

    window.speechSynthesis.speak(en);

    window.speechSynthesis.speak(zh);

}



// =====================================================
// PLEASE TAP YOUR CARD
// =====================================================

function voiceTapCard(onComplete = null) {

    speakAll(

        "Please tap your card.",

        "请轻触您的卡。",

        onComplete

    );

}



// =====================================================
// CARD ACCEPTED
// =====================================================

function voiceCardAccepted(onComplete = null) {

    speakAll(

        "Card accepted.",

        "卡已接受。",

        onComplete

    );

}



// =====================================================
// CARD NOT RECOGNISED
// =====================================================

function voiceCardRejected(onComplete = null) {

    speakAll(

        "Sorry, card not recognised. Please try again.",

        "抱歉，无法识别此卡。请再试一次。",

        onComplete

    );

}



// =====================================================
// SELECT PAYMENT METHOD
// =====================================================

function voiceSelectPayment(onComplete = null) {

    speakAll(

        "Please select your payment method.",

        "请选择您的付款方式。",

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

        onComplete

    );

}



// =====================================================
// CDC VOUCHER SELECTED
// =====================================================

function voiceCDC(onComplete = null) {

    speakAll(

        "CDC voucher selected.",

        "已选择社区发展理事会邻里购物券。",

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

        onComplete

    );

}



// =====================================================
// CHAS CARD SELECTED
// =====================================================

function voiceCHAS(onComplete = null) {

    speakAll(

        "CHAS card selected.",

        "已选择 CHAS 卡。",

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

        onComplete

    );

}



// =====================================================
// THANK YOU
// =====================================================

function voiceThankYou(onComplete = null) {

    speakAll(

        "Thank you. Have a nice day.",

        "谢谢。祝您今天愉快。",

        onComplete

    );

}



console.log(
    "English and Chinese voice system loaded."
);
