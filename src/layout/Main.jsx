import { Accordian } from "../components/pages/Accordian/Accordian"
import { Hero } from "../components/pages/hero/hero"
import { Intelisence } from "../components/pages/intelisence/Intelisence"
import { Kdme } from "../components/pages/KDME/Kdme"
import { Sliders } from "../components/pages/sliders/sliders"


export const Main = () => {
  return (
   <>
    <Hero />
    <Sliders />
    <Kdme />
      <Intelisence />
      <Accordian/>
    </>
  )
}
