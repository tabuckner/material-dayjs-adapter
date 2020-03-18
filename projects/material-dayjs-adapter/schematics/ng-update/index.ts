import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngUpdate(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    throw new Error('Schematic is not yet implemented.');
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
