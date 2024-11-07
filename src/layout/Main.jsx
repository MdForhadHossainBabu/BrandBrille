import { Accordian } from "../components/pages/Accordian/Accordian"
import { ContactPage } from "../components/pages/Contact/ContactPage"
import { Footer } from "../components/pages/Footer/Footer"
import { Hero } from "../components/pages/hero/hero"
import { Intelisence } from "../components/pages/intelisence/Intelisence"
import { Kdme } from "../components/pages/KDME/Kdme"
import { MarqueePage } from "../components/pages/MarqueePages/MarqueePage"
import { Sliders } from "../components/pages/sliders/sliders"
import { VideoMarquee } from "../components/pages/VideoMarquee/VideoMarquee"


export const Main = () => {
  return (
   <div className="container mx-auto font-graphik">
    <Hero />
      <Sliders />
      <VideoMarquee/>
    <Kdme />
      <Intelisence />
      <Accordian />
      <MarqueePage />
      <ContactPage />
      <Footer/>
    </div>
  )
}
