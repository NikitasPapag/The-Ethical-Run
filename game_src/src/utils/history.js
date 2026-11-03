export function ensureBackTrap() {
    const state = window.history.state;
    if (state?.ethicalRunBackTrap === true) return;
    window.history.pushState({ ethicalRunBackTrap: true }, "");
}
