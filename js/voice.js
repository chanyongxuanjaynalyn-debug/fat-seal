// =====================================================
// VOICE.JS
// NFC PAYMENT VOICE ASSISTANT
//
// Languages:
// English
// Chinese
// Malay
// =====================================================


// =====================================================
// CURRENT LANGUAGE
// =====================================================
//
// Available:
//
// "en" = English
// "zh" = Chinese
// "ms" = Malay
//
// Default is English.
// =====================================================

let currentLanguage = "en";


// =====================================================
// CHECK IF SPEECH IS AVAILABLE
// =====================================================

function speechSupported() {

    return (
        "speechSynthesis" in window &&
        "SpeechSynthesisUtterance" in window
    );

}


// =====================================================
// GET BEST AVAILABLE VOICE
// =====================================================

function getVoice(languageCode) {

    const voices =
        window.speechSynthesis.getVoices();


    if (!voices.length) {
        return null;
    }


    // ---------------------------------------------
    // English
    // ---------------------------------------------

    if (languageCode === "en") {

        return (
            voices.find(
                voice =>
                    voice.lang === "en-SG"
            ) ||

            voices.find(
                voice =>
                    voice.lang.startsWith("en")
            ) ||

            null
        );

    }


    // ---------------------------------------------
    // Chinese
    // ---------------------------------------------

    if (languageCode === "zh") {

        return (
            voices.find(
                voice =>
                    voice.lang === "zh-SG"
            ) ||

            voices.find(
                voice =>
                    voice.lang === "zh-CN"
            ) ||

            voices.find(
                voice =>
                    voice.lang.startsWith("zh")
            ) ||

            null
        );

    }


    // ---------------------------------------------
    // Malay
    // ---------------------------------------------

    if (languageCode === "ms") {

        return (
            voices.find(
                voice =>
                    voice.lang === "ms-MY"
            ) ||

            voices.find(
                voice =>
                    voice.lang.startsWith("ms")
            ) ||

            null
        );

    }


    return null;

}


// =====================================================
// MAIN SPEAK FUNCTION
// =====================================================

function speak(text, languageCode = currentLanguage) {

    if (!speechSupported()) {

        console.log(
            "Speech synthesis is not supported."
        );

        return;

    }


    // Stop anything currently being spoken

    window.speechSynthesis.cancel();


    const message =
        new SpeechSynthesisUtterance(text);


    // ---------------------------------------------
    // Language
    // ---------------------------------------------

    if (languageCode === "en") {

        message.lang = "en-SG";

    }

    else if (languageCode === "zh") {

        message.lang = "zh-CN";

    }

    else if (languageCode === "ms") {

        message.lang = "ms-MY";

    }


    // ---------------------------------------------
    // Voice settings
    // ---------------------------------------------

    message.rate = 0.9;

    message.pitch = 1;

    message.volume = 1;


    // ---------------------------------------------
    // Choose installed voice
    // ---------------------------------------------

    const selectedVoice =
        getVoice(languageCode);


    if (selectedVoice) {

        message.voice =
            selectedVoice;

    }


    // ---------------------------------------------
    // Debugging
    // ---------------------------------------------

    message.onstart = function() {

        console.log(
            "Speaking:",
            text
        );

    };


    message.onerror = function(event) {

        console.error(
            "Speech error:",
            event.error
        );

    };


    // ---------------------------------------------
    // SPEAK
    // ---------------------------------------------

    window.speechSynthesis.speak(
        message
    );

}


// =====================================================
// CHANGE LANGUAGE
// =====================================================

function setLanguage(language) {

    currentLanguage =
        language;


    console.log(
        "Language changed to:",
        currentLanguage
    );


    voiceLanguageSelected();

}


// =====================================================
// LANGUAGE SELECTED
// =====================================================

function voiceLanguageSelected() {

    if (currentLanguage === "en") {

        speak(
            "English selected.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "已选择中文。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Bahasa Melayu dipilih.",
            "ms"
        );

    }

}


// =====================================================
// PLEASE TAP CARD
// =====================================================

function voiceTapCard() {

    if (currentLanguage === "en") {

        speak(
            "Please tap your card.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "请轻触您的卡。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Sila sentuh kad anda.",
            "ms"
        );

    }

}


// =====================================================
// READING CARD
// =====================================================

function voiceReadingCard() {

    if (currentLanguage === "en") {

        speak(
            "Reading your card.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "正在读取您的卡。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Kad anda sedang dibaca.",
            "ms"
        );

    }

}


