# HIVTRACE Language Package

## Overview

This package is a language support module for HIVTRACE-GO and hivtrace-viz, built to work with i18next. It contains JSON files (`en.json`, `es.json`) for multiple languages.

## How to Use

### Installation

```bash
npm install hivtrace-locales
```

### Usage with i18next in Raw JavaScript

Initialize i18next:

```javascript
import i18next from 'i18next';

i18next.init({
  resources: {
    en: {
      translation: require('<path_to_en.json>')
    },
    es: {
      translation: require('<path_to_es.json>')
    }
  },
  lng: 'en',
  fallbackLng: 'en'
});
```

Retrieve localized strings:

```javascript
const localizedString = i18next.t('key_from_json');
```

### Usage in Svelte

In Svelte, you can use i18next similarly:

```javascript
import i18next from 'i18next';

i18next.init({
  // ... (same as above)
});

const localizedString = i18next.t('key_from_json');
```

Replace `'key_from_json'` with the appropriate key from the language JSON files.
