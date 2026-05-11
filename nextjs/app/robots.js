export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://portfolio-nextjs-peach-ten.vercel.app/sitemap.xml',
    }
}
