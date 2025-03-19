import { useState, useEffect, useCallback, ReactNode } from "react";
import { useClient } from "../hooks/useClient";
import I18n from "../../lib/i18n";
import { TranslationContext } from "@/contexts/TranslationContext";

const i18n = new I18n();

export function TranslationProvider({ children }: { children: ReactNode }) {
    const client = useClient();
    const [locale, setLocale] = useState();
    const [loading, setLoading] = useState(true);

    const loadTranslations = useCallback(
        async (currentLocale: string) => {
            const { currentUser } = await client.get("currentUser");

            const locale = currentLocale || currentUser.locale;

            await i18n.loadTranslations(locale);
            setLoading(false);
        },
        [client]
    );

    useEffect(() => {
        if (!locale) return;
        loadTranslations(locale);
    }, [locale, loadTranslations]);

    if (loading) return null;

    return (
        <TranslationContext.Provider value={{ i18n, setLocale }}>
            {children}
        </TranslationContext.Provider>
    );
}
