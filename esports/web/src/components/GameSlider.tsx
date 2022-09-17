import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { GameBanner } from "./GameBanner"
import { Game } from "../App"

interface Props {
    data: Game[],
}

export function GameSlider({ data }: Props) {
    
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            spacing: 4,
            perView: 6, 
        },
    })

    const games = data
    console.log(games)

    return (
        <div ref={ref} className="keen-slider ">

            {games.map((game, index) => {
                const classNameTxt = `keen-slider__slide number-slide${index+1} rounded-lg`
                return (
                    <div className={classNameTxt}>
                        <GameBanner
                            id={game.id}
                            tittle={game.title}
                            bannerUrl={game.bannerUrl}
                            adsCount={game._count.ads}/>
                    </div>
                )
            })}
        </div>
    )
}