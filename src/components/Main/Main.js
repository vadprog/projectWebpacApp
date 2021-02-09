import {Top} from "./Top/Top";
import {Content} from "./Content/Content";
import {Bottom} from "./Bottom/Bottom";

export function Main() {
    return (`
        <div id="main" class="block">
            ${Top()}
            ${Content()}
            ${Bottom()}
        </div>
    `);
}
