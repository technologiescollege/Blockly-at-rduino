//blocks/block_colors.js
Blockly.Blocks.icn.HUE = '#FF8C00';

//blocks/arduino_resume.js
$('head').append($('<script>').attr('type', 'text/javascript').attr('src', "blocks/icn/icn.js"));

//generators/arduino_resume.js
$('head').append($('<script>').attr('type', 'text/javascript').attr('src', "generators/arduino/icn.js"));

//lang/blocks/en.js
//icn
Blockly.Msg.CAT_ICN = "ICN";

//toolbox/toolbox_arduino_all.xml
<category name="CAT_ICN" colour="#FF8C00">
		<block type="tb6612_setup"></block>
		<block type="tb6612_controller">
			<value name="MOTORA">
				<shadow type="math_number">
					<field name="NUM">128</field>
				</shadow>
			</value>
			<value name="MOTORB">
				<shadow type="math_number">
					<field name="NUM">-60</field>
				</shadow>
			</value>
		</block>
		<block type="hcsr04">
			<value name="hcsr04_pin">
				<shadow type="math_number">
					<field name="NUM">12</field>
				</shadow>
			</value>
		</block>
		<block type="ds18b20_search"></block>
		<block type="ds18b20_temp"></block>
	</category>

//blocks/blocks_typing.js
//------------------icn.js-----------------------------------
Blockly.Blocks.hcsr04.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.ds18b20_search.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.ds18b20_temp.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

