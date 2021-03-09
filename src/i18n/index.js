import I18n from 'i18n-js';
import translations from './languages';

I18n.fallbacks = true;

/* defaultLocale en language recieved from commn file in config */
// I18n.locale = common.defaultLocale;

// I18n.missingTranslation = scope => scope;

/* get translations files from languages */
I18n.translations = translations;

export default I18n;
