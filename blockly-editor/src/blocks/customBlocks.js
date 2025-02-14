import Blockly from "blockly";

// Set Variable Block
Blockly.Blocks["set_variable"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set variable")
      .appendField(new Blockly.FieldTextInput("x"), "VAR")
      .appendField("to")
      .appendField(new Blockly.FieldNumber(0), "VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets a variable to a specific value");
  },
};

Blockly.JavaScript["set_variable"] = function (block) {
  const variable = block.getFieldValue("VAR");
  const value = block.getFieldValue("VALUE");
  return `var ${variable} = ${value};\n`;
};

// Arithmetic Operations Block
Blockly.Blocks["arithmetic_operations"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Calculate")
      .appendField(new Blockly.FieldDropdown([
        ["+", "ADD"],
        ["-", "SUBTRACT"],
        ["*", "MULTIPLY"],
        ["/", "DIVIDE"]
      ]), "OPERATOR");
    this.appendValueInput("NUM1").setCheck("Number");
    this.appendValueInput("NUM2").setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Performs arithmetic operations");
  },
};

Blockly.JavaScript["arithmetic_operations"] = function (block) {
  const operator = block.getFieldValue("OPERATOR");
  const num1 = Blockly.JavaScript.valueToCode(block, "NUM1", Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const num2 = Blockly.JavaScript.valueToCode(block, "NUM2", Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`(${num1} ${operator} ${num2})`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Print Output Block
Blockly.Blocks["print_output"] = {
  init: function () {
    this.appendValueInput("TEXT").setCheck(null).appendField("Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Prints output to the console");
  },
};

Blockly.JavaScript["print_output"] = function (block) {
  const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `console.log(${text});\n`;
};
