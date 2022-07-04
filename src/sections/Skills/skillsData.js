import HtmlLogo from "../../images/skills/html.png"
import CssLogo from "../../images/skills/css-3.png"
import SassLogo from "../../images/skills/sass.png"
import JsLogo from "../../images/skills/js.png"
import ReactLogo from "../../images/skills/react.png"
import GitLogo from "../../images/skills/merge.png"
import GithubLogo from "../../images/skills/github.png"
import FigmaLogo from "../../images/skills/figma.png"

const skills = [
    {
        name: "HTML",
        logo: HtmlLogo,
        adds: ""
    },
    {
        name: "CSS",
        logo: CssLogo,
        adds: "Material UI"
    },
    {
        name: "SASS",
        logo: SassLogo,
        adds: ""
    },
    {
        name: "JavaScript",
        logo: JsLogo,
        adds: ""
    },
    {
        name: "ReactJs",
        logo: ReactLogo,
        adds: ""
    },
    {
        name: "Git",
        logo: GitLogo,
        adds: ""
    },
    {
        name: "GitHub",
        logo: GithubLogo,
        adds: "Github Actions"
    },

    {
        name: "Figma",
        logo: FigmaLogo,
        adds: ""
    },

]

function getSkills() {
    return skills
}
export default getSkills