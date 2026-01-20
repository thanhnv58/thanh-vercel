
export const siteConfig = {
    name: "My Landing Page",
    email: {
        from: "noreply@example.com",
        subjectPrefix: "[Contact Form]"
    }
};

export const mailConfig = {
    host: process.env.MAIL_HOST || "smtp.example.com",
    port: parseInt(process.env.MAIL_PORT || "587"),
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
};
