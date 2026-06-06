const CONFIG = {
    profile: {
        name: "Vương Vĩnh Khang",
        nickname: "@khang0811",
        bio: "Developer • Bot Maker • ZuraMC",   // dòng giới thiệu ngắn (để "" nếu không muốn hiện)
        status: "online",                          // online | idle | dnd | offline
        verified: true                             // hiện tick xanh cạnh tên
    },

    // Tiêu đề tab động: thêm/bớt tab tuỳ thích, hệ thống tự vẽ.
    // Mỗi link có thể thêm "icon" (facebook|discord|messenger|youtube|tiktok|instagram|github|link)
    // và "desc" (mô tả phụ nhỏ bên dưới). Nếu bỏ trống, hệ thống tự đoán icon theo tiêu đề.
    tabs: [
        {
            id: "personal",
            title: "Cá nhân",
            links: [
                { title: "Facebook", url: "https://www.facebook.com/vinh.khang.vuong.766136", icon: "facebook" },
                { title: "Discord", url: "https://discord.com/users/1061202628572364840", icon: "discord" },
            ],
            showSpecial: true // Tab này sẽ hiện thêm Email và Zalo QR
        },
        {
            id: "community",
            title: "Cộng đồng",
            links: [
                { title: "My team on Discord", url: "https://discord.gg/vrAFkX5K", icon: "discord" },
                { title: "My team on Facebook", url: "https://m.me/j/Aba05BnAOU6J1YlG/", icon: "messenger" },
                { title: "ZuraMC on Facebook", url: "https://m.me/j/AbalTr9OvjOoN7-j/", icon: "messenger" },
                { title: "ZuraMC on Discord", url: "https://discord.gg/Y9F87pDgCz", icon: "discord" }
            ]
        },
        {
            id: "bots",
            title: "Dự án Bot",
            links: [
                { title: "My Discord bot", url: "https://discord.com/oauth2/authorize?client_id=1455797970363617440&permissions=8&integration_type=0&scope=bot", icon: "discord", desc: "Mời bot vào server của bạn" }
            ]
        }
    ],
    email: "vuongvinhkhang98@gmail.com"
};
