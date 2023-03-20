const ts = require("../typescript/built/local/typescript");

const filename = "./input.ts";
const program = ts.createProgram([filename], {
  allowJs: false,
  strictNullChecks: true,
});

const sourceFile = program.getSourceFile(filename);
const typeChecker = program.getTypeChecker();

function visitNode(node) {
  if (
    node.kind === ts.SyntaxKind.TypeAliasDeclaration &&
    node.name.escapedText === "ResType"
  ) {
    const type = typeChecker.getTypeFromTypeNode(node.name);

    console.log(type);
  }

  node.forEachChild((child) => visitNode(child));
}

visitNode(sourceFile);
