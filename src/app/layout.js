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
    title: 'Медицинская Сервисная Компания. Перевод пациента в другую больницу. 8 (499) 719-81-00, 24/7',
    description: 'Организуем перевод пациента в другую больницу с учетом диагноза, состояния и потребностей — быстро, безопасно, с полным медицинским сопровождением.',
    keywords: ['перевод из одной больницы в другую'],
    other: {
        ['yandex-verification']: '7d396e0f3ecc629e',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Перевод пациента в другую больницу. 8 (499) 719-81-00, 24/7',
        description: 'Организуем перевод пациента в другую больницу с учетом диагноза, состояния и потребностей — быстро, безопасно, с полным медицинским сопровождением.',
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
