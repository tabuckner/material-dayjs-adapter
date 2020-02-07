import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngUpdate(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    throw new Error('Schematic is not yet implemented.');
    _context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
