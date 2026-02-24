const LINKEDIN_PROFILE_ID = 'selvakumar-arumugam2002';
const LINKEDIN_WEB_URL = `https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`;
const LINKEDIN_DEEP_LINK = `linkedin://in/${LINKEDIN_PROFILE_ID}`;

/**
 * Detects if the user is on a mobile device.
 */
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

/**
 * Opens the LinkedIn profile.
 * - Mobile: attempts the app deep link first, falls back to web URL (same tab).
 * - Desktop: opens the web URL in a new tab.
 */
export function openLinkedIn(e) {
    if (e) e.preventDefault();

    if (isMobileDevice()) {
        // Try deep link — if app isn't installed the timeout fires the fallback
        const fallbackTimer = setTimeout(() => {
            window.location.href = LINKEDIN_WEB_URL;
        }, 500);

        window.addEventListener(
            'blur',
            () => clearTimeout(fallbackTimer),
            { once: true }
        );

        window.location.href = LINKEDIN_DEEP_LINK;
    } else {
        window.open(LINKEDIN_WEB_URL, '_blank', 'noopener,noreferrer');
    }
}
