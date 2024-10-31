run:
	DENO_DIR="./deno" deno --allow-read=framer-site-bundle index.mjs

clean:
	rm -rf deno
