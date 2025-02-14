import React, { useRef, useEffect } from "react";
import Blockly from "blockly";
import "../blocks/customBlocks"; // Import the custom blocks

function BlocklyComponent() {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useEffect(() => {
    workspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml>
          <block type="set_variable"></block>
          <block type="arithmetic_operations"></block>
          <block type="print_output"></block>
        </xml>
      `,
    });

    return () => {
      if (workspace.current) {
        workspace.current.dispose();
      }
    };
  }, []);

  return <div ref={blocklyDiv} className="w-full h-96 border-2 border-gray-400"></div>;
}

export default BlocklyComponent;
