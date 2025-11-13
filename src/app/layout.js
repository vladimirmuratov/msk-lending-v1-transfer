import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';
import { Metrika } from '@/components/Metrika';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://transfer.mskdoctor.ru'),
    title: 'Медицинская Сервисная Компания. Перевод пациентов в московские клиники из регионов и СНГ. 8 (499) 719-81-00, 24/7',
    description: 'Организуем перевод больных из больниц России и стран СНГ в клиники Москвы. Профессиональный подход, помощь в выборе медучреждения, оформление, транспортировка и сопровождение.',
    keywords: ['перевод из одной больницы в другую'],
    other: {
        ['yandex-verification']: '7d396e0f3ecc629e',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Перевод пациента в другую больницу — быстро и безопасно. 8 (499) 719-81-00, 24/7',
        description: 'Организуем перевод больных из больниц России и стран СНГ в клиники Москвы. Профессиональный подход, помощь в выборе медучреждения, оформление, транспортировка и сопровождение.',
        images: ['/images/banner2.webp'],
        url: 'https://transfer.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
