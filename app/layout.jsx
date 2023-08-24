import '@styles/globals.css';

export const metadata = {
  title: "PetsPew",
  description: 'Hello, i am cat project'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient ' />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
