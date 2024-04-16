import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RouteHandler from './routes/RouteHandler'

function App() {

  return (
    <>
      <Navbar />
      <main className="h-full">
        <RouteHandler />
      </main>
      <Footer />
    </>
  )
}

export default App
