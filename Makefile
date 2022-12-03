dev:
	@pnpm run dev -- --open
build:
	@rm -rf ./build/ &&	pnpm run build
preview:
	@pnpm run preview
lint:
	@pnpm run lint
format:
	@pnpm run format 
