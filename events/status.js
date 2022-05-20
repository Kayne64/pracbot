module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        setInterval(() => {
            const st = [
                "Over [Server Name]",
                "Toy Store 3",
                "Over [Member Count]"
            ]
            client.user.setPresence({ activities: [{ name: st[Math.floor(Math.random() * st.length)], type: "WATCHING"}], status: 'dnd'})
        }, 2500);
    }
}