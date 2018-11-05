# Node.js Workshop

Sebastian Springer

aus München

MaibornWolff GmbH

sebastian.springer@maibornwolff.de

@basti_springer

##Links

- https://nodejs.org/en/ Die Plattform-Seite
- https://github.com/nodejs/Release#release-schedule Relese Zeitplan

- https://nodejs.org/en/download/package-manager/ Installation unter Linux

- https://github.com/creationix/nvm Node Version Manager - mehrere Node Versionen auf einem System

- https://docs.npmjs.com/misc/scripts

## Projekt setup

1. npm init => erstellt die package.json (npm init --yes => jaja passt schon modus)

1. main => Einstiegspunkt (STandard: index.js)

1. private: true => verhindert versehentliches publizieren

1. .gitignore => Ignorieren des node_modules verzeichnisses

1. Abhängigkeiten Installieren Dev: npm install --save-dev <dep> Prod: npm install <dep>

## Wie gut ist denn mein Paket?

- NPM Downloads
- Github Stars, Commits, Commit-Alter...
- Dokumentation
- Tests
- Lizenz

## Tools

- NVM https://github.com/creationix/nvm
- NLF https://github.com/iandotkelly/nlf

## Debugger

1. Starten: node --inspect-brk index.js (break on first line) oder --inspect (ohne bofl)
2. Chrome: chrome://inspect => remote Target auswählen

VSCODE: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
Webstorm: https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html
