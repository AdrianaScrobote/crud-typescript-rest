import * as server from './app';

const port = process.env.PORT ?? 3000;

server
  .start(port)
  .then(() => console.log(`Server up at port ${port}`))
  .catch((e) => {
    console.log('erro >>>> ' + e);
  });

process.on('uncaughtException', (err) => {
  console.error('uncaughtException >>>> ', err);
});

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection >>>> ', err);
});
