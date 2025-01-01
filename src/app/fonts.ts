import { TNSFontIcon, fonticon } from '@nativescript/fonticon';

TNSFontIcon.debug = false;

TNSFontIcon.paths = {
  fa: 'node_modules/@fortawesome/fontawesome-free/css/all.css'
};

TNSFontIcon.loadCss();

export const fa = fonticon.css("fa");