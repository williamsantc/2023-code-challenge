function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) {
        return "";
    }

    let dictT = new Map();
    for (let i = 0; i < t.length; i++) {
        let count = dictT.get(t[i]) || 0;
        dictT.set(t[i], count + 1);
    }

    let required = dictT.size;

    let l = 0, r = 0;

    let formed = 0;
    let windowCounts = new Map();

    let ans = Number.MAX_SAFE_INTEGER, left = 0, right = 0;

    while (r < s.length) {
        let character = s[r];
        let count = windowCounts.get(character) || 0;
        windowCounts.set(character, count + 1);

        if (dictT.has(character) && windowCounts.get(character) === dictT.get(character)) {
            formed++;
        }

        while (l <= r && formed === required) {
            character = s[l];

            if (r - l + 1 < ans) {
                ans = r - l + 1;
                left = l;
                right = r;
            }

            windowCounts.set(character, windowCounts.get(character) - 1);
            if (dictT.has(character) && windowCounts.get(character) < dictT.get(character)) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return ans === Number.MAX_SAFE_INTEGER ? "" : s.substring(left, right + 1);
}


module.exports = minWindow
