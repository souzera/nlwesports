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
            perView: 6,
            spacing: 1,
        },vertical:false
    })

    const games = data
    console.log(games)

    return (
        <div ref={ref} className="keen-slide">
            {games.map((game, index) => {
                const classNameTxt = `keen-slider__slide number-slide${index}`
                return (
                    <div className={classNameTxt}>
                        <GameBanner
                            key={game.id}
                            id={game.id}
                            bannerUrl={game.bannerUrl}
                            tittle={game.title}
                            adsCount={game._count.ads} />
                    </div>
                )
            })}
        </div>
    )


}