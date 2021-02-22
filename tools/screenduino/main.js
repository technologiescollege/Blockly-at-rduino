let width = 16;
let height = 2;

let panelWidth = 5;

let activeSegments = [];

let updateCanvasSize = (w, h) => {
    document.getElementById("copyAlert").style.opacity = 0;
    width = w;
    height = h;
    panelWidth = w > 16 ? 4 : 5;
    generateSegments();
    if (!codeStyle.checked) {
        document.getElementById("setup").innerText = `#include <LiquidCrystal.h>

        LiquidCrystal lcd(12, 11, 5, 4, 3, 2); // RS, E, D4, D5, D6, D7
        
        void setup() {
            \xa0\xa0 lcd.begin(${width}, ${height});
            \xa0\xa0 image();
          }
          
          void loop() {}
          
          `
    }
}

let updateColors = (color) => {
    document.documentElement.style.setProperty('--panelBg', 'var(--panelBg' + color + ')');
    document.documentElement.style.setProperty('--activePixel', 'var(--activePixel' + color + ')');
    document.documentElement.style.setProperty('--inactivePixel', 'var(--inactivePixel' + color + ')');
}

let copyCode = () => {
    let code = document.getElementById("bitmap");
    code.style.whiteSpace = `pre-line`;
    document.getElementById("dummy").value = code.innerText.trim().replace(/\n\n/gm, '\n');
    document.querySelector("#dummy").select();
    document.execCommand("copy");
    code.style.whiteSpace = `nowrap`;
    document.getElementById("copyAlert").style.opacity = 0.8;
}

let replaceAt = (string, index, replace) => {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

let setCursorAndWrite = (i, j) => {
    document.getElementById("createChar").innerText = "";
    document.getElementById("setCursor").innerText = "";

    let bytes = document.getElementById("bytes").innerText;
    let images = bytes.match(/(image\d\d)/gm);

    // createChar
    for (let i = 0; i < images.length; i++) {
        document.getElementById("createChar").innerText += `lcd.createChar(${i}, ${images[i]});
        `
    }

    // setCursorAndWrite
    for (i in images) {
        let segmentIndex = images[i].match(/\d\d/)[0] - 1;
        let column = segmentIndex < width ? segmentIndex : segmentIndex - Math.floor(segmentIndex / width) * width;
        let row = Math.floor(segmentIndex / width);
        document.getElementById("setCursor").innerText += `lcd.setCursor(${column}, ${row});
        lcd.write(byte(${i}));
        `
    }

}

let generateSegmentCode = (i, j, pixel) => {

    if (document.getElementById(`imageByteText${i}`) === null) {
        let emptySegmentCode;
        if (i < (10 - 1)) {
            emptySegmentCode = `byte image0${i + 1}[8] = {B00000, B00000, B00000, B00000, B00000, B00000, B00000, B00000};
            `
        } else {
            emptySegmentCode = `byte image${i + 1}[8] = {B00000, B00000, B00000, B00000, B00000, B00000, B00000, B00000};
            `
        }

        const text = document.createElement("span");
        text.setAttribute("id", `imageByteText${i}`);
        text.innerText = emptySegmentCode;
        let bytes = document.getElementById("bytes");
        bytes.appendChild(text);
    }

    let workingLine = document.getElementById(`imageByteText${i}`);
    workingLine = workingLine.innerText.substr(19, 62);
    workingLine = workingLine.split(', ').join('');
    workingLine = workingLine.split('B').join('');
    if (workingLine[j] == '0') {
        workingLine = replaceAt(workingLine, j, '1');
        pixel.style.backgroundColor = "var(--activePixel)";
    }
    else if (workingLine[j] == '1') {
        workingLine = replaceAt(workingLine, j, '0');
        pixel.style.backgroundColor = "var(--inactivePixel)";
    }
    workingLine = workingLine.match(/.{1,5}/g).join(', B');
    workingLine = 'B' + workingLine;

    let oldLine = document.getElementById(`imageByteText${i}`).innerText;
    document.getElementById(`imageByteText${i}`).innerText = oldLine.replace(oldLine.substr(19, 62), workingLine);
    checkForEmptySegments(i);
}

let checkForEmptySegments = (i) => {
    emptyString = document.getElementById(`imageByteText${i}`).innerText.includes(`B00000, B00000, B00000, B00000, B00000, B00000, B00000, B00000`);
    if (emptyString === true) {
        document.getElementById(`imageByteText${i}`).remove();
        activeSegments = activeSegments.filter(item => item !== i);
    }
}

let generateSegments = () => {
    let canvas = document.getElementById("canvas");
    let bytes = document.getElementById("bytes");
    canvas.style.padding = `${panelWidth / 10}vw`;
    document.getElementById("createChar").innerHTML = "";
    document.getElementById("setCursor").innerHTML = "";
    canvas.innerHTML = "";
    bytes.innerHTML = "";

    document.getElementById("canvas").style.width = `${width * panelWidth + width * (panelWidth / 5)}vw`;

    for (let i = 0; i < width * height; i++) {
        const segment = document.createElement("div");
        segment.setAttribute("id", "panel");
        segment.style.width = `${panelWidth}vw`;
        segment.style.height = `${8 * panelWidth / 5}vw`;
        segment.style.margin = `${panelWidth / 10}vw`;

        for (let j = 0; j < 5 * 8; j++) {
            const pixel = document.createElement("pixel");
            pixel.setAttribute("id", "pixel");
            pixel.style.width = `${panelWidth / 5}vw`;
            pixel.style.height = `${panelWidth / 5}vw`;
            pixel.onclick = () => {
                document.getElementById("copyAlert").style.opacity = 0;
                if (activeSegments.includes(i) || activeSegments.length < 8) {
                    activeSegments.includes(i) ? null : activeSegments.push(i);
                    generateSegmentCode(i, j, pixel);
                    setCursorAndWrite(i, j);
                    checkForEmptySegments(i);
                    activeSegments.includes(i) ? null : activeSegments.push(i);
                }
            }
            segment.appendChild(pixel);
        }
        canvas.appendChild(segment);
    }
}

let updateSetupCode = () => {
    let codeStyleCheckBox = document.querySelector('input[id="codeStyle"]');
    codeStyleCheckBox.addEventListener('change', () => {
        document.getElementById("copyAlert").style.opacity = 0;
        if (codeStyleCheckBox.checked) {
            document.getElementById("setup").innerText = ``;
        }
        else {
            document.getElementById("setup").innerText = `#include <LiquidCrystal.h>
            LiquidCrystal lcd(12, 11, 5, 4, 3, 2); // RS, E, D4, D5, D6, D7
            
            void setup() {
                \xa0\xa0 lcd.begin(${width}, ${height});
                \xa0\xa0 image();
              }
              
              void loop() {}
              
              `
        }
    });
}

window.onload = () => {
    updateCanvasSize(width, height);
    updateSetupCode();
    document.getElementById("bitmap").style.width = `calc(${(width * 5 + width) / 2}vw - 20px)`;
    document.getElementById("bitmap").style.height = `${document.getElementById("canvas").offsetHeight - 130}px`;
};