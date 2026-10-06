/**
 * Chrome/Edge 144+ workaround for Blockly legacy drag regression.
 *
 * Keep addSelect() side-effect free (CSS only), and move z-order update
 * to setDragging_(true), where drag listeners are already attached on document.
 */
(function() {
    'use strict';

    if (!window.Blockly || !Blockly.BlockSvg || !Blockly.BlockSvg.prototype) {
        return;
    }

    var proto = Blockly.BlockSvg.prototype;
    if (!proto.addSelect || !proto.setDragging_) {
        return;
    }

    // Prevent double patching if script is included more than once.
    if (proto.__chromium144DnDFixApplied) {
        return;
    }
    proto.__chromium144DnDFixApplied = true;

    var originalSetDragging = proto.setDragging_;

    function raiseBlockStack(block) {
        var current = block;
        while (current) {
            var svgRoot = current.getSvgRoot && current.getSvgRoot();
            if (svgRoot && svgRoot.parentNode) {
                svgRoot.parentNode.appendChild(svgRoot);
            }
            current = current.getParent && current.getParent();
        }
    }

    // Only apply selection styling on hover/select. No DOM move here.
    proto.addSelect = function() {
        Blockly.addClass_(this.svgGroup_, 'blocklySelected');
    };

    // Keep original drag logic, but raise visual stack at drag start.
    proto.setDragging_ = function(dragging) {
        if (dragging) {
            raiseBlockStack(this);
        }
        return originalSetDragging.call(this, dragging);
    };
})();
