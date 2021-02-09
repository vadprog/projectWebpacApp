import {Left} from "./Left/Left";
import {Center} from "./Center/Center";

export function Content() {
    return (`
        <div id="content">
            ${Left()}
            ${Center()}
        </div>
    `);
}
