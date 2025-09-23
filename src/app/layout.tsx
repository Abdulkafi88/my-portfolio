import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulkafinirig.com"),
  title: "Abdulkafi Nirig | Software Engineer",
  description:
    "Computer Science student at the University of Washington and aspiring Software Engineer. Experienced in Python, Java, JavaScript, React, Node.js, and cloud platforms. Passionate about building scalable full stack applications, exploring machine learning and AI, and creating technology that drives positive impact.",
  keywords: [
    "Abdulkafi Nirig",
    "Software Engineer",
    "Computer Science",
    "Web Development",
    "Backend",
    "Full-stack",
    "Frontend Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Machine Learning",
    "AI",
    "Cloud Computing",
    "Tech Innovation",
    "Community Building",
    "Seattle Developer",
  ],
  authors: [{ name: "Abdulkafi Nirig" }],
  creator: "Abdulkafi Nirig",
  publisher: "Abdulkafi Nirig",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/img/me.jpg",
    shortcut: "/img/me.jpg",
    apple: "/img/me.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulkafinirig.com",
    siteName: "Abdulkafi Nirig Portfolio",
    title: "Abdulkafi Nirig | Software Engineer",
    description:
      "Computer Science student at the University of Washington and aspiring Software Engineer. Experienced in Python, Java, JavaScript, React, Node.js, and cloud platforms. Passionate about building scalable full stack applications, exploring machine learning and AI, and creating technology that drives positive impact.",
    images: [
      {
        url: "https://abdulkafinirig.com/img/me.jpg",
        width: 1200,
        height: 630,
        alt: "Abdulkafi Nirig | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulkafi Nirig | Software Engineer",
    description:
      "Computer Science student at the University of Washington and aspiring Software Engineer. Experienced in Python, Java, JavaScript, React, Node.js, and cloud platforms.",
    creator: "@AbdulkafiNirig",
    images: ["https://abdulkafinirig.com/img/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Abdulkafi Nirig",
  },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdulkafi Nirig",
      url: "https://abdulkafinirig.com",
      image: "https://abdulkafinirig.com/img/me.jpg",
      sameAs: [
        "https://github.com/Abdulkafi88",
        "https://x.com/AbdulkafiNirig",
      ],
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Personal Projects",
      },
    }),
  }}
/>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <main className="font-sans border-b border-l border-r max-w-3xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
