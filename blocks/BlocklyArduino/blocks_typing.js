//---------------------------------logic--------------------------------------------

	Blockly.Blocks.logic_compare.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_operation.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_negate.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_boolean.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_null.getBlockType = function() {
		return Blockly.Types.NULL;
	};
	Blockly.Blocks.logic_ternary.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.controls_switch.getVars = function() {
		return [this.getFieldValue('SWVAR')];
	};
	Blockly.Blocks.controls_switch.getVarType = function() {
		return this.inputList[1].connection.targetBlock().getBlockType();
	};
	
//---------------------------------loops--------------------------------------------

	Blockly.Blocks.controls_for.getVarType = function() {
		return this.inputList[1].connection.targetBlock().getBlockType();
	};
	
//---------------------------------array--------------------------------------------

Blockly.Blocks.array_create_with.getBlockType = function() {
	// define an new blocktype for each array
	var blockType = new Blockly.Type({
		  typeId: 'Array',
		  typeMsgName: 'ARD_TYPE_ARRAY',
		  compatibleTypes: []
		});
	// add 2 properties 
	// the size
	blockType.arraySize = this.itemCount_;
	// type of elements
	blockType.arrayType = Blockly.Types.UNDEF;
	var j = 1;
	while ( j <= this.itemCount_) {
		// the first input with a block determine the type of the elements  
		if (this.inputList[j].connection && this.inputList[j].connection.targetBlock()) {
			blockType.arrayType = this.inputList[j].connection.targetBlock().getBlockType();
			j = this.itemCount_ + 1;
		} else {
			j++;
		}
	}
	return blockType;
};

Blockly.Blocks.array_getIndex.getBlockType = function() {
	if (this.inputList[1].connection && this.inputList[1].connection.targetBlock()) {
		var blockType = this.inputList[1].connection.targetBlock().getBlockType();
		if (blockType instanceof Blockly.Type) {
			return blockType.arrayType;
		} else {
			// in case the input is a variable, we need to identify it
			// otherwise we just get the type of this variable
			// and not the type of the elements
			// so we set the type to Blockly.Types.ARRAY
			return [Blockly.Types.ARRAY, blockType[1]];
		}
	} else {
		return Blockly.Types.UNDEF;
	}
};

Blockly.Blocks.array_declare.getBlockType = function() {
	var numString = this.getFieldValue('NUM');
	return Blockly.Types.identifyNumber(numString);
};

Blockly.Blocks.creer_tableau.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

Blockly.Blocks.fixer_tableau.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------maths--------------------------------------------

Blockly.Blocks.math_number.getBlockType = function() {
    var numString = this.getFieldValue('NUM');
    return Blockly.Types.identifyNumber(numString);
};
Blockly.Blocks.inout_angle_maths.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_arithmetic.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_interval.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_single.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_trig.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_constant.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_number_property.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.math_change.getVarType = function() {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
};
Blockly.Blocks.math_round.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_modulo.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_int.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_float.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

//---------------------------------text--------------------------------------------

Blockly.Blocks.text.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_char.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_join.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_append.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_length.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.text_isEmpty.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};