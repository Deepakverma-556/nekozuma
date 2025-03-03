import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
  title: "Nekozuma",
  description: "The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.",
  openGraph: {
    title: "Nekozuma",
    description: "The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      }
    ]
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
