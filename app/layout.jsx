import '@styles/globals.css';
import { ClientRootLayout } from './components/ClientLayout/ClientLayout';

export const metadata = {
  title: "PetsPaw",
  description: 'Hello, I am a cat API project'
}

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}