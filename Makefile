dev:
	@pnpm run dev -- --open
build:
	@rm -rf ./build/ &&	pnpm run build
deploy:
	git subtree push --prefix dist origin gh-pages
preview:
	@pnpm run preview
lint:
	@pnpm run lint
format:
	@pnpm run format 

default: dev

.PHONY: default
