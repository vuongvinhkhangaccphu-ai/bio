const CONFIG = {
    profile: {
        name: "Vương Vĩnh Khang",
        nickname: "@khang0811",
    },
    // Hệ thống sẽ tự vẽ số lượng Tab dựa trên danh sách này
    tabs: [
        {
            id: "personal",
            title: "Cá nhân",
            links: [
                { title: "Facebook", url: "https://www.facebook.com/vinh.khang.vuong.766136" },
                { title: "Discord", url: "https://discord.com/users/1061202628572364840" },
            ],
            showSpecial: true // Tab này sẽ hiện thêm Email và Zalo QR
        },
        {
            id: "community",
            title: "Cộng đồng",
            links: [
                { title: "My team on Discord", url: "https://discord.gg/vrAFkX5K" },
                { title: "My team on Facebook", url: "https://m.me/j/Aba05BnAOU6J1YlG/" },
                { title: "ZuraMC on Facebook", url: "https://m.me/j/AbalTr9OvjOoN7-j/" },
                { title: "ZuraMC on Discord", url: "https://discord.gg/Y9F87pDgCz" }
            ]
        },
        {
            id: "bots",
            title: "Dự án Bot",
            links: [
                { title: "My Discord bot", url: "https://discord.com/oauth2/authorize?client_id=1455797970363617440&permissions=8&integration_type=0&scope=bot" }
            ]
        }
    ],
    email: "vuongvinhkhang98@gmail.com"
};
