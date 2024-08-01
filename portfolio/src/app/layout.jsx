import { Inter } from "next/font/google";
import InstagramIcon from "./components/icons/InstagramIcon";
import "./globals.css";
import photo from "../../public/Imagenes/PhotoOfPresentation.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons:{
    icon:'/favicon.ico?v=4"]',
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div> {children} </div>
      </body>
    </html>
  );
}