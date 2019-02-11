const FEN_TO_PIECE = {
	// White
	R: 1,
	N: 2,
	B: 3,
	Q: 4,
	K: 5,
	P: 6,

	// Black
	r: 11,
	n: 12,
	b: 13,
	q: 14,
	k: 15,
	p: 16,
};

function parseFEN(fen) {
	const split = fen.split("/");
	return split.map((line) => {
		var ret = [];
		for (var c of line) {
			const n = parseInt(c);
			if (isNaN(n)) ret.push(FEN_TO_PIECE[c]);
			else ret = ret.concat(new Array(n).fill(0));
		}
		return ret;
	});
}
export { parseFEN };
