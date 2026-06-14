/**
 * Translator - A lightweight client-side translation library
 * Handles dictionary-based translations with nested key paths,
 * attribute translation (placeholder, aria-label), and language persistence.
 */
class Translator {
  /**
   * @param {Object} options Configuration options
   * @param {Array<string>} options.languages Supported language codes (e.g. ['en', 'ne'])
   * @param {string} options.defaultLanguage Default fallback language
   * @param {Object} options.translations Translation dictionary object
   * @param {Function} options.onLanguageChange Callback triggered when language changes
   * @param {boolean} options.autoTranslate Automatically run translation on init
   */
  constructor(options = {}) {
    this.languages = options.languages || ['en', 'ne'];
    this.defaultLanguage = options.defaultLanguage || 'en';
    this.translations = options.translations || {};
    this.onLanguageChange = options.onLanguageChange || null;
    
    // Load language from storage, fallback to default
    this.currentLanguage = this.loadLanguage() || this.defaultLanguage;
    
    // Auto translate on page load
    if (options.autoTranslate !== false) {
      this.translatePage();
    }
  }

  /**
   * Fetch saved language from LocalStorage
   * @returns {string|null} Saved language code
   */
  loadLanguage() {
    try {
      return localStorage.getItem('selected_language');
    } catch (e) {
      console.warn('LocalStorage not accessible. Defaulting to default language.', e);
      return null;
    }
  }

  /**
   * Save selected language to LocalStorage
   * @param {string} lang Language code to save
   */
  saveLanguage(lang) {
    try {
      localStorage.setItem('selected_language', lang);
    } catch (e) {
      console.warn('LocalStorage not accessible. Language selection will not persist.', e);
    }
  }

  /**
   * Switch the current language and translate the page
   * @param {string} lang The language code to switch to
   */
  setLanguage(lang) {
    if (!this.languages.includes(lang)) {
      console.error(`Language '${lang}' is not supported by this translator.`);
      return;
    }
    
    this.currentLanguage = lang;
    this.saveLanguage(lang);
    this.translatePage();
    
    if (typeof this.onLanguageChange === 'function') {
      this.onLanguageChange(lang);
    }
  }

  /**
   * Translates all elements with `data-trn` attribute on the page
   */
  translatePage() {
    // Update document HTML lang attribute for SEO and accessibility
    document.documentElement.lang = this.currentLanguage;
    
    // Find all translatable elements
    const elements = document.querySelectorAll('[data-trn]');
    
    elements.forEach(element => {
      const keyPath = element.getAttribute('data-trn');
      const translation = this.getTranslation(keyPath);
      
      if (translation !== undefined && translation !== null) {
        this.applyTranslation(element, translation);
      } else {
        console.warn(`Translation key not found: "${keyPath}" for language: "${this.currentLanguage}"`);
      }
    });
  }

  /**
   * Appends the translation value to the element
   * Supports standard strings, complex objects (text, placeholder, aria-label)
   * @param {HTMLElement} element The DOM element
   * @param {any} translation The translation value or object
   */
  applyTranslation(element, translation) {
    if (typeof translation === 'object') {
      // Handle complex translations (e.g. text + placeholder + aria-label)
      if (translation.text !== undefined) {
        element.innerHTML = translation.text;
      }
      if (translation.placeholder !== undefined) {
        element.setAttribute('placeholder', translation.placeholder);
      }
      if (translation.ariaLabel !== undefined) {
        element.setAttribute('aria-label', translation.ariaLabel);
      }
    } else {
      // Default behavior (string translation)
      const isInput = element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
      
      if (isInput && element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', translation);
      } else {
        element.innerHTML = translation;
      }
    }
  }

  /**
   * Resolves a dot-notation key path to a value in the translation dictionary
   * @param {string} keyPath E.g. "hero.title" or "nav.home"
   * @returns {any} Resolved translation string/object, or null if not found
   */
  getTranslation(keyPath) {
    if (!keyPath) return null;
    
    const keys = keyPath.split('.');
    let result = this.translations[this.currentLanguage];
    
    for (const key of keys) {
      if (result && Object.prototype.hasOwnProperty.call(result, key)) {
        result = result[key];
      } else {
        return null;
      }
    }
    
    return result;
  }
}

// Export for module systems if needed, but attach to window for simple browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Translator;
} else {
  window.Translator = Translator;
}
