import React from "react"
import ReactMde from "react-mde";
// const ReactMde = R.default
import Showdown from "showdown"
import "react-mde/lib/styles/css/react-mde-all.css";
// import CodeBlockPreviewPlugin from "react-mde-code-block-preview";

function Editor({ tempNoteText, updateTempNoteText }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    // const plugins = [CodeBlockPreviewPlugin];
    return (
        <section className="pane editor">
            <ReactMde
                value={tempNoteText}
                onChange={updateTempNoteText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
export default Editor