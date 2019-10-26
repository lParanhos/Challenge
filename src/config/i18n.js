import i18n from "i18next";
import en from "./en.json";

i18n.init({
    resources: {
        en
    },
    lng: "en",

    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
