.PHONY: all clean fclean tests_run

# Target: all — installs deps and builds the app
all:
	cd myportfolio && npm install && npm run build

# Target: clean — removes node_modules only
clean:
	cd myportfolio && rm -rf node_modules

# Target: fclean — does a full clean including build
fclean: clean
	cd myportfolio && rm -rf build

# Target: tests_run — runs React tests
tests_run:
	cd myportfolio && npm test -- --watchAll=false
