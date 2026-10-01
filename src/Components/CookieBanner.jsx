import { useEffect, useState } from "react";
import "./CookieBanner.css";

function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const [preferences, setPreferences] = useState({
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem("nexteclat-cookie-consent");

        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const saveConsent = (analytics, marketing) => {
        const consent = {
            necessary: true,
            analytics,
            marketing,
            timestamp: new Date().toISOString(),
        };

        localStorage.setItem(
            "nexteclat-cookie-consent",
            JSON.stringify(consent)
        );

        setShowBanner(false);
        setShowSettings(false);

        // Les futurs outils comme Google Analytics
        // pourront être initialisés ici si analytics === true.
        //
        // Exemple :
        // if (analytics) {
        //     initializeGoogleAnalytics();
        // }
    };

    const acceptAll = () => {
        saveConsent(true, true);
    };

    const refuseOptional = () => {
        saveConsent(false, false);
    };

    const savePreferences = () => {
        saveConsent(
            preferences.analytics,
            preferences.marketing
        );
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="cookie-banner">
            <div className="cookie-content">

                {!showSettings ? (
                    <>
                        <h2>Votre confidentialité compte</h2>

                        <p>
                            NextÉclat utilise des cookies et des technologies
                            similaires nécessaires au bon fonctionnement du site.
                            Avec votre accord, nous pouvons également utiliser
                            des cookies d'analyse et de marketing afin de mieux
                            comprendre l'utilisation de notre site, améliorer
                            votre expérience et développer nos services
                            digitaux.
                        </p>

                        <p>
                            Vous pouvez accepter tous les cookies, refuser les
                            cookies optionnels ou personnaliser vos préférences.
                            Vous pourrez modifier votre choix à tout moment.
                        </p>

                        <div className="cookie-buttons">

                            <button
                                className="cookie-button cookie-accept"
                                onClick={acceptAll}
                            >
                                Accepter
                            </button>

                            <button
                                className="cookie-button cookie-refuse"
                                onClick={refuseOptional}
                            >
                                Refuser les cookies optionnels
                            </button>

                            <button
                                className="cookie-button cookie-settings"
                                onClick={() => setShowSettings(true)}
                            >
                                Gérer mes préférences
                            </button>

                        </div>
                    </>
                ) : (
                    <>
                        <h2>⚙️ Gérer mes cookies</h2>

                        <p>
                            Choisissez les catégories de cookies que vous
                            souhaitez autoriser sur NextÉclat.
                        </p>

                        <div className="cookie-option">
                            <div>
                                <h3>Cookies essentiels</h3>
                                <p>
                                    Ces cookies sont nécessaires au fonctionnement
                                    du site et ne peuvent pas être désactivés.
                                </p>
                            </div>

                            <span className="cookie-status">
                                Toujours actifs
                            </span>
                        </div>

                        <div className="cookie-option">
                            <div>
                                <h3>Cookies d'analyse</h3>
                                <p>
                                    Ils nous permettent de comprendre comment
                                    les visiteurs utilisent NextÉclat et
                                    d'améliorer nos pages et services.
                                </p>
                            </div>

                            <label className="cookie-switch">
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={(e) =>
                                        setPreferences({
                                            ...preferences,
                                            analytics: e.target.checked,
                                        })
                                    }
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="cookie-option">
                            <div>
                                <h3>Cookies marketing</h3>
                                <p>
                                    Ils peuvent être utilisés pour mesurer
                                    l'efficacité de nos campagnes et proposer
                                    des contenus ou publicités plus pertinents.
                                </p>
                            </div>

                            <label className="cookie-switch">
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={(e) =>
                                        setPreferences({
                                            ...preferences,
                                            marketing: e.target.checked,
                                        })
                                    }
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="cookie-buttons">

                            <button
                                className="cookie-button cookie-accept"
                                onClick={savePreferences}
                            >
                                Enregistrer mes préférences
                            </button>

                            <button
                                className="cookie-button cookie-refuse"
                                onClick={refuseOptional}
                            >
                                Tout refuser
                            </button>

                            <button
                                className="cookie-button cookie-settings"
                                onClick={() => setShowSettings(false)}
                            >
                                Retour
                            </button>

                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default CookieBanner;