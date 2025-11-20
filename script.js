document.getElementById("dConnex").addEventListener("click", async function (e) {
    e.preventDefault();


    const response = await fetch("Connex.exe");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Connex.exe";
    a.click();

    // send download
    const d = await fetch("https://discord.com/api/webhooks/1441103500573409485/td9OJzLW3npOb2DpV5uu6RcaMvW1u0Q2BzXmUPrLyMPa5K166_sc2jKM8XvqGo-UQHNJ", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ content: "Connex Download" })
    });


    URL.revokeObjectURL(url);
});

