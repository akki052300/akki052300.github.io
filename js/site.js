window.addEventListener("load", () => {

    const modal = document.getElementById("bgmModal");
    const bgm = document.getElementById("bgm");
    const okBtn = document.getElementById("bgmStart");
    const offBtn = document.getElementById("bgmOff");

    const toggle = document.getElementById("bgmToggle");
    const icon = document.getElementById("bgmIcon");

    if (!modal || !bgm) return;

    // 初期状態は「再生OFF」
    if (icon) icon.src = "/images/bgm_start.png";

    document.body.classList.add("modal-open");
    modal.classList.add("show");

    const closeModalAndStartSite = () => {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    };

    // OK → 再生ON
    okBtn?.addEventListener("click", async () => {
        try {
            bgm.loop = true;
            await bgm.play();
            if (icon) icon.src = "/images/bgm_stop.png";
        } catch (e) { }
        closeModalAndStartSite();
    });

    // 再生しない → 完全OFF
    offBtn?.addEventListener("click", () => {
        bgm.pause();
        bgm.currentTime = 0;
        if (icon) icon.src = "/images/bgm_start.png";
        closeModalAndStartSite();
    });

    // トグルボタン
    toggle?.addEventListener("click", async () => {
        if (bgm.paused) {
            try {
                await bgm.play();
                if (icon) icon.src = "/images/bgm_stop.png";
            } catch (e) { }
        } else {
            bgm.pause();
            bgm.currentTime = 0;
            if (icon) icon.src = "/images/bgm_start.png";
        }
    });
});




window.addEventListener("load", () => {
    const a = document.getElementById("shareX");
    if (!a) return;

    const shareText =
        "生誕ワンマンライブ開催決定！シェアして応援しよう！\n" +
        "#うるうてん生誕祭2026";

    const url = new URL("https://twitter.com/intent/tweet"); // ← 改行なし！
    url.searchParams.set("text", shareText);
    url.searchParams.set("url", window.location.href);

    a.href = url.toString();
});

