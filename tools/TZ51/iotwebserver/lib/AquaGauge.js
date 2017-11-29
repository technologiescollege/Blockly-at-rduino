/************************************************************************************
    HTML5 Gauge control
    Author: Ambalavanar Thirugnanam (ambalavanar.thiru@gmail.com)

    usage: var gauge = new AquaGauge('canvas_id');
           gauge.refresh(currentValue);
*************************************************************************************/
function AquaGauge(target) {
    this.cvsHelper = new CanvasHelper(document.getElementById(target));
    this.props = new GaugeParams(this.cvsHelper);

    //Public method to drawGauge
    this.refresh = function (currentValue) {
        this.props.currentValue = currentValue;
        validateProps(this.props);        
        var currAngle = ((this.props.endAngle - this.props.startAngle) * (this.props.currentValue - this.props.minValue)) / (this.props.maxValue - this.props.minValue) - this.props.endAngle;
        clearCvs(this.cvsHelper, this.props);
        drawDial(this.cvsHelper, this.props);
        drawScale(this.cvsHelper, this.props, this.drawGraduation, this.drawValue);
        drawArc(this.cvsHelper, this.props);
        drawCurrentValue(this.cvsHelper, this.props.currentValue, this.props);
        drawPointer(this.cvsHelper, currAngle, this.props);
        drawCenterCircle(this.cvsHelper, this.props);
        if (this.props.showGlossiness)
            drawGlosiness(this.cvsHelper, this.props);
    };

    //Draws a graduation/division on the gauge scale
    this.drawGraduation = function (cvs, x, y, angle, isMajor, props) {
        cvs.ctx.save();
        cvs.ctx.translate(x, y);
        cvs.ctx.rotate(convertDegToRad(angle));
        if (isMajor) {
            cvs.ctx.fillStyle = props.majorDivisionColor;
            cvs.ctx.fillRect(0, getRelVal(cvs, 5)/2, getRelVal(cvs, 23), getRelVal(cvs, 5));
        } else {
            cvs.ctx.fillStyle = props.minorDivisionColor;
            cvs.ctx.fillRect(0, 0, getRelVal(cvs, 7), getRelVal(cvs, 3));            
        }
        cvs.ctx.restore();
    };

    //Draws value text on the scale
    this.drawValue = function (cvs, x, y, angle, value, isMajor, props) {
        cvs.ctx.save();
        cvs.ctx.translate(x, y);
        cvs.ctx.shadowColor = props.dialScaleTextShadowColor;
        if (isMajor) {
            cvs.ctx.font = props.dialScaleFont;
            cvs.ctx.fillStyle = props.dialScaleTextColor;
        }
        else {
            cvs.ctx.font = props.dialSubScaleFont;
            cvs.ctx.fillStyle = props.dialSubScaleTextColor;
        }
        cvs.ctx.shadowOffsetX = 0.5;
        cvs.ctx.shadowOffsetY = 0.5;        
        var adj = cvs.ctx.measureText(value).width / 2;
        cvs.ctx.fillText(value, -adj, 0);
        cvs.ctx.restore();
    };

    //clears the canvas
    function clearCvs(cvs, props) {
        cvs.ctx.fillStyle = props.backgroundColor;
        cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
    }

    //Drawing Methods
    //-----------------------------------------------------
    //Draw the dial base
    function drawDial(cvs, props) {       
        //Draw radial gradient background
        var grd = cvs.ctx.createRadialGradient(cvs.cX, cvs.cY, 0, cvs.cX, cvs.cY, cvs.cX);
        grd.addColorStop(0, props.dialGradientColor);
        grd.addColorStop(1, props.dialColor);
        cvs.ctx.fillStyle = grd;        
        cvs.ctx.beginPath();
        cvs.ctx.arc(cvs.cX, cvs.cY, cvs.cX, 0, convertDegToRad(360), true);
        cvs.ctx.closePath();
        cvs.ctx.fill();

        //Draw blurred glossiness
        if (props.showGlossiness) {
            cvs.ctx.save();
            cvs.ctx.scale(1, 0.7);
            var grd = cvs.ctx.createRadialGradient(cvs.cX, cvs.height * 1.3, 0, cvs.cX, cvs.height * 1.2, cvs.height * 0.4);
            grd.addColorStop(0, "rgba(255, 255, 255, 0.5)");
            grd.addColorStop(0.6, "rgba(255, 255, 255, 0.05)");
            grd.addColorStop(1, "rgba(255, 255, 255, 0)");
            cvs.ctx.fillStyle = grd;
            cvs.ctx.beginPath();
            cvs.ctx.arc(cvs.cX, cvs.height * 1.2, cvs.cX * 0.6, 0, convertDegToRad(360), true);
            cvs.ctx.closePath();
            cvs.ctx.fill();
            cvs.ctx.restore();
        }        

        //Draw dial title texts
        cvs.ctx.save();
        cvs.ctx.shadowColor = props.dialGradientColor;
        cvs.ctx.shadowOffsetX = 1;
        cvs.ctx.shadowOffsetY = 1;

        cvs.ctx.font = props.dialTitleTextFont;
        cvs.ctx.fillStyle = props.dialTitleTextColor;
        var adj = cvs.ctx.measureText(props.dialTitle).width / 2;
        cvs.ctx.fillText(props.dialTitle, cvs.cX - adj, cvs.height * 0.37);

        cvs.ctx.font = props.dialSubTitleTextFont;
        cvs.ctx.fillStyle = props.dialSubTitleTextColor;
        var adj = cvs.ctx.measureText(props.dialSubTitle).width / 2;
        cvs.ctx.fillText(props.dialSubTitle, cvs.cX - adj, cvs.height * 0.67);
        cvs.ctx.restore();
    }

    //Draw the scale graduations/divisions
    function drawScale(cvs, props, drawGrad, drawValue) {
        var totalDivs = props.noOfDivisions * props.noOfSubDivisions;
        var valInc = (props.maxValue - props.minValue) / totalDivs;
        var angInc = (props.endAngle - props.startAngle) / totalDivs;

        var majorRadius = cvs.cX - getRelVal(cvs, 27) - props.rimWidth;
        var minorRadius = cvs.cX - getRelVal(cvs, 12) - props.rimWidth;
        var textRadius = cvs.cX - getRelVal(cvs, 43) - props.rimWidth;
        var textMinorRadious = cvs.cX - getRelVal(cvs, 23) - props.rimWidth

        for (var i = 0; i < totalDivs+1; i++) {
            var currentAngle = props.startAngle + angInc * i;
            var currentVal = props.minValue + valInc * i;

            if (i % props.noOfSubDivisions == 0) {
                var x = getX(cvs.cX, majorRadius, currentAngle);
                var y = getY(cvs.cY, majorRadius, currentAngle);
                drawGrad(cvs, x, y, currentAngle, true, props);

                x = getX(cvs.cX, textRadius, currentAngle);
                y = getY(cvs.cY, textRadius, currentAngle);
                drawValue(cvs, x, y, currentAngle, roundToDecimal(currentVal, 2), true, props);
            } else {
                var x = getX(cvs.cX, minorRadius, currentAngle);
                var y = getY(cvs.cY, minorRadius, currentAngle);
                drawGrad(cvs, x, y, currentAngle, false, props);

                if (props.showMinorScaleValue) {
                    x = getX(cvs.cX, textMinorRadious, currentAngle);
                    y = getY(cvs.cY, textMinorRadious, currentAngle);
                    drawValue(cvs, x, y, currentAngle, roundToDecimal(currentVal, 2), false, props);
                }
            }
        }
    }

    //Draw scale outline / arcs.
    function drawArc(cvs, props) {
        var gap = getRelVal(cvs, 7);

        //Draw scale arc - outline
        cvs.ctx.save();
        cvs.ctx.strokeStyle = props.rimColor;
        cvs.ctx.lineWidth = props.rimWidth;
        cvs.ctx.beginPath();
        cvs.ctx.arc(cvs.cX, cvs.cY, cvs.cX - gap, convertDegToRad(props.startAngle+1), convertDegToRad(props.endAngle+3), false);
        cvs.ctx.stroke();
        cvs.ctx.restore();

        //Draw range segements color arc
        if (props.rangeSegments && props.rangeSegments.length > 0) {
            for (var i = 0; i < props.rangeSegments.length; i++) {
                cvs.ctx.save();
                cvs.ctx.strokeStyle = props.rangeSegments[i].color;
                cvs.ctx.lineWidth = props.rimWidth;
                cvs.ctx.beginPath();
                var stAngle = ((props.endAngle - props.startAngle) * (props.rangeSegments[i].start - props.minValue)) / (props.maxValue - props.minValue) + props.startAngle;
                var edAngle = ((props.endAngle - props.startAngle) * (props.rangeSegments[i].end - props.minValue)) / (props.maxValue - props.minValue) + props.startAngle;
                cvs.ctx.arc(cvs.cX, cvs.cY, cvs.cX - gap, convertDegToRad(stAngle+1), convertDegToRad(edAngle+3), false);
                cvs.ctx.stroke();
                cvs.ctx.restore();
            }
        }
    }

    //Print current value at the bottom of the gauge
    function drawCurrentValue(cvs, currValue, props) {
        cvs.ctx.save();
        cvs.ctx.shadowColor = props.dialGradientColor;
        cvs.ctx.shadowOffsetX = 0.5;
        cvs.ctx.shadowOffsetY = 0.5;
        cvs.ctx.shadowColor = "rgba(255, 255 ,255, 0.7)";
        cvs.ctx.fillStyle = "rgba(45, 45, 45, 0.1)";
        cvs.ctx.strokeStyle = "rgba(45, 45, 45, 0.2)";
        roundRect(cvs.ctx, cvs.cX - getRelVal(cvs, 40), cvs.height * 0.83, getRelVal(cvs, 80), getRelVal(cvs, 35), getRelVal(cvs, 5), true, true);
        cvs.ctx.font = props.dialValueTextFont;
        cvs.ctx.fillStyle = props.dialValueTextColor;
        adj = cvs.ctx.measureText(currValue).width / 2;
        cvs.ctx.fillText(currValue, cvs.cX - adj, cvs.height * 0.92);
        cvs.ctx.restore();
    }

    //Draws the pointer
    function drawPointer(cvs, angle, props) {
        var lenX = getRelVal(cvs, 30);
        var lenY = getRelVal(cvs, 15);
        var pointerLen = getRelVal(cvs, 110);
        var pointerThickness = getRelVal(cvs, 10);

        cvs.ctx.save();
        cvs.ctx.translate(cvs.cX, cvs.cY);
        cvs.ctx.rotate(convertDegToRad(angle - 2));
        setShadow(cvs, props.shadowColor, 7);        

        //Pointer back ext
        var grd = cvs.ctx.createLinearGradient(0, 0, lenX, 0);
        grd.addColorStop(0, props.pointerColor);
        grd.addColorStop(1, props.pointerGradientColor);
        cvs.ctx.fillStyle = grd;
        cvs.ctx.beginPath();
        cvs.ctx.moveTo(0, -lenY * 0.6);
        cvs.ctx.lineTo(lenX, -lenY);
        cvs.ctx.bezierCurveTo(lenX, -lenY, lenX + 10, 0, lenX, lenY);
        cvs.ctx.lineTo(0, lenY * 0.6);
        cvs.ctx.closePath();
        cvs.ctx.fill();
        cvs.ctx.lineWidth = 1;
        cvs.ctx.strokeStyle = props.pointerColor;
        cvs.ctx.stroke();       

        //Pointer upper half
        cvs.ctx.beginPath();
        cvs.ctx.moveTo(0, 0);
        cvs.ctx.lineTo(0, 0 - pointerThickness);
        cvs.ctx.lineTo(0 - pointerLen, 0);
        cvs.ctx.lineTo(0, 0);
        cvs.ctx.closePath();
        cvs.ctx.fill();
        cvs.ctx.lineWidth = 1;
        cvs.ctx.strokeStyle = props.pointerColor;
        cvs.ctx.stroke();

        //Pointer bottom half
        grd = cvs.ctx.createLinearGradient(0, 0, 0 - pointerLen, 0);
        grd.addColorStop(0, props.pointerColor);
        grd.addColorStop(1, props.pointerGradientColor);
        cvs.ctx.fillStyle = grd;
        cvs.ctx.beginPath();
        cvs.ctx.moveTo(0, 0);
        cvs.ctx.lineTo(0, 0 + pointerThickness);
        cvs.ctx.lineTo(0 - pointerLen, 0);
        cvs.ctx.lineTo(0, 0);
        cvs.ctx.closePath();
        cvs.ctx.fill();
        cvs.ctx.lineWidth = 1;
        cvs.ctx.strokeStyle = props.pointerColor;
        cvs.ctx.stroke();

        cvs.ctx.restore();
    }

    //Draws the shiny center circle
    function drawCenterCircle(cvs, props) {
        var radius = getRelVal(cvs, 20);
        var grd = cvs.ctx.createRadialGradient(cvs.cX, cvs.cY, 0, cvs.cX, cvs.cY, radius);        
        grd.addColorStop(0, "rgba(75, 75, 75, 0.9)");
        grd.addColorStop(1, "rgba(130, 130, 130, 0.9)");        
        cvs.ctx.fillStyle = grd;
        cvs.ctx.beginPath();
        cvs.ctx.arc(cvs.cX, cvs.cY, radius, 0, convertDegToRad(360), false);
        cvs.ctx.closePath();
        cvs.ctx.fill();
        cvs.ctx.lineWidth = 1;
        cvs.ctx.strokeStyle = props.pointerColor;
        cvs.ctx.stroke();

        grd = cvs.ctx.createLinearGradient(cvs.cX, cvs.cY - radius, cvs.cX, cvs.cY + getRelVal(cvs, 10));
        grd.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        grd.addColorStop(1, "rgba(255, 255, 255, 0)");
        cvs.ctx.fillStyle = grd;
        cvs.ctx.beginPath();
        cvs.ctx.arc(cvs.cX, cvs.cY, getRelVal(cvs, 18), 0, convertDegToRad(160), true);
        cvs.ctx.closePath();        
        cvs.ctx.fill();
        cvs.ctx.restore();
    }

    //Draws the glossiness
    function drawGlosiness(cvs, props) {
        cvs.ctx.save();
        cvs.ctx.scale(1, 0.8);
        var grd = cvs.ctx.createLinearGradient(cvs.cX, 0, cvs.cX, cvs.height * .8);
        grd.addColorStop(0, "rgba(255, 255, 255, 0.45)");
        grd.addColorStop(1, "rgba(255, 255, 255, 0.07)");
        cvs.ctx.fillStyle = grd;
        cvs.ctx.beginPath();
        cvs.ctx.arc(cvs.cX, cvs.cY * .93, cvs.cX * .85, 0, convertDegToRad(360), true);
        cvs.ctx.closePath();
        cvs.ctx.fill();
        cvs.ctx.restore();
    }

    // Utility Methods 
    function convertDegToRad(degrees) {
        return (degrees * Math.PI)/180;
    }

    //Validates properties and sets default values for invalid values.
    function validateProps(props) {        
        if (props.maxValue <= props.minValue)
            props.maxValue = props.minValue + 10;
        props.currentValue = props.currentValue > props.minValue ? (props.currentValue > props.maxValue ? props.maxValue : props.currentValue) : props.minValue;

        if (props.noOfSubDivisions > 15)
            props.noOfSubDivisions = 15;

        if (props.noOfDivisions > 25)
            props.noOfDivisions = 25;

        if (props.noOfSubDivisions < 1)
            props.noOfSubDivisions = 1;

        if (props.noOfDivisions < 2)
            props.noOfDivisions = 2;

        if (props.rimWidth > 40)
            props.rimWidth = 40;
    }

    //Gets the X point on the circumference
    function getX(cX, radius, degrees) {
        return cX + radius * Math.cos(convertDegToRad(degrees));
    }

    //Gets the Y point on the circumference
    function getY(cY, radius, degrees) {
        return cY + radius * Math.sin(convertDegToRad(degrees));
    }

    //Sets shadow
    function setShadow(cvs, color, blurAmt) {
        cvs.ctx.shadowColor = color;
        cvs.ctx.shadowBlur = blurAmt;
        cvs.ctx.shadowOffsetX = getRelVal(cvs, 3);
        cvs.ctx.shadowOffsetY = getRelVal(cvs, 3);
    }    

    //Draws a rounded rectangle - RoundRect by http://stackoverflow.com/users/514749/pimvdb.
    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == "undefined") {
            stroke = true;
        }
        if (typeof radius === "undefined") {
            radius = 5;
        }
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (stroke) {
            ctx.stroke();
        }
        if (fill) {
            ctx.fill();
        }
    }
}

