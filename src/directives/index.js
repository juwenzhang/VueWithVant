import directiveFocus from "./modules/focus.js"
import directiveUnit from "./modules/unit.js"
import directiveFormatTime from "./modules/formatTime.js"

export default function useDirective(app) {
    directiveFocus(app)
    directiveUnit(app)
    directiveFormatTime(app)
}