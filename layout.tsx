import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'NineControl — Ninebot Utility',description:'Bluetooth dashboard and firmware workflow for compatible Ninebot scooters'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
