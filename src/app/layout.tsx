import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Frontend Mentor | Four card feature section',
    description:
        'An app created by Elizabeth Parnell for the Frontend Mentor challenge: Four card feature section.',
    icons: {
        icon: '/images/favicon-32x32.png',
        apple: '/images/favicon-32x32.png',
        other: [
            {
                rel: 'icon',
                url: '/images/favicon-32x32.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${poppins.variable}`}>{children}</body>
        </html>
    );
}
