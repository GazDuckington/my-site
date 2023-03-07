dev:
	@pnpm run dev -- --open
build:
	@rm -rf ./build/ &&	pnpm run build
deploy:
	@cp -r ./build/* ~/dev/gazduckington.github.io/
preview:
	@pnpm run preview
lint:
	@pnpm run lint
format:
	@pnpm run format 

default: dev

.PHONY: default
