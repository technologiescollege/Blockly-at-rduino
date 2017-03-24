head.load(
"blocks/user/autoduino/autoduino.js",
function() {
    // Call a function when done
    console.log("Done loading Various USER Blocks");
});

head.load(
"blocks/user/blocks_user_typing.js",
"blocks/user/blocks_user_colors.js",
function() {
	// Call a function when done
	console.log("Done loading USER Blocks Configuration");
});
