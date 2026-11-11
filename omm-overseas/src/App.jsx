import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer, ToTop } from './sections'
import { HomePage, AboutPage, CountryPage, InfoPage, GalleryPage, VideosPage, ContactPage, NotFound } from './pages'
import { countries, pages } from './content'
import Admin from './Admin'

function ScrollReset() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  if (useLocation().pathname.startsWith('/admin')) return <Admin />
  return (
    <>
      <ScrollReset />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {Object.keys(countries).map((slug) => <Route key={slug} path={`/${slug}`} element={<CountryPage slug={slug} />} />)}
        {Object.keys(pages).map((slug) => <Route key={slug} path={`/${slug}`} element={<InfoPage slug={slug} />} />)}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/video-testimonials" element={<VideosPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToTop />
    </>
  )
}
