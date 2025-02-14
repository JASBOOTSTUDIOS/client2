import type { Metadata } from "next";
import "./index.css"

export const metadata: Metadata = {
  title: "Music Studio",
  description: "Generated by create Jasbootstudios app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script> */}
      <body>
        {children}
      </body>
    </html>
  );
}
