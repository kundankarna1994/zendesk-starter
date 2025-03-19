import { createContext } from "react";

export const TranslationContext =
    (createContext < { i18n: any, setLocale: any }) | (null > null);
