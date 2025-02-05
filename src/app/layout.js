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
    title: 'Перевод из одной больницы в другую',
    description: 'Официальный координатор по госпитализации в Москве. 10 лет успешной работы. 20 клиник-партнеров. Оперативно. Финансовая прозрачность',
    keywords: ['перевод из одной больницы в другую'],
    other: {
        ['yandex-verification']: '7d396e0f3ecc629e',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
