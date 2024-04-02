import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

import theme from '@/app/theme';

import "./globals.css";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "pokemon App",
  description: "Choose your pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#F8F1F1' }}>
      <AppRouterCacheProvider>
         <ThemeProvider theme={theme}>
          <Container fixed  sx={{  mt: 4 }}>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
