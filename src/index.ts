import { Converter } from "showdown";
import Content from "./content";
(async () => {
    const data = await Content;
    const converter = new Converter();
    const target = {
        head: document.getElementById("head") as HTMLElement,
        content: document.getElementById("content") as HTMLElement
    };
    (window as any).ContentLoader = data.map(val => {
        let res = ({
            name: val.name,
            list: [],
            load: async function () {
                res.list = (await val.data()).map(((_: { name: string; content: string }): { name: string; print: () => void } => ({
                    name: _.name, print: () => {
                        target.head.innerHTML = _.name;
                        target.content.innerHTML = converter.makeHtml(_.content);
                    }
                })))

            }
        });
        return res;
    });
})()