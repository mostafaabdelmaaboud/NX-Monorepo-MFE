import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { featureArchitectureGenerator } from './feature-architecture';
import { FeatureArchitectureGeneratorSchema } from './schema';

describe('feature-architecture generator', () => {
  let tree: Tree;
  const options: FeatureArchitectureGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await featureArchitectureGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
