module.exports = {
  projectName: 'vue-demo',
  cluster: [],
  dev: {
    name: '开发环境',
    script: 'npm run build',
    host: '111.231.9.155',
    port: 22,
    username: 'root',
    password: 'xingEN521',
    distPath: 'dist',
    webDir: '/html/dist',
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true,
  },
};
