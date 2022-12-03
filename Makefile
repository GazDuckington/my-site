dev:
	@pnpm run dev -- --open
build:
	@pnpm run build
preview:
	@pnpm run preview
lint:
	@pnpm run lint
format:
	rm -rf build/ 
	@pnpm run format 
