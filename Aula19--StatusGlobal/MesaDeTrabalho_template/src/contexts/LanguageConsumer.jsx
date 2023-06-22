import { useContext } from "react";

import { LanguageContext } from "./context.js";

function LanguageConsumer({ children }) {

    return (
        <div>
            {children}
        </div>
    )

}

export default LanguageConsumer;