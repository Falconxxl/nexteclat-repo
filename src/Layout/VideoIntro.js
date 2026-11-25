import { useState, useEffect, useCallback } from 'react';
import './VideoIntro.css';
import MikeVideoMarketing from '../Images/Mike_video_marketing.jpg';
import NextEclatLogo from '../Assets/2.Logo_NextEclat_short.png';

const DESKTOP_VIDEO_ID = 'W8sBdhHr4B4';
const MOBILE_VIDEO_ID = 'FGN9gCFHXhc';
const MOBILE_QUERY = '(max-width: 767px)';
const LOAD_TIMEOUT_MS = 12000;

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
    );

    useEffect(() => {
        const mql = window.matchMedia(MOBILE_QUERY);
        const onChange = (e) => setIsMobile(e.matches);
        setIsMobile(mql.matches);
        if (mql.addEventListener) {
            mql.addEventListener('change', onChange);
            return () => mql.removeEventListener('change', onChange);
        }
        mql.addListener(onChange);
        return () => mql.removeListener(onChange);
    }, []);

    return isMobile;
}

function VideoIntro() {
    const isMobile = useIsMobile();
    const [playing, setPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    const videoId = isMobile ? MOBILE_VIDEO_ID : DESKTOP_VIDEO_ID;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
    const watchUrl = isMobile
        ? `https://www.youtube.com/shorts/${videoId}`
        : `https://www.youtube.com/watch?v=${videoId}`;

    const handlePlay = useCallback(() => {
        setLoaded(false);
        setFailed(false);
        setPlaying(true);
    }, []);

    // Le viewport change pendant la lecture : une autre vidéo se charge
    useEffect(() => {
        setLoaded(false);
        setFailed(false);
    }, [videoId]);

    // Repli si l'iframe ne finit jamais de charger
    useEffect(() => {
        if (!playing || loaded || failed) return undefined;
        const t = setTimeout(() => setFailed(true), LOAD_TIMEOUT_MS);
        return () => clearTimeout(t);
    }, [playing, loaded, failed, videoId]);

    return (
        <section className="vi-section" aria-label="Lancement officiel NextÉclat">
            <div className={`vi-black${playing ? ' is-playing' : ''}`}>
                <div className="vi-comp">
                    <img
                        className="vi-logo"
                        src={NextEclatLogo}
                        alt="NextÉclat"
                        decoding="async"
                    />

                    <h2 className="vi-title" aria-label="Lancement officiel">
                        <svg viewBox="0 0 680 60" aria-hidden="true" focusable="false">
                            <text x="0" y="50" textLength="680" lengthAdjust="spacing">
                                LANCEMENT OFFICIEL
                            </text>
                        </svg>
                    </h2>

                    <button
                        type="button"
                        className="vi-play"
                        onClick={handlePlay}
                        aria-label="Lire la vidéo"
                    >
                        <svg
                            className="vi-play-icon"
                            viewBox="0 0 100 100"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <defs>
                                <linearGradient id="vi-play-grad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#4ECAFB" />
                                    <stop offset="100%" stopColor="#7F64FB" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M34.5 26 L34.5 74 L76.5 50 Z"
                                fill="none"
                                stroke="url(#vi-play-grad)"
                                strokeWidth="2.8"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    <div className="vi-frame">
                        <div className="vi-media">
                            {/* Couche image */}
                            <div className={`vi-image-layer${playing && loaded ? ' is-hidden' : ''}`}>
                                <img
                                    className="vi-image"
                                    src={MikeVideoMarketing}
                                    alt="Mike – vidéo de lancement NextÉclat"
                                    decoding="async"
                                />
                            </div>

                            {/* Couche vidéo : l'iframe n'existe qu'après le clic */}
                            {playing && !failed && (
                                <div className={`vi-video-layer${loaded ? ' is-visible' : ''}`}>
                                    <iframe
                                        key={videoId}
                                        className="vi-iframe"
                                        src={embedUrl}
                                        title="Vidéo de lancement NextÉclat"
                                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                                        allowFullScreen
                                        onLoad={() => setLoaded(true)}
                                    />
                                </div>
                            )}

                            {/* Chargement */}
                            {playing && !loaded && !failed && (
                                <div className="vi-loader" role="status" aria-live="polite">
                                    <span className="vi-spinner" />
                                    <span className="vi-sr-only">Chargement de la vidéo…</span>
                                </div>
                            )}

                            {/* Repli */}
                            {playing && failed && (
                                <div className="vi-fallback" role="alert">
                                    <p>La vidéo n'a pas pu être chargée.</p>
                                    <a href={watchUrl} target="_blank" rel="noopener noreferrer">
                                        Ouvrir sur YouTube
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoIntro;