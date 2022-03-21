import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import "react-colorful/dist/index.css"
import App from "./App"
import TagManager from "react-gtm-module"

const tagManagerArgs = {
    gtmId: 'GTM-TMJ862D'
}

TagManager.initialize(tagManagerArgs)


ReactDOM.render(<App />, document.getElementById("root"))
