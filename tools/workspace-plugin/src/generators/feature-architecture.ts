import {
  formatFiles,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { FeatureArchitectureGeneratorSchema } from './schema';
import { componentGenerator } from '@nx/angular/generators';
import { relative } from 'path';

function toPascalCase(value: string): string {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export async function featureArchitectureGenerator(
  tree: Tree,
  options: FeatureArchitectureGeneratorSchema
) {
  const featureName = options.name;
  const featureClassName = toPascalCase(featureName);

  // Get the selected application's configuration
  const project = readProjectConfiguration(tree, options.project);

  const sourceRoot = project.sourceRoot ?? `${project.root}/src`;
  const featureRoot =
    `${sourceRoot}/app/features/${featureName}`;
    // Components
    // tree.write(
    //   `${sourceRoot}/app/features/components/README.md`,
    //   '# Components\n\nUI components for this feature.\n'
    // );
    
    const componentPath =
      `${featureRoot}/components/${featureName}-list`;

    await componentGenerator(tree, {
      path: componentPath,
      standalone: true,
      style: 'scss',
      changeDetection: 'OnPush',
    });

    // Data access
    tree.write(
    `${sourceRoot}/app/features/data-access/${featureName}.service.ts`,
    `import { Injectable } from '@angular/core';
      @Injectable({
        providedIn: 'root',
      })
      export class ${featureClassName}Service {
        // Add feature-specific API calls and business logic here.
      }`
  );

  // Models
  tree.write(
    `${sourceRoot}/app/features/models/${featureName}.model.ts`,
      `export interface ${featureClassName} {
      id: string;
    }
`
  );

  // Utils
  tree.write(
    `${sourceRoot}/features/utils/README.md`,
    '# Utils\n\nFeature-specific helper functions.\n'
  );

  // Feature entry point
  tree.write(
    `${sourceRoot}/app/features/index.ts`,
    `export * from './models/${featureName}.model';
    export * from './data-access/${featureName}.service';
    `
  );


  await formatFiles(tree);

}

export default featureArchitectureGenerator;