// =====================================================
// CARD ACCEPTED
// =====================================================

function voiceCardAccepted() {

    if (currentLanguage === "en") {

        speak(
            "Card accepted. Please select your payment method.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "卡已接受。请选择付款方式。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Kad diterima. Sila pilih kaedah pembayaran.",
            "ms"
        );

    }

}


// =====================================================
// CARD NOT RECOGNISED
// =====================================================

function voiceCardRejected() {

    if (currentLanguage === "en") {

        speak(
            "Sorry, card not recognised. Please try again.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "抱歉，无法识别此卡。请再试一次。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Maaf, kad tidak dikenali. Sila cuba lagi.",
            "ms"
        );

    }

}


// =====================================================
// SELECT PAYMENT METHOD
// =====================================================

function voiceSelectPayment() {

    if (currentLanguage === "en") {

        speak(
            "Please select your payment method.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "请选择您的付款方式。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Sila pilih kaedah pembayaran anda.",
            "ms"
        );

    }

}


// =====================================================
// CREDIT CARD
// =====================================================

function voiceCreditCard() {

    if (currentLanguage === "en") {

        speak(
            "Credit card selected.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "已选择信用卡。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Kad kredit dipilih.",
            "ms"
        );

    }

}


// =====================================================
// CDC VOUCHER
// =====================================================

function voiceCDC() {

    if (currentLanguage === "en") {

        speak(
            "CDC voucher selected.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "已选择社区发展理事会邻里购物券。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Baucar CDC dipilih.",
            "ms"
        );

    }

}


// =====================================================
// PAYPAL
// =====================================================

function voicePayPal() {

    if (currentLanguage === "en") {

        speak(
            "PayPal selected.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "已选择 PayPal。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "PayPal dipilih.",
            "ms"
        );

    }

}


// =====================================================
// CHAS CARD
// =====================================================

function voiceCHAS() {

    if (currentLanguage === "en") {

        speak(
            "CHAS card selected.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "已选择 CHAS 卡。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Kad CHAS dipilih.",
            "ms"
        );

    }

}


// =====================================================
// PROCESSING PAYMENT
// =====================================================

function voiceProcessingPayment() {

    if (currentLanguage === "en") {

        speak(
            "Processing your payment. Please wait.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "正在处理您的付款。请稍候。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Pembayaran anda sedang diproses. Sila tunggu.",
            "ms"
        );

    }

}


// =====================================================
// PAYMENT SUCCESSFUL
// =====================================================

function voicePaymentSuccessful() {

    if (currentLanguage === "en") {

        speak(
            "Payment successful. Thank you.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "付款成功。谢谢。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Pembayaran berjaya. Terima kasih.",
            "ms"
        );

    }

}


// =====================================================
// PAYMENT FAILED
// =====================================================

function voicePaymentFailed() {

    if (currentLanguage === "en") {

        speak(
            "Payment unsuccessful. Please try again.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "付款失败。请再试一次。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Pembayaran tidak berjaya. Sila cuba lagi.",
            "ms"
        );

    }

}


// =====================================================
// THANK YOU
// =====================================================

function voiceThankYou() {

    if (currentLanguage === "en") {

        speak(
            "Thank you. Have a nice day.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "谢谢。祝您今天愉快。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Terima kasih. Semoga hari anda menyenangkan.",
            "ms"
        );

    }

}


// =====================================================
// TEST VOICE
// =====================================================

function testVoice() {

    if (currentLanguage === "en") {

        speak(
            "Voice assistance is working. Please tap your card.",
            "en"
        );

    }


    else if (currentLanguage === "zh") {

        speak(
            "语音辅助功能正常。请轻触您的卡。",
            "zh"
        );

    }


    else if (currentLanguage === "ms") {

        speak(
            "Bantuan suara sedang berfungsi. Sila sentuh kad anda.",
            "ms"
        );

    }

}


// =====================================================
// LOAD AVAILABLE VOICES
// =====================================================
//
// Chrome sometimes loads the voice list after
// JavaScript has already started.
// =====================================================

if (speechSupported()) {

    window.speechSynthesis.getVoices();


    window.speechSynthesis.onvoiceschanged =
        function() {

            const voices =
                window.speechSynthesis.getVoices();


            console.log(
                "Voices loaded:",
                voices.length
            );

        };

}


// =====================================================
// VOICE.JS READY
// =====================================================

console.log(
    "voice.js loaded successfully"
);
