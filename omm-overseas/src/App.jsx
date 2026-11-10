import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header, Footer, ToTop } from './sections'
import { HomePage, AboutPage, CountryPage, InfoPage, GalleryPage, VideosPage, ContactPage, NotFound } from './pages'
import { countries, pages } from './content'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
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
