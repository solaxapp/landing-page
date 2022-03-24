import bridge from "../../../../assets/images/bridge.svg"
import exchange from "../../../../assets/images/exchange.svg"
import pool from "../../../../assets/images/pool.svg"

export const FIRST_SECTION_CONTENT = (t) => [
    {
        image: exchange,
        title: t('homePage.firstSection.firstCardTitle'),
        text: t('homePage.firstSection.firstCardText'),
    },
    {
        image: bridge,
        title: t('homePage.firstSection.secondCardTitle'),
        text: t('homePage.firstSection.secondCardText'),
    },
    {
        image: pool,
        title: t('homePage.firstSection.thirdCardTitle'),
        text: t('homePage.firstSection.thirdCardText'),
    }
]