[{"content":"## Welcome to argnote\n\n\n\n1.  This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.\n\n2.  Click on any text cell (including this one) to edit it\n\n3.  The code in each code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any following cell!\n4. You can show any React component, string, number, or anything else by calling the show function. This is a function built into this environment. Call show multiple times to show multiple values.\n5.  Re-order or delete cells using the buttons on the top right .\n6. Add new cells by hovering on the divider between each cell.\n\nAll of your changes get saved to the file you opened argnote with. So if you ran `\"npx argnote serve test.js\"`, all of the text and code you write will be saved to the test.js file.\n","type":"text","id":"9dtzu"},{"content":"import { useState } from 'react';\nimport 'bulma/css/bulma.css';\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0);\n\n  return (\n    <div style={{ textAlign: 'center', padding: 10 }}>\n      <h1 className=\"title\">{counter}</h1>\n\n      <button\n        className=\"button is-primary\"\n        onClick={() => setCounter(counter + 1)}\n      >\n        Click Me!\n      </button>\n    </div>\n  );\n};\n\n// use 'show()' to display any variable or component on the screen\n\nshow(<Counter />);","type":"code","id":"9fufc"}]