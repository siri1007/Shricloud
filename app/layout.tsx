



//------------------With  this {ShriCloud | VPS Hosting}  -------------use below code


// import type { Metadata } from "next";
// import "@/public/scss/main.scss";
// import InitAnimations from "@/components/layout/InitAnimations";


// export const metadata: Metadata = {
//   metadataBase: new URL("https://shricloud.com"),

//   title: {
//     default: "ShriCloud",
//     template: "ShriCloud | %s",
//   },

//   description:
//     "Shricloud provides reliable cloud hosting, WordPress hosting, VPS hosting and domain services.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//         <InitAnimations />
//       </body>
//     </html>
//   );
// }








import type { Metadata } from "next";
import "@/public/scss/main.scss";
import InitAnimations from "@/components/layout/InitAnimations";
import WhatsAppChat from "@/components/Whatsapp/WhatsAppChat";
// import TermsOfService from "@/components/TermsOfService/TermsOfService";

export const metadata: Metadata = {
  metadataBase: new URL("https://shricloud.com"),

  title: "ShriCloud",

  description:
    "Shricloud provides reliable cloud hosting, WordPress hosting, VPS hosting and domain services.",

     icons: {
    icon: "/favicon.ico",
  },
  
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

            <WhatsAppChat />
        <InitAnimations />
      </body>
    </html>
  );
}



//------------------Without this { VPS Hosting}  -------------use above code