import Header from './Header.jsx'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow w-full max-w-[768px] mx-auto px-6 pt-[100px] pb-6">
        {children}
      </main>
    </div>
  )
}

export default Layout
