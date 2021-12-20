module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// Rebuild when dependencies change
for (let message of result.messages) {
  if (message.type === 'dependency') {
    watcher.addFile(message.file);
  } else if (message.type === 'dir-dependency' && message.glob) {
    watcher.addPattern(file.join(message.dir, message.glob));
  } else if (message.type === 'dir-dependency') {
    watcher.addPattern(file.join(message.dir, '**', '*'));
  }
}
