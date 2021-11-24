function getCode(schema: string) {
  return `
    import gql from 'graphql-tag';

    export default gql\`${schema}\`
  `;
}

function transform(src: string, id: string) {
  if (id.endsWith('.graphql') || id.endsWith('.gql')) {
    const schema = JSON.stringify(src);

    return {
      code: getCode(schema),
      map: null
    };
  }
}

function VitePluginGQL() {
  return {
    name: 'vite-plugin-gql',
    transform
  };
}