//Returns val relative to the canvas width.
function getRelVal(cvs, val) {
    return val * cvs.width / 300;
}

function roundToDecimal(val, dp) {
    if (dp < 1) dp = 1;
    var dc = Math.pow(10, dp);
    return Math.round(val * dc) / dc;
}

//Wrapper class for canvas
function CanvasHelper(cvs) {
    this.width = cvs.width;
    this.height = cvs.height;
    this.ctx = cvs.getContext('2d');
    this.cX = this.width / 2;
    this.cY = this.height / 2;
}

//Contains all the gauge parameters.
function GaugeParams(cvs) {
    //Dial
    this.backgroundColor = "white";
    this.dialColor = "rgba(158, 166, 222, 1)";
    this.dialGradientColor = "rgba(209, 211, 227, 0.5)";
    this.dialValueTextFont = getRelVal(cvs, 27) + "px Arial Black";
    this.dialValueTextColor = "#717599";
    this.dialTitleTextFont = "bold " + getRelVal(cvs, 18) + "px Trebuchet MS";
    this.dialTitleTextColor = "#454545";
    this.dialTitle = "AQUA GAUGE";
    this.dialSubTitleTextFont = getRelVal(cvs, 15) + "px Trebuchet MS";
    this.dialSubTitleTextColor = "#757575";    
    this.dialSubTitle = "By Ambalavanar";
    this.showGlossiness = true;

    //Scale
    this.minValue = 0.0;
    this.maxValue = 100.0;
    this.noOfDivisions = 10.0;
    this.noOfSubDivisions = 3.0;
    this.majorDivisionColor = "#656565";
    this.minorDivisionColor = "#858585";    
    this.rimColor = "#8c8fa8";
    this.rimWidth = "" + getRelVal(cvs, 6);
    this.startAngle = 125.0;
    this.endAngle = 410.0;

    //Scale Ranges
    this.rangeSegments = [{ start: 0, end: 40, color: "greenyellow" },
                          { start: 40, end: 75, color: "yellow" },
                          { start: 75, end: 100, color: "red"}];

    //Scale - Text
    this.dialScaleFont = "bold " + getRelVal(cvs, 17) + "px Trebuchet MS";
    this.dialSubScaleFont = "bold " + getRelVal(cvs, 12) + "px Trebuchet MS";    
    this.dialScaleTextShadowColor = "#f1f1f1";
    this.dialScaleTextColor = "#252525";
    this.dialSubScaleTextColor = "#555555";
    this.showMinorScaleValue = false;

    //Pointer
    this.pointerColor = "rgba(75, 75, 75, 0.7)";
    this.pointerGradientColor = "rgba(130, 130, 130, 0.7)";
    this.shadowColor = "#454545";    
    this.currentValue = 0.0;
}