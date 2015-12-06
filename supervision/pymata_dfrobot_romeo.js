<script>
        $(function () {
            $("#tabs").tabs();
        });
</script>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">Digital Input</a></li>
		<li><a href="#tabs-2">Digital/PWM Output</a></li>
		<li><a href="#tabs-3">Analog Input</a></li>
		<li><a href="#tabs-4">Reports</a></li>
		<li><a href="#tabs-5">Polled Data Retrieval</a></li>
		<li><a href="#tabs-6">Servo</a></li>
		<li><a href="#tabs-7">i2c</a></li>
		<li><a href="#tabs-8">FirmataPlus Features</a></li>
		<li><a href="#tabs-9">Documentation</a></li>
	</ul>
	<div id="tabs-1">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Blockly.Msg.SV_connect</a></b></p>
		<input type="radio" name="e2" value="0" id="in2d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e2" value="1" id="out2d" onclick="clicked(this.id);">Enabled
		<b>Pin 02:</b>
		<input id="ip2" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch2" onchange="digitalLatch('2', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent2" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e3" value="0" id="in3d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e3" value="1" id="out3d" onclick="clicked(this.id);">Enabled
		<b>Pin 03:</b>
		<input id="ip3" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch4" onchange="digitalLatch('3', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent3" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e4" value="0" id="in4d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e4" value="1" id="out4d" onclick="clicked(this.id);">Enabled
		<b>Pin 04:</b>
		<input id="ip4" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch4" onchange="digitalLatch('4', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent4" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e5" value="0" id="in5d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e5" value="1" id="out5d" onclick="clicked(this.id);">Enabled
		<b>Pin 05:</b>
		<input id="ip5" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch5" onchange="digitalLatch('5', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent5" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e6" value="0" id="in6d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e6" value="1" id="out6d" onclick="clicked(this.id);">Enabled
		<b>Pin 06:</b>
		<input id="ip6" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch6" onchange="digitalLatch('6', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent6" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e7" value="0" id="in7d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e7" value="1" id="out7d" onclick="clicked(this.id);">Enabled
		<b>Pin 07:</b>
		<input id="ip7" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch7" onchange="digitalLatch('7', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent7" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e8" value="0" id="in8d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e8" value="1" id="out8d" onclick="clicked(this.id);">Enabled
		<b>Pin 08:</b>
		<input id="ip8" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch8" onchange="digitalLatch('8, (this.id)');">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent8" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e9" value="0" id="in9d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e9" value="1" id="out9" onclick="clicked(this.id);">Enabled
		<b>Pin 09:</b>
		<input id="ip9" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch9" onchange="digitalLatch('9', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent9" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e10" value="0" id="in10d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e2" value="1" id="out10d" onclick="clicked(this.id);">Enabled
		<b>Pin 10:</b>
		<input id="ip10" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch10" onchange="digitalLatch('10', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent10" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e11" value="0" id="in11d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e11" value="1" id="out11d" onclick="clicked(this.id);">Enabled
		<b>Pin 11:</b>
		<input id="ip11" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch11" onchange="digitalLatch('11', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent11" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e12" value="0" id="in12d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e12" value="1" id="out12d" onclick="clicked(this.id);">Enabled
		<b>Pin 12:</b>
		<input id="ip12" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch12" onchange="digitalLatch('12', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent12" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e13" value="0" id="in13d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e13" value="1" id="out13d" onclick="clicked(this.id);">Enabled
		<b>Pin 13:</b>
		<input id="ip13" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch13" onchange="digitalLatch('13', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent13" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e14" value="0" id="in14d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e14" value="1" id="out14d" onclick="clicked(this.id);">Enabled
		<b>Pin 14:</b>
		<input id="ip14" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch14" onchange="digitalLatch('14', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent14" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e15" value="0" id="in15d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e15" value="1" id="out15d" onclick="clicked(this.id);">Enabled
		<b>Pin 15:</b>
		<input id="ip15" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch15" onchange="digitalLatch('15', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent15" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e16" value="0" id="in16d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e16" value="1" id="out16d" onclick="clicked(this.id);">Enabled
		<b>Pin 16:</b>
		<input id="ip16" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch16" onchange="digitalLatch('16', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent16" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e17" value="0" id="in17d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e17" value="1" id="out17d" onclick="clicked(this.id);">Enabled
		<b>Pin 17:</b>
		<input id="ip17" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch17" onchange="digitalLatch('17', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent17" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e18" value="0" id="in18d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e18" value="1" id="out18d" onclick="clicked(this.id);">Enabled
		<b>Pin 18:</b>
		<input id="ip18" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch18" onchange="digitalLatch('18', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent18" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="e19" value="0" id="in19d" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="e19" value="1" id="out19d" onclick="clicked(this.id);">Enabled
		<b>Pin 19:</b>
		<input id="ip19" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 20px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Data Latch</b>
		<select id="dlatch19" onchange="digitalLatch('19', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">Latch High</option>
			<option value="3">Latch Low</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="dlevent19" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

	</div>
	<div id="tabs-2">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<b>Pin 03:</b>
		<input type="radio" name="p3" value="0" id="p3low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p3" value="1" id="p3high" onclick="clicked(this.id);">High
		<input type="radio" name="p3" value="2" onclick="clicked(this.id);" id="pwm3">PWM
		<input type="number" name="p3pwm" id="v3" min="0" max="255" step="1" value="0"
			   oninput="pwmChange(this.id);">
		<br>
		<b>Pin 04:</b>
		<input type="radio" name="p4" value="3" id="p4low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p4" value="4" id="p4high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 05:</b>
		<input type="radio" name="p5" value="5" id="p5low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p5" value="6" id="p5high" onclick="clicked(this.id);">High
		<input type="radio" name="p5" value="7" id="pwm5" onclick="clicked(this.id);">PWM
		<input type="number" name="p5pwm" id="v5" min="0" max="255" step="1" value="0"
			   oninput="pwmChange(this.id);">
		<br>
		<b>Pin 06:</b>
		<input type="radio" name="p6" value="0" id="p6low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p6" value="1" id="p6high" onclick="clicked(this.id);">High
		<input type="radio" name="p6" value="2" id="pwm6" onclick="clicked(this.id);">PWM
		<input type="number" name="p6pwm" id="v6" min="0" max="255" step="1" value="0"
			   oninput="pwmChange(this.id);">
		<br>
		<b>Pin 07:</b>
		<input type="radio" name="p7" value="0" id="p7low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p7" value="1" id="p7high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 08:</b>
		<input type="radio" name="pa" value="0" id="p8low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p8" value="1" id="p8high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 09:</b>
		<input type="radio" name="p9" value="0" id="p9low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p9" value="1" id="p9high" onclick="clicked(this.id);">High
		<input type="radio" name="p9" value="2" id="pwm9" onclick="clicked(this.id);">PWM
		<input type="number" name="p9pwm" id="v9" min="0" max="255" step="1" value="0"
			   oninput="pwmChange(this.id);">
		<br>
		<b>Pin 10:</b>
		<input type="radio" name="p10" value="0" id="p10low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p10" value="1" id="p10high" onclick="clicked(this.id);">High
		<input type="radio" name="p10" value="2" id="pwm10" onclick="clicked(this.id);">PWM
		<input type="number" name="p10pwm" id="v10" min="0" max="255" step="1" value="0"
			   oninput="pwmChange(this.id);">
		<br>
		<b>Pin 11:</b>
		<input type="radio" name="p11" value="0" id="p11low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p11" value="1" id="p11high" onclick="clicked(this.id);">High
		<input type="radio" name="p11" value="2" id="pwm11" onclick="clicked(this.id);">PWM
		<input type="number" name="p11pwm" id="v11" min="0" max="255" step="1" value="0"
			   oninput="pwmChange(this.id);">
		<br>
		<b>Pin 12:</b>
		<input type="radio" name="p12" value="0" id="p12low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p12" value="1" id="p12high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 13:</b>
		<input type="radio" name="p13" value="0" id="p13low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p13" value="1" id="p13high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 14:</b>
		<input type="radio" name="p14" value="0" id="p14low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p14" value="1" id="p14high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 15:</b>
		<input type="radio" name="p15" value="0" id="p15low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p15" value="1" id="p15high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 16:</b>
		<input type="radio" name="p16" value="0" id="p16low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p16" value="1" id="p16high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 17:</b>
		<input type="radio" name="p17" value="0" id="p17low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p17" value="1" id="p17high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 18:</b>
		<input type="radio" name="p18" value="0" id="p18low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p18" value="1" id="p18high" onclick="clicked(this.id);">High
		<br>
		<b>Pin 19:</b>
		<input type="radio" name="p19" value="0" id="p196low" onclick="clicked(this.id);" checked>Low
		<input type="radio" name="p19" value="1" id="p19high" onclick="clicked(this.id);">High
		<br>
	</div>
	<div id="tabs-3">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<input type="radio" name="a0" value="0" id="in0a" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="a0" value="1" id="out0a" onclick="clicked(this.id);">Enabled
		<b>Pin A0:</b>
		<input id="ia0" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;&nbsp
		<b>Latch Threshold</b>
		<input id="a1thr0" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;
		<b>Data Latch:</b>
		<select id="alatch0" onchange="analogLatch('0', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">==</option>
			<option value="3"><</option>
			<option value="4"><=</option>
			<option value="5">></option>
			<option value="6">>=</option>
		</select>
		&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="alevent0" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

		<input type="radio" name="a1" value="0" id="in1a" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="a1" value="1" id="out1a" onclick="clicked(this.id);">Enabled
		<b>Pin A1:</b>
		<input id="ia1" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>


		&nbsp;&nbsp
		<b>Latch Threshold</b>
		<input id="a1thr1" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;
		<b>Data Latch:</b>

		<select id="alatch1" onchange="analogLatch('1', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">==</option>
			<option value="3"><</option>
			<option value="4"><=</option>
			<option value="5">></option>
			<option value="6">>=</option>
		</select>
		&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="alevent1" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>

		<br>
		<input type="radio" name="a2" value="0" id="in2a" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="a2" value="1" id="out2a" onclick="clicked(this.id);">Enabled
		<b>Pin A2:</b>
		<input id="ia2" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>

		&nbsp;&nbsp
		<b>Latch Threshold</b>
		<input id="a1thr2" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;
		<b>Data Latch:</b>
		<select id="alatch2" onchange="analogLatch('2', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">==</option>
			<option value="3"><</option>
			<option value="4"><=</option>
			<option value="5">></option>
			<option value="6">>=</option>
		</select>
		&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="alevent2" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>

		<br>

		<input type="radio" name="a1" value="0" id="in1a" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="a1" value="1" id="out1a" onclick="clicked(this.id);">Enabled
		<b>Pin A3:</b>
		<input id="ia3" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>

		&nbsp;&nbsp
		<b>Latch Threshold</b>
		<input id="a1thr3" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;
		<b>Data Latch:</b>
		<select id="alatch3" onchange="analogLatch('3', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">==</option>
			<option value="3"><</option>
			<option value="4"><=</option>
			<option value="5">></option>
			<option value="6">>=</option>
		</select>
		&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="alevent3" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>


		<input type="radio" name="a4" value="0" id="in4a" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="a4" value="1" id="out4a" onclick="clicked(this.id);">Enabled
		<b>Pin A4:</b>
		<input id="ia4" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;&nbsp
		<b>Latch Threshold</b>
		<input id="a1thr4" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;
		<b>Data Latch:</b>
		<select id="alatch4" onchange="analogLatch('4', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">==</option>
			<option value="3"><</option>
			<option value="4"><=</option>
			<option value="5">></option>
			<option value="6">>=</option>
		</select>
		&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="alevent4" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>


		<input type="radio" name="a5" value="0" id="in5a" onclick="clicked(this.id);" checked>Disabled
		<input type="radio" name="a5" value="1" id="out5a" onclick="clicked(this.id);">Enabled
		<b>Pin A5:</b>
		<input id="ia5" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;&nbsp
		<b>Latch Threshold</b>
		<input id="a1thr5" name="pin" class="element text medium" type="text" maxlength="255" value="0"
			   style="width: 80px;"/>
		&nbsp;
		<b>Data Latch:</b>
		<select id="alatch5" onchange="analogLatch('5', (this.id));">
			<option value="1">No Latch Set</option>
			<option value="2">==</option>
			<option value="3"><</option>
			<option value="4"><=</option>
			<option value="5">></option>
			<option value="6">>=</option>
		</select>
		&nbsp;
		<b>Latch Event Occurred On:</b>
		<input id="alevent5" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>
		<br>

	</div>
	<div id="tabs-4">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<textarea id="reports" rows="10" cols="70"></textarea>
		<br>
		<br>
		<input id="analogReport" type="button" value="Get Analog Map" onclick="getAnalogMap();"/>
		&nbsp
		<input id="capabilityReport" type="button" value="Get CapablilityReport" onclick="getCapabilityReport();"/>
		&nbsp
		<input id="firmWareVersion" type="button" value="Get Firmware Version" onclick="getFirmwareVersion();"/>
		&nbsp
		<input id="protocolVersion" type="button" value="Get Protocol Version" onclick="getProtocolVersion();"/>
		&nbsp
		<input id="pymataVersion" type="button" value="Get PyMata Version" onclick="getPymataVersion();"/>
		<br>
		<br>
		<input id="pinStateReport" type="button" value="Get Pin State Report for Pin:" onclick="getPinState();"/>
		<INPUT id="pinSpinner" TYPE="NUMBER" MIN="0" MAX="127" STEP="1" VALUE="0" SIZE="3">
		&nbsp
		(For Pin State Reports, first select the pin number by using the spinner and then click the button to the
		left)


	</div>
	<div id="tabs-5">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<b>Digital Pin: </b>
		<INPUT TYPE="NUMBER" id="drPin" MIN="2" MAX="19" STEP="1" VALUE="2" SIZE="1">

		<input id="digMan2" type="button" value="Read" onclick="digitalRead(this.id);"/>
		&nbsp
		<input id="ddata" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 80px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

		<b>Analog Pin: </b>
		<INPUT TYPE="NUMBER" id="arPin" MIN="0" MAX="5" STEP="1" VALUE="0" SIZE="1">

		<input id="alMan2" type="button" value="Read" onclick="analogRead(this.id);"/>
		&nbsp
		<input id="adata" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 80px;"/>

		<br>
		<br>

		<br>
		<br>
		<b>Digital Latch Table Data: </b>
		<INPUT TYPE="NUMBER" id="dlData" MIN="2" MAX="19" STEP="1" VALUE="2" SIZE="1">

		<input id="digLatch2" type="button" value="Read" onclick="digitalLatchRead(this.id);"/>
		&nbsp
		<input id="dlatchdata" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>

		<br>
		<br>
		<b>Analog Latch Table Data: </b>
		<INPUT TYPE="NUMBER" id="alData" MIN="0" MAX="5" STEP="1" VALUE="0" SIZE="1">

		<input id="anlLatch2" type="button" value="Read" onclick="analogLatchRead(this.id);"/>
		&nbsp
		<input id="alatchdata" name="pin" class="element text medium" type="text" maxlength="255" value=""
			   style="width: 500px;"/>

		<br>
		<br>
	</div>
	<div id="tabs-6">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<b>Servo Pin</b>
		<select id="servoPin">
			<option value="3">3</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Servo Angle in Degress</b>
		<input id="servoAngle" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 60px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="moveServo" type="button" value="Set Servo" onclick="servo();"/>
	</div>
	<div id="tabs-7">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<b>Default Values Are Set to Read Temperature from </b>
		<a href="https://www.sparkfun.com/products/11931" target="_blank">A Sparkfun TMP102 </a>
		<h2>I2C Config (Use before an I2C read or write)</h2>
		<input id="configI2C" type="button" value="Configure I2C" onclick="i2cConfig();"/>
		<b>Read Delay Time</b>
		<input id="i2cDelayTime" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 120px;"/>


		<h2>I2C Read</h2>
		<b>Device Address</b>
		<input id="i2cReadAddress" name="pin" class="element text medium" type="text" maxlength="4" value="72"
			   style="width: 120px;"/>
		<b>Device Register</b>
		<input id="i2cReadRegister" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 120px;"/>
		<b>Number of Bytes To Read</b>
		<input id="i2cReadNumBytes" name="pin" class="element text medium" type="text" maxlength="4" value="2"
			   style="width: 120px;"/>
		<b>Read Type</b>
		<select id="i2cReadType">
			<option value="I2C_READ">"I2C_READ"</option>
			<option value="I2C_READ_CONTINUOUS" selected>"I2C_READ_CONTINUOUS"</option>
			<option value="I2C_STOP_READING">"I2C_STOP_READING"</option>
		</select>
		<br>
		<br>
		<input id="i2cReadReq" type="button" value="I2C Read" onclick="i2cReadRequest();"/>
		<input id="i2cRequestResult" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 120px;"/>
		&nbsp;&nbsp<b>Celcius</b>
		<input id="i2cRequestResultc" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 120px;"/>
		&nbsp;&nbsp<b>Fahrenheit</b>
		<input id="i2cRequestResultf" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 120px;"/>

		<br> <br>
		<input id="i2cRead" type="button" value="Retrieve Last Read Value" onclick="i2cReadData();"/>
		<input id="i2cReadResult" name="pin" class="element text medium" type="text" maxlength="4" value="0"
			   style="width: 120px;"/>

		<br><br><hr size="6">
		<h1>PyMata IoT</h1>
		<b> Write Data To 8x8 BiColor LED Backpack</b>
		<a href="https://www.adafruit.com/products/902" target="_blank">Adafruit Product ID 109 </a>
		<br><br>
		<input id="i2cWriteTest" type="button" value="First Row On" onclick="i2cWriteDemo(1);"/>
		&nbsp;&nbsp
		<input id="i2cWriteTest" type="button" value="First Row Off" onclick="i2cWriteDemo(0);"/>


	</div>
	<div id="tabs-8">
		<p id="connected"><b><a href="javascript:WebSocketTest()">Connexion à Pymata</a></b></p>
		<h2>Tone</h2><br>
		<b>Pin:</b>
		<select id="tonePin">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Frequency (Hz)</b>
		<input id="freq" class="element text medium" type="text" maxlength="4" value="1000"
			   style="width: 60px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Duration (ms)</b>
		<input id="duration" class="element text medium" type="text" maxlength="4" value="100"
			   style="width: 60px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="tone" type="button" value="Play Tone" onclick="playTone();"/>
		<br><br>

		<h2>Encoder</h2>
		<b>Encoder Pin A:</b>
		<select id="encoderPinA">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Encoder Pin B:</b>
		<select id="encoderPinB">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="getAutoEncoder" type="button" value="Auto Encoder Read" onclick="encoderRead(0);"/>

		<input id="encoderValue" class="element text medium" type="text" maxlength="4" value=""
			   style="width: 100px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="getEncoder" type="button" value="Manual Encoder Read" onclick="encoderRead(1);"/>
		<input id="encoderValue2" class="element text medium" type="text" maxlength="4" value=""
			   style="width: 100px;"/>
		<br><br>

		<h2>Sonar</h2>
		<b>Trigger Pin:</b>
		<select id="sonarTriggerPin">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Echo Pin:</b>
		<select id="sonarEchoPin">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="getAutoSonar" type="button" value="Auto Sonar Read" onclick="sonarRead(0);"/>

		<input id="sonarValue" class="element text medium" type="text" maxlength="4" value=""
			   style="width: 100px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input id="getEncoder" type="button" value="Manual Sonar Read" onclick="sonarRead(1);"/>
		<input id="sonarValue2" class="element text medium" type="text" maxlength="4" value=""
			   style="width: 100px;"/>
		<br><br>

		<h2>Stepper</h2>
		<b>Pin 1:</b>
		<select id="stepperPin1">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8" selected>8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Pin 2:</b>
		<select id="stepperPin2">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9" selected>9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Pin 3:</b>
		<select id="stepperPin3">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10" selected>10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b>Pin 4:</b>
		<select id="stepperPin4">
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11" selected>11</option>
			<option value="12">12</option>
			<option value="13">13</option>
			<option value="14">14</option>
			<option value="15">15</option>
			<option value="16">16</option>
			<option value="17">17</option>
			<option value="18">18</option>
			<option value="19">19</option>
		</select>


		&nbsp
		<b>Steps/Rev (<= 21 bits)</b>
		<input id="stepRev" class="element text medium" type="text" maxlength="4" value="180"
			   style="width: 100px;"/>
		<br>
		<br>

		<b>Motor Speed (<= 21 bits)</b>
		<input id="motorSpeed" class="element text medium" type="text" maxlength="4" value="20"
			   style="width: 100px;"/>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<b># Steps (<= 14 bits)</b>
		<input id="numSteps" class="element text medium" type="text" maxlength="4" value="500"
			   style="width: 100px;"/>
					&nbsp;&nbsp;&nbsp;&nbsp;

		<input id="runStepper" type="button" value="Run Stepper" onclick="runStepMotor();"/>
	</div>
	<div id="tabs-9">
		<b>Documentation</b><br/>
		<br/>
		Utilisation de s2aio mais surtout du module pymata intégré : <a href="https://github.com/MrYsLab/s2aio/wiki"><u>wiki d'Alan Yorinks</u></a>
		<br/><br/>
		Pour Windows, il ne vous reste plus qu'à télécharger le package suivant : <a href="https://github.com/technologiescollege/ressources/blob/master/logiciels/s2aio.7z?raw=true"><u>fichier "s2aio.7z" à dézipper</u></a></br>
		<br/>
		<b>Téléverser FirmataPlus (depuis <a href="http://www.pedagogie.ac-nantes.fr/-814254.kjsp"><u>l'IDE Arduino TechnoNantes</u></a> <a href="https://github.com/technologiescollege/arduino/archive/master.zip"><u>téléchargeable sur Github</u></a>) dans la carte :</b>
		<br/><br/>
		<iframe src="https://player.vimeo.com/video/115398997?portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><i><a href="https://vimeo.com/115398997"><u>firmataplus arduino</u></a> from <a href="https://vimeo.com/user11250089"><u>web.sti</u></a> on <a href="https://vimeo.com"><u>Vimeo</u></a>.</p></i>
		<br/>
		Lancer le fichier BATCH : <b><i>pymata-aio.bat</i></b>, compléter le bon port COM et laisser ce script lancé pour communiquer.
		<br/>
	</div>
</div>